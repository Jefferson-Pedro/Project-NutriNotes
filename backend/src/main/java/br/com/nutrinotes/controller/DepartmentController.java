package br.com.nutrinotes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
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
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@RestController
@CrossOrigin("*")
@RequestMapping("/department")
public class DepartmentController {
	
	@Autowired
	IDepartment service;
	
	@GetMapping("/all")
	public ResponseEntity<List<Department>> findAll(){
		List<Department> list = service.findAll();
		if(list.size() > 0) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Department> findById(@PathVariable @NotNull @Positive Integer id){
		Department res = service.findById(id);
		if(res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/bybusiness/{id}")
	public ResponseEntity<List<Department>> findByDepartmentByidBusiness(@PathVariable @NotNull @Positive Integer id){
		List<Department> list = service.findDepartmentByIdBusiness(id);
		if(list.size() > 0) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/new")
	public ResponseEntity<Department> create(@RequestBody @Valid @NotNull Department department){
		Department res = service.create(department);
		if(department != null) {
			return ResponseEntity.ok().body(res);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<Department> update (@RequestBody @Valid @NotNull Department department, 
											  @PathVariable @NotNull @Positive Integer id){
		
		if(service.update(department, id)) {
			return ResponseEntity.ok(department);
		}
		return ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Department> delete(@PathVariable Integer id){
		if(service.delete(id)) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
