package br.com.nutrinotes.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

import br.com.nutrinotes.model.profile.Profile;
import br.com.nutrinotes.service.profile.IProfile;

@RestController
@RequestMapping("/profile")
@CrossOrigin("*")
public class ProfileController {
	
	@Autowired
	private IProfile service;
	
	@GetMapping()
	public ResponseEntity<List<Profile>> findAll(){
		List<Profile> lista = service.findAll();
		if (lista.size() > 0) {
			return ResponseEntity.ok(lista);
		} 
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/buscar")
	public ResponseEntity<List<Profile>> findByName(@RequestParam (name = "nome") String nome){
		List<Profile> lista = service.findByName(nome);
		if (lista.size() > 0) {
			return ResponseEntity.ok(lista);
		} 
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Profile> findById(@PathVariable Integer id){
		Profile res = service.findById(id);
		if (res != null) {
			return ResponseEntity.ok(res);
		} 
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/new")
	public ResponseEntity<Profile> save(@RequestBody Profile novo) throws URISyntaxException{
		System.out.println(novo.getNome());
		Profile res = service.save(novo);
		if(res != null) {
			return ResponseEntity.created(new URI("/profile/" + res.getIdProfile())).body(res);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PutMapping("edit/{id}")
	public ResponseEntity<Profile> update(@RequestBody Profile profile, @PathVariable Integer id){
		Profile res = service.update(profile, id);
		if(res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Profile> delete(@PathVariable Integer id){
		boolean res = service.delete(id);
		if(res) {
			return ResponseEntity.ok(service.findById(id));
		}
		return ResponseEntity.notFound().build();
	}
	
}
