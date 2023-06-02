package br.com.nutrinotes.service.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.dao.BusinessDAO;
import br.com.nutrinotes.model.Business;

@Component
public class BusinessImpl implements IBusinessService {
	
	@Autowired
	BusinessDAO dao;

	@Override
	public Business save(Business novo) {
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
	public Business update(Business profile) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Business> findAll() {
		return dao.findAll();
	}

	@Override
	public List<Business> findByName(String nome) {
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
