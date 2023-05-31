package br.com.nutrinotes.project.service;

import java.util.List;

import br.com.nutrinotes.project.model.Business;


public interface IBusinessService {
	
	public Business cadastrar(Business novo);
	public Business alterar(Business profile);
	public List<Business> buscarTodos();
	public List<Business> buscarPorNome(String nome);
	public Business findById(Integer id);
	public boolean delete(Integer id);

}
