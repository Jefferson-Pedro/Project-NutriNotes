package br.com.nutrinotes.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
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

import br.com.nutrinotes.model.business.Business;
import br.com.nutrinotes.service.business.IBusiness;

@RestController
@CrossOrigin("*")
@RequestMapping("/business")
public class BusinessController {
	
	@Autowired
	IBusiness service;
	
	@GetMapping()
	public ResponseEntity<Page<Business>> findAllPage(Pageable pageable){
	    Page<Business> page = service.findAllPage(pageable);
	    
	    if(page.hasContent()) {
	        return ResponseEntity.ok(page);
	    }
	    return ResponseEntity.notFound().build();
	}
	
	@GetMapping("all")
	public ResponseEntity<List<Business>> findAll(){
		List<Business> list = service.findAll();
		if(list.size() > 0) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Business> findById(@PathVariable Integer id){
		Business res = service.findById(id);
		if(res != null) {
			return ResponseEntity.ok().body(res);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@GetMapping("/search")
	public ResponseEntity<List<Business>> findByName(@RequestParam (name = "name") String name){
		List<Business> list = service.findByName(name);
		if(!list.isEmpty()) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@PostMapping("/new")
	public ResponseEntity<Business> save(@RequestBody Business newBusiness) throws URISyntaxException{
		
		if (service.save(newBusiness)) {
			return ResponseEntity.created(new URI("business/" + newBusiness.getIdBusiness())).body(newBusiness);	
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<Business> update(@RequestBody Business business, @PathVariable Integer id){
		
		if(service.update(business, id)) {
			return ResponseEntity.ok(business);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Business> delete(@PathVariable Integer id) {
		Business res = service.findById(id);
		if(res != null) { 
			service.delete(id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
