package br.com.nutrinotes.service.user;

import java.util.List;

import br.com.nutrinotes.model.user.User;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

public interface IUser {
	
	public User create(@Valid @NotNull User novo);
	public boolean update(User user, Integer id);
	public List<User> findAll();
	public List<User> findByName(String nome);
	public User findById(Integer id);
	public boolean delete(Integer id);
}
