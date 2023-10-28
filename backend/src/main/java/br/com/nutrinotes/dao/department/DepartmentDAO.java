package br.com.nutrinotes.dao.department;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.nutrinotes.model.department.Department;

@Repository
public interface DepartmentDAO extends JpaRepository<Department, Integer> {
	public List<Department> findByNomeContaining(String palavraChave);
	
	@Query(value = "SELECT * FROM department WHERE id_business = ?1", nativeQuery = true)
    List<Department> findDepartmentByIdBusiness(Integer IdBusiness);
}
