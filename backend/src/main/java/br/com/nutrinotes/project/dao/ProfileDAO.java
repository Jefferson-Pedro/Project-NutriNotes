package br.com.nutrinotes.project.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.nutrinotes.project.model.Profile;

public interface ProfileDAO extends JpaRepository<Profile, Integer> {
	
	public List<Profile> findByNomeContaining(String palavraChave);
}
