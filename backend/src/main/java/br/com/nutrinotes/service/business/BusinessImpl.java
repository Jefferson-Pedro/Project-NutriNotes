package br.com.nutrinotes.service.business;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.dao.business.BusinessDAO;
import br.com.nutrinotes.model.business.Business;

@Component
public class BusinessImpl implements IBusiness {
	
	@Autowired
	BusinessDAO dao;

	@Override
	public boolean save(Business novo) {
		novo.setResponsavelTec(novo.getResponsavelTec()); 
		if(novo.getNome() != null || novo.getNome().length() > 3 || 
		   novo.getCnpj() != null || novo.getCnpj().length() > 8 ) {
			
			 dao.save(novo);
		}
		System.err.println("O objeto está nulo ou não cumpre os requisitos para o cadastro");
		return false;
	}

	@Override
	public boolean update(Business business, Integer id) {
	    Optional<Business> res = dao.findById(id);
	    if (res.isPresent()) {
	        Business existingBusiness = res.get();
	        BeanUtils.copyProperties(business, existingBusiness, "idBusiness");
	        dao.save(existingBusiness);
	        return true;
	    }
	    System.err.println("Erro ao editar a empresa!");
	    return false;
	}
	
	@Override
	public List<Business> findAll() {
		return dao.findAll();
	}

	@Override
	public Page<Business> findAllPage(Pageable pageable) {
		return dao.findAll(pageable);
	}

	@Override
	public List<Business> findByName(String nome) {
		return dao.findByNomeStartingWith(nome);
	}

	@Override
	public Business findById(Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(Integer id) {
		Optional<Business> b = dao.findById(id);
		if (b.isPresent()) {
			dao.deleteById(id);
			return true;
		}
		System.err.println("Ocorreu um erro ao excluir a empresa!");
		return false;
	}
}
