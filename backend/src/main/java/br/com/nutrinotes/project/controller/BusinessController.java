package br.com.nutrinotes.project.controller;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.nutrinotes.project.model.Business;
import br.com.nutrinotes.project.service.IBusinessService;

@RestController
@CrossOrigin("*")
@RequestMapping("/business")
public class BusinessController {
	
	@Autowired
	IBusinessService service;
	
	@GetMapping()
	public ResponseEntity<List<Business>> findAll(){
		List<Business> list = service.buscarTodos();
		if(list.size() > 0) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Business> findById(@PathVariable Integer id){
		Business res = service.findById(id);
		//System.out.println(res.toString());
		if(res != null) {
			return ResponseEntity.ok().body(res);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@GetMapping("/buscar")
	public ResponseEntity<List<Business>> findByName(@RequestParam (name = "nome") String nome){
		List<Business> list = service.buscarPorNome(nome);
		if(!list.isEmpty()) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@PostMapping()
	public ResponseEntity<Business> save(@RequestBody Business novo) throws URISyntaxException{
		Business res = service.cadastrar(novo);
		if (res != null) {
			return ResponseEntity.created(new URI("business/" + res.getIdBusiness())).body(res);	
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
