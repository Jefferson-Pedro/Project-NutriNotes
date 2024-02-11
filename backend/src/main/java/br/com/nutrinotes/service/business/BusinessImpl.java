package br.com.nutrinotes.service.business;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.business.BusinessDAO;
import br.com.nutrinotes.model.business.Business;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class BusinessImpl implements IBusiness {
	
	@Autowired
	BusinessDAO dao;

	@Override
	public Business create(@Valid @NotNull Business novo) {
		novo.setResponsavelTec(novo.getResponsavelTec()); 	
		return dao.save(novo);
	}

	@Override
	public boolean update(@Valid @NotNull Business business, @NotNull @Positive Integer id) {
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
	public List<Business> findByName(@NotBlank @NotNull String nome) {
		return dao.findByNomeStartingWith(nome);
	}
	
	@Override
	public Business findById(@NotNull @Positive Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(@NotNull @Positive Integer id) {
		Optional<Business> b = dao.findById(id);
		if (b.isPresent()) {
			dao.deleteById(id);
			return true;
		}
		System.err.println("Ocorreu um erro ao excluir a empresa!");
		return false;
	}
}
