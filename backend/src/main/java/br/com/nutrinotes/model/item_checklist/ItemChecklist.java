package br.com.nutrinotes.model.item_checklist;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "item_checklist")
public class ItemChecklist {
	
	@EmbeddedId
	private IdItemCheckList idItem;
	
	@NotBlank
	@NotNull(message = "O campo status não pode ser nulo")
	@Column(name = "status")
	private Character status;
	
	@NotBlank
	@Column(name = "observacoes")
	private String observacoes;
	
			//GET E SET
	
	public IdItemCheckList getIdItem() {
		return idItem;
	}

	public void setIdItem(IdItemCheckList idItem) {
		this.idItem = idItem;
	}

	public Character getstatus() {
		return status;
	}

	public void setstatus(Character status) {
		this.status = status;
	}

	public String getObservacoes() {
		return observacoes;
	}

	public void setObservacoes(String observacoes) {
		this.observacoes = observacoes;
	}
}
