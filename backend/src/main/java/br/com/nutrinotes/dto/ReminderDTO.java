package br.com.nutrinotes.dto;

import java.util.Date;

import br.com.nutrinotes.model.reminder.Reminder;

public class ReminderDTO {
	private Integer idReminder;
    private String titulo;
    private String descricao;
    private Date dataEvento;
    private String categoria;
    
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
	
	public static ReminderDTO fromReminder(Reminder reminder) {
		
		ReminderDTO dto = new ReminderDTO();
		
		dto.setIdReminder(reminder.getIdReminder()); 
		dto.setTitulo(reminder.getTitulo());
		dto.setDescricao(reminder.getDescricao());
		dto.setDataEvento(reminder.getDataEvento());
		dto.setCategoria(reminder.getCategoria());
	
		return dto;
	}
}
