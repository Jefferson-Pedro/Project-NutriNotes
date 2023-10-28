package br.com.nutrinotes.controller;

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
import org.springframework.web.bind.annotation.RestController;

import br.com.nutrinotes.model.department.Department;
import br.com.nutrinotes.service.department.IDepartment;

@RestController
@CrossOrigin("*")
@RequestMapping("/department")
public class DepartmentController {
	
	@Autowired
	IDepartment service;
	
	@GetMapping("all")
	public ResponseEntity<List<Department>> findAll(){
		List<Department> list = service.findAll();
		if(list.size() > 0) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Department> findById(@PathVariable Integer id){
		Department res = service.findById(id);
		if(res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/bybusiness/{id}")
	public ResponseEntity<List<Department>> findByDepartmentByidBusiness(@PathVariable Integer id){
		List<Department> list = service.findDepartmentByIdBusiness(id);
		if(list.size() > 0) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/new")
	public ResponseEntity<Department> save(@RequestBody Department department){
		Department res = service.save(department);
		if(department != null) {
			return ResponseEntity.ok().body(res);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<Department> update (@RequestBody Department department, @PathVariable Integer id){
		Department res = service.update(department, id);
		if(res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Department> delete(@PathVariable Integer id){
		Department res = service.findById(id);
		if(res != null) {
			service.delete(id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
