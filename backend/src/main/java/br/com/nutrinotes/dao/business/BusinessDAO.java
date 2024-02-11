package br.com.nutrinotes.dao.business;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.nutrinotes.model.business.Business;

@Repository
public interface BusinessDAO extends JpaRepository<Business, Integer>{
	
	public List<Business> findByNomeStartingWith(String palavraChave);
	
	
}
