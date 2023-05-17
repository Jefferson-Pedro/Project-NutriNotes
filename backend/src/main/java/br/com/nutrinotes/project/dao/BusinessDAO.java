package br.com.nutrinotes.project.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.nutrinotes.project.model.Business;

public interface BusinessDAO extends JpaRepository<Business, Integer>{
	
	public List<Business> findByNomeContaining(String palavraChave);
}
