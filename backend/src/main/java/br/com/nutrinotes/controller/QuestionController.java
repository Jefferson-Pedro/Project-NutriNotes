package br.com.nutrinotes.controller;

import java.net.URISyntaxException;
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

import br.com.nutrinotes.dto.QuestionDTO;
import br.com.nutrinotes.model.questions.Question;
import br.com.nutrinotes.service.question.IQuestion;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {
	
	@Autowired
	IQuestion service;
	
	@GetMapping("/all")
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
	
	@GetMapping("template/{id}")
	public ResponseEntity<List<QuestionDTO>> findQuestionsByTemplate(@PathVariable Integer id){
		List<QuestionDTO> list = service.finQuestionByTemplate(id);
		if(!list.isEmpty()) {
			return ResponseEntity.ok().body(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@GetMapping("/search")
	public ResponseEntity<List<Question>> findByName(@RequestParam (name = "questao") String name){
		List<Question> list = service.findByQuestions(name);
		if(!list.isEmpty()) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@PostMapping("/new")
	public ResponseEntity<Question> save(@RequestBody Question newQuestion) throws URISyntaxException{
		
		if (newQuestion == null) {	
			 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		if (service.save(newQuestion)) {
			return ResponseEntity.ok(newQuestion);
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
