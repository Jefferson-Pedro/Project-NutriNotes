package br.com.nutrinotes.controller;

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
import org.springframework.web.multipart.MultipartFile;

import br.com.nutrinotes.model.midia.Midia;
import br.com.nutrinotes.service.midia.IMidiaService;
import br.com.nutrinotes.service.midia.IUploadService;

@RestController
@CrossOrigin("*")
@RequestMapping("/midia")
public class MidiaController {
	
	@Autowired
	private IMidiaService service;
	
	@Autowired IUploadService uploadServ;
	
	@GetMapping("/{id}")
	public ResponseEntity<Midia> findById(@PathVariable Integer id){
		Midia res = service.findById(id);
		
		if (res != null) {
			return ResponseEntity.status(200).body(res);
		}
		return ResponseEntity.notFound().build();
	}
	

	@PostMapping("/create")
	public ResponseEntity<Midia> create(@RequestBody Midia midia){
		Midia res = service.create(midia);
		if (res != null) {
			return ResponseEntity.status(201).body(res);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PutMapping("edit/{id}")
	public ResponseEntity<Midia> update(@RequestBody Midia midia, @PathVariable Integer id){
		
		if (service.update(midia)) {
			return ResponseEntity.ok(midia);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/midias/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id){
		if (service.delete(id)) {
			return ResponseEntity.ok("Midia excluida!");
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/upload")
	public ResponseEntity<?> upload(@RequestParam(name="file") MultipartFile file){
		String res = uploadServ.upload(file);
		if (res != null) {
			return ResponseEntity.status(201).body(res);
		}
		return ResponseEntity.badRequest().build();
	}

}
