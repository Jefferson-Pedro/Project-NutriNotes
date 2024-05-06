package br.com.nutrinotes.model.midia;

import br.com.nutrinotes.model.user.User;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

@Entity
@Table(name = "photo_profile")
public class Midia {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_midia")	
	private Integer idMidia;
	
	@Column(name = "descricao", length = 255)
	private String  descricao;
	
	@NotBlank
	@NotEmpty
	@Column(name = "link_midia", length = 255)
	private String  linkMidia;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="id_profile", referencedColumnName = "id_user")
	private User user;

	
	public Midia() {
		super();
	}

	
	// GET E SET

	public Integer getIdMidia() {
		return idMidia;
	}

	public void setIdMidia(Integer idMidia) {
		this.idMidia = idMidia;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getLinkMidia() {
		return linkMidia;
	}

	public void setLinkMidia(String linkMidia) {
		this.linkMidia = linkMidia;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Midia [idMidia=" + idMidia + ", descricao=" + descricao + ", linkMidia=" + linkMidia + ", user=" + user
				+ "]";
	}
}
