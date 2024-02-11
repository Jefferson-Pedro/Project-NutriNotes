package br.com.nutrinotes.controller;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.nutrinotes.model.reminder.Reminder;
import br.com.nutrinotes.service.reminder.IReminderService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@RestController
@CrossOrigin("*")
@RequestMapping("/reminder")
public class ReminderController {
	
	@Autowired
	IReminderService service;
	
	@GetMapping("/all")
	public ResponseEntity<List<Reminder>> findAll(){
		List<Reminder> list =  service.findAll();
		if(!list.isEmpty()) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping()
	public ResponseEntity<Page<Reminder>> findAllPage(Pageable pageable){
		Page<Reminder> page = service.findAllPage(pageable);
		
		if(page.hasContent()) {
	        return ResponseEntity.ok(page);
	    }
	    return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Reminder> findById(@PathVariable @NotNull @Positive Integer id){
		Reminder res = service.findById(id);
		if(res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/new")
	public ResponseEntity<Reminder> create(@RequestBody @NotNull @Valid Reminder reminder) throws URISyntaxException{
		
		if (service.create(reminder) != null) {
			return ResponseEntity.ok().body(reminder);
		}
		return ResponseEntity.badRequest().build();	
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Reminder> delete (@PathVariable @NotNull @Positive Integer id) {
		
		if (service.delete(id)) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
		
	}
}
