package br.com.nutrinotes.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="login", length = 50)
	private String login;
	
	@Column(name="senha", length = 50)
	private String senha;
	
	@ManyToOne
	@JoinColumn(name="id_profile")
	private Profile idProfile;
	
	//GET E SETS

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Profile getIdProfile() {
		return idProfile;
	}

	public void setIdProfile(Profile idProfile) {
		this.idProfile = idProfile;
	}
}
