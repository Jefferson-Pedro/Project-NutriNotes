package br.com.nutrinotes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import br.com.nutrinotes.model.templates.TemplateChecklist;
import br.com.nutrinotes.service.templates.ITemplateChecklistService;

@RestController
@CrossOrigin("*")
@RequestMapping("/template")
public class TemplateController {
	
	@Autowired
	ITemplateChecklistService service;
	
	@GetMapping("/all")
	public ResponseEntity<List<TemplateChecklist>> findAllEntity (){
		List<TemplateChecklist> list = service.findAll();
		if(!list.isEmpty()) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<TemplateChecklist> findById(@PathVariable Integer id){
		TemplateChecklist res = service.findById(id);
		if (res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/new")
	public ResponseEntity<TemplateChecklist> create (@RequestBody TemplateChecklist template){
		if(template == null) {
			 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		if(service.save(template)) {
			return ResponseEntity.ok(template);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<TemplateChecklist> update (@RequestBody TemplateChecklist template, 
													@PathVariable Integer id){
		if(template == null) {
			 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		if(service.update(template, id)) {
			return ResponseEntity.ok(template);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<TemplateChecklist> delete (@RequestParam Integer id){
		TemplateChecklist res = service.findById(id);
		if (res != null) {
			service.delete(id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.badRequest().build();
	}

}
