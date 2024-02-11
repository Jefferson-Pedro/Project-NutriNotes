package br.com.nutrinotes.project.tests;


import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import br.com.nutrinotes.model.user.Profile;
import br.com.nutrinotes.service.user.IProfile;

@SpringBootTest
@ActiveProfiles("test")
public class ProfileTests {
	
	@Autowired
	IProfile service;
	
	@Test
	public void shouldCreateProfile() {
		Profile p = new Profile();
		p.setIdProfile(109);
		p.setNome("Jefferson");
		p.setCrn("123456789");
		Profile res = service.save(p);
		assertTrue(res != null && res.getAtivo() == 1);
	}
	
	@Test
	public void shouldDeleteProfile() {
		assertTrue(service.delete(100));
	}
	
	@Test
	public void shouldNotDeleteProfile() {
		assertFalse(service.delete(150));
	}
	
	@Test
	public void shouldReturnServeralProfile() {
		List<Profile> lista = service.findByName("a");
		assertTrue(lista.size() > 0);
	}
	
	@Test
	public void shouldNotFindProfile() {
		List<Profile> lista = service.findByName("adamastor");
		assertTrue(lista.size() == 0);
	}

}
