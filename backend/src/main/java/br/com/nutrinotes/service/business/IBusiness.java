package br.com.nutrinotes.service.business;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.nutrinotes.model.business.Business;

public interface IBusiness {
	
	public boolean save(Business novo);
	public boolean update(Business business, Integer id);
	public Page<Business> findAllPage(Pageable pageable);
	public List<Business> findAll();
	public List<Business> findByName(String nome);
	public Business findById(Integer id);
	public boolean delete(Integer id);
}
