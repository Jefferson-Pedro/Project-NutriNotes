package br.com.nutrinotes.project.tests;


import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import br.com.nutrinotes.model.user.User;
import br.com.nutrinotes.service.user.IUser;

@SpringBootTest
@ActiveProfiles("test")
public class ProfileTests {
	
	@Autowired
	IUser service;
	
	@Test
	public void shouldCreateProfile() {
		User p = new User();
		p.setIdUser(109);
		p.setNome("Jefferson");
		p.setCrn("123456789");
		User res = service.create(p);
		assertTrue(res != null );
	}
	
	@Test
	public void shouldDeleteProfile() {
		assertTrue(service.delete(100));
	}
	
	@Test
	public void shouldNotDeleteProfile() {
		assertFalse(service.delete(150));
	}
	
//	@Test
//	public void shouldReturnServeralProfile() {
//		List<User> lista = service.findByName("a");
//		assertTrue(lista.size() > 0);
//	}
//	
//	@Test
//	public void shouldNotFindProfile() {
//		List<User> lista = service.findByName("adamastor");
//		assertTrue(lista.size() == 0);
//	}

}
