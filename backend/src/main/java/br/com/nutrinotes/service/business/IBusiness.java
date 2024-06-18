package br.com.nutrinotes.service.business;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.nutrinotes.dto.BusinessDTO;
import br.com.nutrinotes.dto.UserViewDTO;
import br.com.nutrinotes.model.business.Business;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public interface IBusiness {
	
	public Business create(@Valid @NotNull Business novo);
	public Business update(@Valid @NotNull Business business, @NotNull @Positive Integer id);
	public Page<BusinessDTO> findAllPageByUser(Pageable pageable, Integer id);
	public List<BusinessDTO> findAll();
	public List<BusinessDTO> findByName(@NotBlank @NotNull String nome);
	public BusinessDTO findById(@NotNull @Positive  Integer id);
	public void delete(@NotNull @Positive Integer id);
}
