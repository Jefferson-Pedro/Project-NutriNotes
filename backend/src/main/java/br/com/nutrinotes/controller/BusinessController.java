package br.com.nutrinotes.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import br.com.nutrinotes.model.Business;
import br.com.nutrinotes.service.business.IBusinessService;

@RestController
@CrossOrigin("*")
@RequestMapping("/business")
public class BusinessController {
	
	@Autowired
	IBusinessService service;
	
	@GetMapping()
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
	
	@GetMapping("/buscar")
	public ResponseEntity<List<Business>> findByName(@RequestParam (name = "nome") String name){
		List<Business> list = service.findByName(name);
		if(!list.isEmpty()) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@PostMapping()
	public ResponseEntity<Business> save(@RequestBody Business newBusiness) throws URISyntaxException{
		Business res = service.save(newBusiness);
		if (res != null) {
			return ResponseEntity.created(new URI("business/" + res.getIdBusiness())).body(res);	
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<Business> update(@RequestBody Business business, @PathVariable Integer id){
		Business res = service.update(business, id);
		if(res != null) {
			return ResponseEntity.ok(res);
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
