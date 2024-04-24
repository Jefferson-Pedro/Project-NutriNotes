package br.com.nutrinotes.service.user;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.user.UserDAO;
import br.com.nutrinotes.dto.UserEditFormDTO;
import br.com.nutrinotes.dto.UserWithoutBusinessDTO;
import br.com.nutrinotes.exception.InvalidAccountException;
import br.com.nutrinotes.exception.UserException;
import br.com.nutrinotes.model.user.User;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class UserImpl implements IUser {

	@Autowired
	private UserDAO dao;

	@Override
	public User create(@Valid @NotNull User user) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String newPassword = encoder.encode(user.getSenha());
		user.setSenha(newPassword);

		System.out.println("Usuário salvo com sucesso!");
		return dao.save(user);
	}

	@Override
	public boolean update(@Valid @NotNull User user, @NotNull @Positive Integer id) {
		Optional<User> res = dao.findById(id);

		if (res.isPresent()) {
			User existingUser = res.get();
			BCryptPasswordEncoder verifyOrEncoderPass = new BCryptPasswordEncoder();
			
			
			if(verifyOrEncoderPass.matches(user.getSenha(), existingUser.getSenha())) {
				String newPassword = verifyOrEncoderPass.encode(user.getSenha());
				user.setSenha(newPassword);

				BeanUtils.copyProperties(user, existingUser, "idUser");
				dao.save(existingUser);
				System.out.println("Usuário atualizado com sucesso!");
				return true;

			}
			
			throw new InvalidAccountException("Senha incorreta. Verifique as informações e tente novamente! ");			
		}
		
		throw new UserException("Usuário não existe no banco de dados!");
	}

	@Override
	public List<UserWithoutBusinessDTO> findAll() {
		List<User> listUsers = dao.findAll();
		List<UserWithoutBusinessDTO> listUsersDtos = listUsers.stream()
				.map(UserWithoutBusinessDTO :: fromUserWithoutBusinessDTO)
				.collect(Collectors.toList());
		
		return listUsersDtos;
	}

	@Override
	public List<UserWithoutBusinessDTO> findByName(@NotNull @NotBlank String nome) {
		List<User> listUsers = dao.findByNomeContaining(nome);
		List<UserWithoutBusinessDTO> listUsersDtos = listUsers.stream()
				.map(UserWithoutBusinessDTO :: fromUserWithoutBusinessDTO)
				.collect(Collectors.toList());
		
		return listUsersDtos;
	}

	@Override
	public UserEditFormDTO findById(@NotNull @Positive Integer id) {
		
		User existingUser = dao.findById(id).orElse(null);
		UserEditFormDTO userEditFormDTO = new UserEditFormDTO();
		BeanUtils.copyProperties(existingUser, userEditFormDTO, "senha");
		
		if (userEditFormDTO != null) {
			return userEditFormDTO;
		}
			throw new UserException("Usuário não encontrado!");	
	}

	@Override
	public boolean delete(@NotNull @Positive Integer id) {
		Optional<User> p = dao.findById(id);
		if (p.isPresent()) {
			dao.deleteById(id);
			System.out.println("Perfil com id " + id + " excluido com sucesso!");
			return true;
		}
		System.out.println("Ocorreu um erro ao excluir o perfil " + id);
		return false;
	}
}
