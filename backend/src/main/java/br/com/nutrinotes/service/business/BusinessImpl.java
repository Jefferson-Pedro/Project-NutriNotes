package br.com.nutrinotes.service.business;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.business.BusinessDAO;
import br.com.nutrinotes.dto.BusinessDTO;
import br.com.nutrinotes.dto.DepartmentDTO;
import br.com.nutrinotes.model.business.Business;
import br.com.nutrinotes.model.department.Department;
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
	public List<BusinessDTO> findAll() {
		List<Business> list = dao.findAll();
	    List<BusinessDTO> businessDTOs = 
	    				list.stream()
	    				.map(BusinessDTO :: fromBusinessDTO)
	    				.collect(Collectors.toList());
	    
	    return businessDTOs;
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
	public BusinessDTO findById(@NotNull @Positive Integer id) {
		Business business =  dao.findById(id).orElse(null);
		BusinessDTO businessDTO = new BusinessDTO();
		BeanUtils.copyProperties(business, businessDTO, "setores");
		
		if(business != null && business.getSetores() !=null) {
			List<DepartmentDTO> lisDepartmentDTOs = new ArrayList<>();
			for (Department department : business.getSetores()) {
				DepartmentDTO departmentDTO = new DepartmentDTO();
				BeanUtils.copyProperties(department, departmentDTO);
				lisDepartmentDTOs.add(departmentDTO);
			}
			businessDTO.setSetores(lisDepartmentDTOs);
		}
		return businessDTO;
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