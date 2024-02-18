package br.com.nutrinotes.service.department;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.department.DepartmentDAO;
import br.com.nutrinotes.model.department.Department;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class DepartmentImpl implements IDepartment {
	
	@Autowired
	DepartmentDAO dao;

	@Override
	public Department create(@Valid @NotNull Department novo) {
		return dao.save(novo);
	}

	@Override
	public boolean update(@Valid @NotNull Department department, @NotNull @Positive Integer id) {
		Optional<Department> res = dao.findById(id);
		if(res.isPresent()) {
			Department departmentExisting = res.get();
			BeanUtils.copyProperties(department, departmentExisting, "idSetores");
			dao.save(departmentExisting);
			return true;
		}
		return false;
	}

	@Override
	public Page<Department> findAllPage(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Department> findAll() {
		return dao.findAll();
	}

	@Override
	public List<Department> findByName(@NotNull @NotBlank String nome) {
		return dao.findByNomeContaining(nome);
	}
	
	@Override
	public List<Department> findDepartmentByIdBusiness(@NotNull @Positive Integer id) {
		List<Department> list = dao.findDepartmentByIdBusiness(id);
		return list;
		
	}

	@Override
	public Department findById(@NotNull @Positive Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(@NotNull @Positive Integer id) {
		Optional<Department> p = dao.findById(id);
		if(p.isPresent()) {
			dao.deleteById(id);
			System.out.println("Perfil com id " + id + " excluido com sucesso!");
			return true;
		}
		System.out.println("Ocorreu um erro ao excluir o perfil " + id);
		return false;
	}
}
