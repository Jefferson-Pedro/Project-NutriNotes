package br.com.nutrinotes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import br.com.nutrinotes.model.user.User;
import br.com.nutrinotes.service.user.IUser;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private IUser service;
	
	@GetMapping()
	public ResponseEntity<List<User>> findAll(){
		List<User> lista = service.findAll();
		if (lista.size() > 0) {
			return ResponseEntity.ok(lista);
		} 
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/buscar")
	public ResponseEntity<List<User>> findByName(@RequestParam (name = "nome") @NotNull String nome){
		List<User> lista = service.findByName(nome);
		if (lista.size() > 0) {
			return ResponseEntity.ok(lista);
		} 
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<User> findById(@PathVariable @NotNull @Positive Integer id){
		User res = service.findById(id);
		if (res != null) {
			return ResponseEntity.ok(res);
		} 
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/new")
	public ResponseEntity<User> create(@RequestBody @Valid @NotNull User novo){
	
		if(service.create(novo) != null) {
			return ResponseEntity.ok().body(novo);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PutMapping("edit/{id}")
	public ResponseEntity<User> update(@RequestBody @Valid @NotNull User user, 
									   @PathVariable @NotNull @Positive Integer id){

		if(service.update(user, id)) {
			
			return ResponseEntity.ok(user);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<User> delete(@PathVariable @NotNull @Positive Integer id){
		if(service.delete(id)) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
}
