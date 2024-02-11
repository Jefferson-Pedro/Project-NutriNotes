package br.com.nutrinotes.service.department;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.nutrinotes.model.department.Department;

public interface IDepartment {
	
	public Department save(Department novo);
	public boolean update(Department department, Integer id);
	public Page<Department> findAllPage(Pageable pageable);
	public List<Department> findAll();
	public List<Department> findByName(String nome);
	public Department findById(Integer id);
	public boolean delete(Integer id);
	public List<Department> findDepartmentByIdBusiness(Integer id);
	
}
