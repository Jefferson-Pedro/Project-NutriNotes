package br.com.nutrinotes.project.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.nutrinotes.project.model.Business;
import br.com.nutrinotes.project.service.IBusinessService;

@RestController
@CrossOrigin("*")
public class BusinessController {
	
	@Autowired
	IBusinessService service;
	
	@GetMapping("business")
	public ResponseEntity<List<Business>> recuperarTodos(){
		List<Business> list = service.buscarTodos();
		if(list.size() > 0) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@PostMapping("business")
	public ResponseEntity<Business> cadastrar(@RequestBody Business novo) throws URISyntaxException{
		Business res = service.cadastrar(novo);
		return ResponseEntity.created(new URI("business/" + res.getIdBusiness())).body(res);	
	}
}
