package br.com.nutrinotes.service.department;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.dao.department.DepartmentDAO;
import br.com.nutrinotes.model.department.Department;

@Component
public class DepartmentImpl implements IDepartment {
	
	@Autowired
	DepartmentDAO dao;

	@Override
	public Department save(Department novo) {
		if(novo.getNome().length() > 3) {
			return dao.save(novo);
		}
		System.out.println("Ocorreu um erro " + novo);
		return null;
	}

	@Override
	public Department update(Department department, Integer id) {
		Optional<Department> res = dao.findById(id);
		if(res.isPresent()) {
			Department departmentExisting = res.get();
			BeanUtils.copyProperties(department, departmentExisting, "idSetores");
			return dao.save(departmentExisting);
		}
		return null;
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
	public List<Department> findByName(String nome) {
		return dao.findByNomeContaining(nome);
	}

	@Override
	public Department findById(Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(Integer id) {
		dao.deleteById(id);
		return true;
	}
}
