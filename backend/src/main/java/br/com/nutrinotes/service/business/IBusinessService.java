package br.com.nutrinotes.service.business;

import java.util.List;

import br.com.nutrinotes.model.Business;


public interface IBusinessService {
	
	public Business save(Business novo);
	public Business update(Business business, Integer id);
	public List<Business> findAll();
	public List<Business> findByName(String nome);
	public Business findById(Integer id);
	public boolean delete(Integer id);

}
