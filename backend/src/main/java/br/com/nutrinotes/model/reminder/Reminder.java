package br.com.nutrinotes.model.reminder;

import java.util.Date;

import br.com.nutrinotes.model.profile.Profile;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="reminder")
public class Reminder {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_reminder")
	private Integer idReminder;
	
	@Column(name="titulo")
	private String titulo;
	
	@Column(name="descricao")
	private String descricao;
	
	@Column(name="data_evento")
	private Date dataEvento;
	
	@Column(name="categoria")
	private String categoria;
	
	@ManyToOne
	@JoinColumn(name="id_profile")
	private Profile idProfile;
	
	//GET e SET

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

	public Profile getIdProfile() {
		return idProfile;
	}

	public void setIdProfile(Profile idProfile) {
		this.idProfile = idProfile;
	}
}
