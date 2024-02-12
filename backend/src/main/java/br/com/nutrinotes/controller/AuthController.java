package br.com.nutrinotes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.nutrinotes.dto.AuthDTO;
import br.com.nutrinotes.dto.LoginDTO;
import br.com.nutrinotes.service.auth.IAuthService;
import jakarta.validation.constraints.NotNull;

@Validated
@RestController
@CrossOrigin("*")
public class AuthController {
	
	@Autowired
	private IAuthService service;
	

	@PostMapping("/login")
	public ResponseEntity<AuthDTO> authenticate(@RequestBody @NotNull LoginDTO login){
		
		AuthDTO auth = service.authenticate(login);
		
		if(auth != null) {
			return ResponseEntity.ok(auth);
		}
		return ResponseEntity.status(401).build();
	}
	
}
