package br.com.nutrinotes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.nutrinotes.model.midia.Midia;
import br.com.nutrinotes.service.midia.IMidiaService;

@RestController
@CrossOrigin("*")
public class MidiaController {
	
	@Autowired
	private IMidiaService service;
	

	@PostMapping("/midia")
	public ResponseEntity<Midia> adicionarNova(@RequestBody Midia midia){
		Midia res = service.create(midia);
		if (res != null) {
			return ResponseEntity.status(201).body(res);
		}
		return ResponseEntity.badRequest().build();
	}

}
