package br.com.nutrinotes.service.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.user.UserDAO;
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
	public User create(@Valid @NotNull User novo) {
		System.out.println(novo.getNome().length());
		return dao.save(novo);
	}

	@Override
	public boolean update(@Valid @NotNull User User, @NotNull @Positive Integer id) {
		 Optional<User> res = dao.findById(id);
		    if (res.isPresent()) {
		    	User existingUser = res.get();
		        BeanUtils.copyProperties(User, existingUser, "idUser");
		        dao.save(existingUser);
		        return true;
		    }
		    System.out.println("Erro ao editar a perfil!");
		    return false;
	}
	
	@Override
	public List<User> findAll() {
		return dao.findAll();
	}

	@Override
	public List<User> findByName(@Valid @NotNull @NotBlank String nome) {
		return dao.findByNomeContaining(nome);
	}

	@Override
	public User findById(@NotNull @Positive Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(@NotNull @Positive Integer id) {
		Optional<User> p = dao.findById(id);
		if(p.isPresent()) {
			dao.deleteById(id);
			System.out.println("Perfil com id " + id + " excluido com sucesso!");
			return true;
		}
		System.out.println("Ocorreu um erro ao excluir o perfil " + id);
		return false;
	}
}
