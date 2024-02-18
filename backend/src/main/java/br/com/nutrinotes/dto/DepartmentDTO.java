package br.com.nutrinotes.dto;

import org.hibernate.validator.constraints.Length;

import br.com.nutrinotes.model.department.Department;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class DepartmentDTO {

	private Integer idSetores;
	
	@NotBlank
	@Length(min = 3, max = 45)
	@NotNull(message = "O campo nome do gestor não pode ser nulo")
	private String nome;
	
	//GET AND SET

	public Integer getIdSetores() {
		return idSetores;
	}

	public void setIdSetores(Integer idSetores) {
		this.idSetores = idSetores;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public static DepartmentDTO fromDepartmentDTO(Department department) {
		DepartmentDTO dto = new DepartmentDTO();
		dto.setIdSetores(department.getIdSetores());
		dto.setNome(department.getNome());
		
		return dto;
	}
}