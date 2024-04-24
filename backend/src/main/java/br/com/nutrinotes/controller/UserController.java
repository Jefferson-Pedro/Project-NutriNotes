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

import br.com.nutrinotes.dto.UserEditFormDTO;
import br.com.nutrinotes.dto.UserWithoutBusinessDTO;
import br.com.nutrinotes.exception.InvalidAccountException;
import br.com.nutrinotes.exception.UserException;
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
	
	@GetMapping("/all")
	public ResponseEntity<List<UserWithoutBusinessDTO>> findAll(){
		List<UserWithoutBusinessDTO> list = service.findAll();
		if (list.size() > 0) {
			return ResponseEntity.ok(list);
		} 
		return ResponseEntity.notFound().build();
		
	}
	
	@GetMapping("/buscar")
	public ResponseEntity<List<?>> findByName(@RequestParam (name = "nome") @NotNull String nome){
		
		try {
			List<UserWithoutBusinessDTO> lista = service.findByName(nome);
			
			if (lista.size() > 0) {
				return ResponseEntity.ok(lista);
			} 
			
		} catch (Exception e) {
			return ResponseEntity.notFound().build();
		}				
		
		return null;
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable @NotNull @Positive Integer id){
		
		try {
			UserEditFormDTO res = service.findById(id);
			System.err.println("Objeto retornado: " + res.toString());
			
			if (res != null) {
				return ResponseEntity.ok(res);
			} 
		} catch (Exception e) {
			return ResponseEntity.status(404).body(e);
		}
		return null;
	}
	
	@PostMapping("/new")
	public ResponseEntity<User> create(@RequestBody @Valid @NotNull User novo){
	
		if(service.create(novo) != null) {
			return ResponseEntity.ok().body(novo);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PutMapping("edit/{id}")
	public ResponseEntity<?> update(@RequestBody @Valid @NotNull User user, 
									@PathVariable @NotNull @Positive Integer id){
		
		try {
			if(service.update(user, id)) {
				return ResponseEntity.ok().body("Usuário atualizado com sucesso!");
			}
		} catch (UserException e) {
			return ResponseEntity.status(404).body(e);
			
		} catch (InvalidAccountException e) {
			return ResponseEntity.status(400).body(e);
			
		}catch (Exception e) {
			System.err.println("500 - Erro interno. " + e);
			return ResponseEntity.status(500).body("Aconteceu um erro interno inesperado");
		}
		return null;		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<User> delete(@PathVariable @NotNull @Positive Integer id){
		if(service.delete(id)) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}