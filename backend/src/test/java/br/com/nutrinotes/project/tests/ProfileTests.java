package br.com.nutrinotes.project.tests;


import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import br.com.nutrinotes.project.model.Profile;
import br.com.nutrinotes.project.service.IProfileService;

@SpringBootTest
@ActiveProfiles("test")
public class ProfileTests {
	
	@Autowired
	IProfileService service;
	
	@Test
	public void shouldCreateProfile() {
		Profile p = new Profile();
		p.setIdProfile(109);
		p.setNome("Jefferson");
		p.setCrn("123456789");
		Profile res = service.cadastrar(p);
		assertTrue(res != null && res.getAtivo() == 1);
	}
	
	@Test
	public void shouldDeleteProfile() {
		assertTrue(service.deletar(100));
	}
	
	@Test
	public void shouldNotDeleteProfile() {
		assertFalse(service.deletar(150));
	}
	
	@Test
	public void shouldReturnServeralProfile() {
		List<Profile> lista = service.buscarPorNome("a");
		assertTrue(lista.size() > 0);
	}
	
	@Test
	public void shouldNotFindProfile() {
		List<Profile> lista = service.buscarPorNome("adamastor");
		assertTrue(lista.size() == 0);
	}

}
