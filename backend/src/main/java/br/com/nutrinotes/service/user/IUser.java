package br.com.nutrinotes.service.user;

import java.util.List;

import br.com.nutrinotes.model.user.User;

public interface IUser {
	
	public User save(User novo);
	public boolean update(User user, Integer id);
	public List<User> findAll();
	public List<User> findByName(String nome);
	public User findById(Integer id);
	public boolean delete(Integer id);
}
