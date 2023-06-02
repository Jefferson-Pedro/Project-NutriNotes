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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.nutrinotes.model.Reminder;
import br.com.nutrinotes.service.reminder.IReminderService;

@RestController
@CrossOrigin("*")
@RequestMapping("/reminder")
public class ReminderController {
	
	@Autowired
	IReminderService service;
	
	@GetMapping()
	public ResponseEntity<List<Reminder>> findAll(){
		List<Reminder> list =  service.findAll();
		if(!list.isEmpty()) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Reminder> findById(@PathVariable Integer id){
		Reminder res = service.findById(id);
		if(res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping()
	public ResponseEntity<Reminder> create(@RequestBody Reminder reminder) throws URISyntaxException{
		Reminder res = service.save(reminder);
		if (res != null) {
			return ResponseEntity.created(new URI("reminder/" + res.getIdReminder())).body(res);
		}
		return ResponseEntity.badRequest().build();	
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Reminder> delete (@PathVariable Integer id) {
		Reminder res = service.findById(id);
		if (res != null) {
			service.delete(id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
		
	}
}
