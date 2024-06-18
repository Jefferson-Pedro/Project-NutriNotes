package br.com.nutrinotes.service.user;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import br.com.nutrinotes.dao.user.UserDAO;
import br.com.nutrinotes.dto.UserEditDTO;
import br.com.nutrinotes.dto.UserViewDTO;
import br.com.nutrinotes.exception.EmptyListException;
import br.com.nutrinotes.exception.InvalidAccountException;
import br.com.nutrinotes.exception.RecordNotFoundException;
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
	public boolean update(@Valid @NotNull UserEditDTO user, @NotNull @Positive Integer id) {
		User res = dao.findById(id)
				.orElseThrow(()-> new RecordNotFoundException(id));;

		if(user.getSenha() != null && user.getNovaSenha() != null &&
		   !user.getSenha().isEmpty() && !user.getNovaSenha().isEmpty()) {

			if(user.getNovaSenha().length() < 6 || user.getNovaSenha().length() > 155) {

				throw new InvalidAccountException("Nova senha deve ter entre 3 e 155 caracteres.");
			}

			BCryptPasswordEncoder verifyOrEncoderPass = new BCryptPasswordEncoder();

			if (verifyOrEncoderPass.matches(user.getSenha(), res.getSenha())) {
				String newPassword = verifyOrEncoderPass.encode(user.getNovaSenha());
				user.setSenha(newPassword);

			}else {
				throw new InvalidAccountException("Senha incorreta. Verifique as informações e tente novamente! ");
			}	

		} else {
			user.setSenha(user.getSenha());
			BeanUtils.copyProperties(user, res, "idUser", "novaSenha");
			dao.save(res);
			System.out.println("Usuário atualizado com sucesso!");
			return true;	
		}
		return false;
	}

	@Override
	public List<UserViewDTO> findAll() {
		List<User> listUsers = dao.findAll();
		if(listUsers.isEmpty()) {
			throw new EmptyListException("Usuários");
		}
		List<UserViewDTO> listUsersDtos = listUsers.stream()
				.map(UserViewDTO :: fromUserWithoutBusinessDTO)
				.collect(Collectors.toList());
		
		return listUsersDtos;
	}

	@Override
	public List<UserViewDTO> findByName(@NotNull @NotBlank String nome) {
		List<User> listUsers = dao.findByNomeContaining(nome);
		if(listUsers.isEmpty()) {
			throw new EmptyListException("Usuários");
		}
		List<UserViewDTO> listUsersDtos = listUsers.stream()
				.map(UserViewDTO :: fromUserWithoutBusinessDTO)
				.collect(Collectors.toList());
		
		return listUsersDtos;
	}
	
	@Override //Metodo Interno
	public User findByImageProfile(@NotNull @NotBlank String filename) {
		String pathPartial = "http://localhost:8080/files/download/" + filename;
		return dao.findByImageProfile(pathPartial);
	}

	@Override
	public UserViewDTO findById(@NotNull @Positive Integer id) {
		
		User existingUser = dao.findById(id)
				.orElseThrow(()-> new RecordNotFoundException(id));
		
		UserViewDTO userViewDTO = new UserViewDTO();
		BeanUtils.copyProperties(existingUser, userViewDTO, "senha");
		
		return userViewDTO;
	}
	
	@Override //Metodo interno
	public UserEditDTO findByIdForUpdate(@NotNull @Positive Integer id) {
		User existingUser = dao.findById(id)
				.orElseThrow(()-> new RecordNotFoundException(id));;
		UserEditDTO updateUser = new UserEditDTO();
		BeanUtils.copyProperties(existingUser, updateUser, "novaSenha");
		
		return updateUser != null ? updateUser: null;
	}

	@Override
	public void delete(@NotNull @Positive Integer id) {
		User res = dao.findById(id)
				.orElseThrow(()-> new RecordNotFoundException(id));
			dao.deleteById(id);
			System.out.println("Perfil com id " + id + " excluido com sucesso!");
	}
}
