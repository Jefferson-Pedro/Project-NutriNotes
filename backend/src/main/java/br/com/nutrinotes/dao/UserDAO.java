package br.com.nutrinotes.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.nutrinotes.model.User;

public interface UserDAO extends JpaRepository<User, Integer>{
	public List<User> findByLoginContaining(String login);
}
