package br.com.nutrinotes.model.item_checklist;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "item_checklist")
public class ItemChecklist {
	
	@EmbeddedId
	private IdItemCheckList idItem;
	
	@Column(name = "status")
	private Character status;
	
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
