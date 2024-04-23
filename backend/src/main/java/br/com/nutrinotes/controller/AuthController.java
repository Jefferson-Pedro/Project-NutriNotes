package br.com.nutrinotes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.nutrinotes.dto.LoginDTO;
import br.com.nutrinotes.security.NutriToken;
import br.com.nutrinotes.service.auth.IAuthService;
import jakarta.validation.constraints.NotNull;

@Validated
@RestController
@CrossOrigin("*")
public class AuthController {
	
	@Autowired
	private IAuthService service;
	

	@PostMapping("/login")
	public ResponseEntity<?> authenticate(@RequestBody @NotNull LoginDTO login){
		
		try {
			NutriToken token = service.authenticate(login);
			
			if(token != null) {
				System.err.println(token);
				return ResponseEntity.ok(token);
			}
		} catch (Exception e) {
			
			return ResponseEntity.status(401).body(e);
		}
		return null;
		
		
	}
	
}
