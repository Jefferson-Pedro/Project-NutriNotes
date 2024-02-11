package br.com.nutrinotes.model.reminder;

import java.util.Date;

import org.hibernate.validator.constraints.Length;
import br.com.nutrinotes.model.user.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name="reminder")
public class Reminder {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_reminder")
	private Integer idReminder;
	
	@NotBlank
	@Length(min = 3, max = 45)
	@NotNull(message = "O campo nome do titulo não pode ser nulo")
	@Column(name="titulo")
	private String titulo;
	
	@NotBlank
	@Length(min = 3, max = 45)
	@Column(name="descricao")
	private String descricao;
	
	@NotBlank
	@NotNull(message = "O campo data do evento não pode ser nulo")
	@Column(name="data_evento")
	private Date dataEvento;
	
	@NotBlank
	@NotNull(message = "O campo categoria não pode ser nulo")
	@Column(name="categoria")
	private String categoria;
	
	@ManyToOne
	@JoinColumn(name="id_user")
	private User idUser;
	
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

	public User getIdProfile() {
		return idUser;
	}

	public void setIdProfile(User idUser) {
		this.idUser = idUser;
	}
}
