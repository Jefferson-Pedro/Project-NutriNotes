package br.com.nutrinotes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.nutrinotes.dto.BusinessDTO;
import br.com.nutrinotes.model.business.Business;
import br.com.nutrinotes.service.business.IBusiness;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@RestController
@CrossOrigin("*")
@RequestMapping("/business")
public class BusinessController {
	
	@Autowired
	IBusiness service;
	
	@GetMapping("/user/{id}")
	public ResponseEntity<Page<BusinessDTO>> findAllPageByUser(@PathVariable Integer id, Pageable pageable){
		
	    Page<BusinessDTO> page = service.findAllPageByUser(pageable, id);
	    
	    if(page.hasContent()) {
	        return ResponseEntity.ok(page);
	    }
	    return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<BusinessDTO>> findAll(){
	    List<BusinessDTO> list = service.findAll();
	    return ResponseEntity.ok(list);     
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<BusinessDTO> findById(@PathVariable @NotNull @Positive Integer id){
		BusinessDTO res = service.findById(id);
		return ResponseEntity.ok().body(res);
	}
	
	@GetMapping("/search")
	public ResponseEntity<List<BusinessDTO>> findByName(@RequestParam (name = "name") @NotNull String name){
		List<BusinessDTO> list = service.findByName(name);
		if(!list.isEmpty()) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@PostMapping("/new")
	public ResponseEntity<String> create (@RequestBody @Valid @NotNull Business newBusiness){
		
		System.out.println("Usuário recebido: " + newBusiness.getResponsavelTec());
		
		Business business = service.create(newBusiness);
		
		if (business != null) {
			return ResponseEntity.ok().body("Nova empresa criada!");	
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<String> update(@RequestBody Business business, @PathVariable @NotNull @Positive Integer id){
		
		service.update(business, id);
		return ResponseEntity.ok().body("Empresa atualizada com sucesso!");
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Business> delete(@PathVariable @NotNull @Positive Integer id) {
		
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
