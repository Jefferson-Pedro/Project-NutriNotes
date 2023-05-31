package br.com.nutrinotes.project.controller;

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

import br.com.nutrinotes.project.model.Profile;
import br.com.nutrinotes.project.service.IProfileService;

@RestController
@RequestMapping("/profile")
@CrossOrigin("*")
public class ProfileController {
	
	@Autowired
	private IProfileService service;
	
	@GetMapping()
	public ResponseEntity<List<Profile>> recuperarTodos(){
		List<Profile> lista = service.buscarTodos();
		if (lista.size() > 0) {
			return ResponseEntity.ok(lista);
		} 
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/buscar")
	public ResponseEntity<List<Profile>> recuperarPeloNome(@RequestParam (name = "nome") String nome){
		List<Profile> lista = service.buscarPorNome(nome);
		if (lista.size() > 0) {
			return ResponseEntity.ok(lista);
		} 
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Profile> recuperarPeloId(@PathVariable Integer id){
		Profile res = service.recuperarPeloId(id);
		if (res != null) {
			return ResponseEntity.ok(res);
		} 
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping()
	public ResponseEntity<Profile> cadastrar(@RequestBody Profile novo) throws URISyntaxException{
		Profile res = service.cadastrar(novo);
		if(res != null) {
			return ResponseEntity.created(new URI("/profile/" + res.getIdProfile())).body(res);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Profile> alterarProfile(@RequestBody Profile profile, @PathVariable Integer id){
		if(profile.getIdProfile() == null) {
			profile.setIdProfile(id);
		}
		Profile res = service.alterar(profile);
		if(res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Profile> excluirProfile(@PathVariable Integer id){
		boolean res = service.deletar(id);
		if(res) {
			return ResponseEntity.ok(service.recuperarPeloId(id));
		}
		return ResponseEntity.notFound().build();
	}
	
}
