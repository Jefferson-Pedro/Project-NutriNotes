package br.com.nutrinotes.dto;

import java.util.Date;

public class ReminderDTO {
	private Integer idReminder;
    private String titulo;
    private String descricao;
    private Date dataEvento;
    private String categoria;
    
	public ReminderDTO() {}
	
	public ReminderDTO(Integer idReminder, String titulo, String descricao, Date dataEvento, String categoria) {
		this.idReminder = idReminder;
		this.titulo = titulo;
		this.descricao = descricao;
		this.dataEvento = dataEvento;
		this.categoria = categoria;
	}
		//GET E SET
	
	public Integer getIdReminder() {
		return idReminder;
	}

	public void setIdReminder(Integer idReminder) {
		this.idReminder = idReminder;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Date getDataEvento() {
		return dataEvento;
	}

	public void setDataEvento(Date dataEvento) {
		this.dataEvento = dataEvento;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
}
