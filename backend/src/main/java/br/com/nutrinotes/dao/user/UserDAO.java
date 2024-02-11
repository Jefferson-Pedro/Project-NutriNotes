package br.com.nutrinotes.dao.user;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.nutrinotes.model.user.User;


public interface UserDAO extends JpaRepository<User, Integer>{
	
	public User findByLogin(String login);
	public List<User> findByNomeContaining(String palavraChave);
}
