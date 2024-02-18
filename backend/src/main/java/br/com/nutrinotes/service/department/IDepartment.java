package br.com.nutrinotes.service.department;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.nutrinotes.model.department.Department;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public interface IDepartment {
	
	public Department create(@Valid @NotNull Department novo);
	public boolean update(@Valid @NotNull Department department, @NotNull @Positive Integer id);
	public Page<Department> findAllPage(Pageable pageable);
	public List<Department> findAll();
	public List<Department> findByName(@NotNull @NotBlank String nome);
	public Department findById(@NotNull @Positive Integer id);
	public boolean delete(@NotNull @Positive Integer id);
	public List<Department> findDepartmentByIdBusiness(@NotNull @Positive Integer id);
	
}
