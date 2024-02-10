package br.com.nutrinotes.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.nutrinotes.model.checklist.Checklist;
import br.com.nutrinotes.service.checklist.ICheckList;

@RestController
@CrossOrigin("*")
@RequestMapping("/checklist")
public class ChecklistController {
	
	@Autowired
	ICheckList service;
	
	@GetMapping()
	public ResponseEntity<Page<Checklist>> findAllPage(Pageable pageable){
	    Page<Checklist> page = service.findAllPage(pageable);
	    
	    if(page.hasContent()) {
	        return ResponseEntity.ok(page);
	    }
	    return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Checklist>> findAll() {
		List<Checklist> list = service.findAll();
		if(list.size() > 0) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Checklist> findById(@PathVariable Integer id){
		Checklist res = service.findById(id);
		if(res != null) {
			return ResponseEntity.ok().body(res);
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/date/{date}")
	public ResponseEntity<List<Checklist>> findChecklistsByDate(@PathVariable LocalDate date){
		List <Checklist> res = service.findAllByDate(date);
		if(res != null) {
			return ResponseEntity.ok().body(res);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/new")
	public ResponseEntity<Checklist> save(@RequestBody Checklist checklist){
		Checklist res = service.save(checklist);
		if(res != null) {
			return ResponseEntity.ok().body(res);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<Checklist> update(@RequestBody Checklist checklist, @PathVariable Integer id){
		Checklist res = service.update(checklist, id);
		if(res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Checklist> delete(@PathVariable Integer id){
		Checklist res = service.findById(id);
		if(res != null) {
			service.delete(id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
