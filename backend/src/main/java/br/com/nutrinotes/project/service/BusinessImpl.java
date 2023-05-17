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
		if(novo.getNome() != null && novo.getCnpj() != null ) {
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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Business recuperarPeloId(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deletar(Integer id) {
		// TODO Auto-generated method stub
		return false;
	}

}
