package br.com.nutrinotes.dao.user;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.nutrinotes.model.user.User;

public interface UserDAO extends JpaRepository<User, Integer>{
	public User findByLogin(String login);
}
