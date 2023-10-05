package br.com.nutrinotes.controller;

import java.util.List;

import org.aspectj.weaver.NewConstructorTypeMunger;
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
		ItemChecklist res = service.save(item);
		if(res != null) {
			return ResponseEntity.ok().body(res);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<ItemChecklist> update (@RequestBody ItemChecklist item, 
												@PathVariable IdItemCheckList id){
		ItemChecklist res = service.update(item, id);
		if(res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ItemChecklist> delete (@PathVariable IdItemCheckList id){
		ItemChecklist res = service.findById(id);
		if(res != null) {
			service.delete(id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
