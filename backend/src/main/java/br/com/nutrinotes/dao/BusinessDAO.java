package br.com.nutrinotes.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.nutrinotes.model.Business;

public interface BusinessDAO extends JpaRepository<Business, Integer>{
	
	public List<Business> findByNomeContaining(String palavraChave);
}
