package br.com.nutrinotes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.nutrinotes.model.user.User;
import br.com.nutrinotes.service.auth.IAuthService;

@RestController
@CrossOrigin("*")
public class AuthController {
	
	@Autowired
	private IAuthService service;
	
	@PostMapping("/users")
	public ResponseEntity<User> add(@RequestBody User user){
		User res = service.createUser(user);
		if(res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.badRequest().build();
	}
}
