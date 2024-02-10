package br.com.nutrinotes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.nutrinotes.model.item_checklist.IdItemCheckList;
import br.com.nutrinotes.model.item_checklist.ItemChecklist;
import br.com.nutrinotes.service.item_checklist.IItemChecklist;

@RestController
@CrossOrigin("*")
@RequestMapping("/item")
public class ItemChecklistController {
	
	@Autowired
	IItemChecklist service;
	
	@GetMapping("all")
	public ResponseEntity<List<ItemChecklist>> findAll() {
		List<ItemChecklist> list = service.findAll();
		if(list.size() > 0) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@GetMapping("/")
	public ResponseEntity<ItemChecklist> findById(@RequestParam (name = "idch") Integer idch,  
												  @RequestParam (name = "iditem") Integer iditem){
		
		IdItemCheckList id = new IdItemCheckList(idch, iditem);	
		ItemChecklist res = service.findById(id);
		
		if(res != null) {
			return ResponseEntity.ok().body(res);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/new")
	public ResponseEntity<ItemChecklist> save(@RequestBody ItemChecklist item){
		
		if(item == null) {
			System.err.println("Objeto vazio");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		
		if(service.save(item)) {
			return ResponseEntity.ok().body(item);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PutMapping("/edit/")
	public ResponseEntity<ItemChecklist> update (@RequestBody ItemChecklist item,
												 @RequestParam (name = "idch") Integer idch,  
			  									 @RequestParam (name = "iditem") Integer iditem){
		
		IdItemCheckList id = new IdItemCheckList(idch, iditem);	
				
		if(item == null) {
			System.err.println("Objeto vazio");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		
		if(service.update(item, id)) {
			return ResponseEntity.ok(item);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/delete/")
	public ResponseEntity<ItemChecklist> delete (@RequestParam (name = "idch") Integer idch,  
				 								 @RequestParam (name = "iditem") Integer iditem){
		
		IdItemCheckList id = new IdItemCheckList(idch, iditem);	
		ItemChecklist res = service.findById(id);
		if(res != null) {
			service.delete(id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
