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

import br.com.nutrinotes.model.questions.Question;
import br.com.nutrinotes.service.question.IQuestion;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {
	
	@Autowired
	IQuestion service;
	
	@GetMapping("all")
	public ResponseEntity<List<Question>> findAll(){
		List<Question> list = service.findAll();
		if(list.size() > 0) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Question> findById(@PathVariable Integer id){
		Question res = service.findById(id);
		if(res != null) {
			return ResponseEntity.ok().body(res);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@GetMapping("/buscar")
	public ResponseEntity<List<Question>> findByName(@RequestParam (name = "questao") String name){
		List<Question> list = service.findByQuestions(name);
		if(!list.isEmpty()) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@PostMapping("/new")
	public ResponseEntity<Question> save(@RequestBody Question newQuestion) throws URISyntaxException{
		Question res = service.save(newQuestion);
		if (res != null) {
			//return ResponseEntity.created(new URI("Question/" + res.getIdQuestion())).body(res);	
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<Question> update(@RequestBody Question Question, @PathVariable Integer id){
		Question res = service.update(Question, id);
		if(res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Question> delete(@PathVariable Integer id) {
		Question res = service.findById(id);
		if(res != null) { 
			service.delete(id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
