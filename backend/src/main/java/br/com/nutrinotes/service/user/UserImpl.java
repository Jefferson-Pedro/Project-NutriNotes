package br.com.nutrinotes.service.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.user.UserDAO;
import br.com.nutrinotes.dto.BusinessDTO;
import br.com.nutrinotes.dto.UserDTO;
import br.com.nutrinotes.dto.UserWithoutBusinessDTO;
import br.com.nutrinotes.model.business.Business;
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
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			String newPassword = encoder.encode(user.getSenha());
			user.setSenha(newPassword);

			User existingUser = res.get();
			BeanUtils.copyProperties(user, existingUser, "idUser");
			dao.save(existingUser);
			System.out.println("Usuário atualizado com sucesso!");
			return true;
		}
		System.out.println("Erro ao editar a perfil!");
		return false;
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
	public UserDTO findById(@NotNull @Positive Integer id) {
		User user = dao.findById(id).orElse(null);
		UserDTO userDTO = new UserDTO();
		BeanUtils.copyProperties(user, userDTO, "business");
		
		//Copiando a lista de empresas manualmente
		if (user != null && user.getBusiness() != null) {
			List<BusinessDTO> listBusinessDTOs = new ArrayList<>();
			for (Business business : user.getBusiness()) {
				BusinessDTO businessDTO = new BusinessDTO();
				BeanUtils.copyProperties(business, businessDTO);
				listBusinessDTOs.add(businessDTO);
			}
			userDTO.setBusiness(listBusinessDTOs);
		}
		return userDTO;
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
