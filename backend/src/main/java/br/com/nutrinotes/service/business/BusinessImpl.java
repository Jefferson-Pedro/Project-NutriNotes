package br.com.nutrinotes.service.business;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.business.BusinessDAO;
import br.com.nutrinotes.dao.user.UserDAO;
import br.com.nutrinotes.dto.BusinessDTO;
import br.com.nutrinotes.exception.EmptyListException;
import br.com.nutrinotes.exception.RecordNotFoundException;
import br.com.nutrinotes.model.business.Business;
import br.com.nutrinotes.model.user.User;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class BusinessImpl implements IBusiness {
	
	@Autowired
	BusinessDAO dao;
	
	@Autowired
	UserDAO userDao;

	@Override
	public Business create(@Valid @NotNull Business novo) {
		return dao.save(novo);
	}

	@Override
	public Business update(@Valid @NotNull Business business, @NotNull @Positive Integer id) {
	    Business res = dao.findById(id)
	    		.orElseThrow(()-> new RecordNotFoundException(id));
	    
	        Business existingBusiness = res;
	        BeanUtils.copyProperties(business, existingBusiness, "idBusiness");
	        return dao.save(existingBusiness);
	}
	
	@Override
	public List<BusinessDTO> findAll() {
		List<Business> list = dao.findAll();
		if(list.isEmpty()) {
			throw new EmptyListException("Empresas");
		}
	    List<BusinessDTO> businessDTOs = 
	    				list.stream()
	    				.map(BusinessDTO :: fromBusinessDTO)
	    				.collect(Collectors.toList());
	    
	    return businessDTOs;
	}

	@Override
	public Page<BusinessDTO> findAllPageByUser(Pageable pageable, Integer id) {
		
		User user = userDao.findById(id)
				.orElseThrow(()-> new RecordNotFoundException(id));;
		
			Page<Business> page = dao.findByResponsavelTec(user, pageable);

			List<BusinessDTO> businessDTOs = page.getContent().stream()
					.map(BusinessDTO :: fromBusinessDTO)
					.collect(Collectors.toList());
			
			return new PageImpl<>(businessDTOs, pageable, page.getTotalElements());
	}

	@Override
	public List<BusinessDTO> findByName(@NotBlank @NotNull String nome) {
		
		List<Business> listBusinesses = dao.findByNomeStartingWith(nome);
		List<BusinessDTO> listBusinessDTOs = listBusinesses.stream()
				.map(BusinessDTO :: fromBusinessDTO)
				.collect(Collectors.toList());
		
		return listBusinessDTOs;
		
	}
	
	@Override
	public BusinessDTO findById(@NotNull @Positive Integer id) {
		Business business =  dao.findById(id)
				.orElseThrow(()-> new RecordNotFoundException(id));
		return BusinessDTO.fromBusinessDTO(business);
	}

	@Override
	public void delete(@NotNull @Positive Integer id) {
		dao.findById(id).orElseThrow(()-> new RecordNotFoundException(id));
		dao.deleteById(id);
	}

}