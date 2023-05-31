package br.com.nutrinotes.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.project.dao.BusinessDAO;
import br.com.nutrinotes.project.model.Business;

@Component
public class BusinessImpl implements IBusinessService {
	
	@Autowired
	BusinessDAO dao;

	@Override
	public Business cadastrar(Business novo) {
		novo.setResponsavelTec(novo.getResponsavelTec()); 
		if(novo.getNome() != null || novo.getNome().length() > 0 || 
		   novo.getCnpj() != null || novo.getCnpj().length() > 0 ) {
			
			System.out.println(novo.toString());
			return dao.save(novo);
		}
		System.out.println("Erro ao cadastrar empresa!");
		return null;
	}

	@Override
	public Business alterar(Business profile) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Business> buscarTodos() {
		return dao.findAll();
	}

	@Override
	public List<Business> buscarPorNome(String nome) {
		return dao.findByNomeContaining(nome);
	}

	@Override
	public Business findById(Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(Integer id) {
		dao.deleteById(id);
		return true;
	}

}
