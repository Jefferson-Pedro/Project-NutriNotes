package br.com.nutrinotes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.nutrinotes.dto.AuthDTO;
import br.com.nutrinotes.model.user.User;
import br.com.nutrinotes.service.auth.IAuthService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

@Validated
@RestController
@CrossOrigin("*")
public class AuthController {
	
	@Autowired
	private IAuthService service;
	

	@PostMapping("/user")
	public ResponseEntity<?> create(@RequestBody @Valid @NotNull User user){
		
		if(service.create(user) != null) {
			return ResponseEntity.ok().body("Usuário criado com sucesso!");
		}
		return ResponseEntity.status(403).body("ERRO! Usuário já existe no Banco de Dados!");
	}
	
	@PostMapping("/login")
	public ResponseEntity<AuthDTO> authenticate(@RequestBody @Valid @NotNull User dataUser){
		
		AuthDTO auth = service.authenticate(dataUser);
		
		if(auth != null) {
			return ResponseEntity.ok(auth);
		}
		return ResponseEntity.status(401).build();
	}
	
}
