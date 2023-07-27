package br.com.nutrinotes.dao.department;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.nutrinotes.model.department.Department;

@Repository
public interface DepartmentDAO extends JpaRepository<Department, Integer> {
	public List<Department> findByNomeContaining(String palavraChave);
}
