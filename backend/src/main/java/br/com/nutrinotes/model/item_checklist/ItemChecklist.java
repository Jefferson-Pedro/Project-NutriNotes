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
	
	@Column(name = "valor")
	private Character valor;
	
	@Column(name = "observacoes")
	private String observacoes;
	

	public IdItemCheckList getIdItem() {
		return idItem;
	}

	public void setIdItem(IdItemCheckList idItem) {
		this.idItem = idItem;
	}

	public Character getValor() {
		return valor;
	}

	public void setValor(Character valor) {
		this.valor = valor;
	}

	public String getObservacoes() {
		return observacoes;
	}

	public void setObservacoes(String observacoes) {
		this.observacoes = observacoes;
	}
}
