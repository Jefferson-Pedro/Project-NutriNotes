package br.com.nutrinotes.dto;

import br.com.nutrinotes.model.user.User;


public class UserEditDTO extends User {
	
	private String novaSenha;
		
	
	//GET E SET

	public String getNovaSenha() {
		return novaSenha;
	}

	public void setNovaSenha(String novaSenha) {
		this.novaSenha = novaSenha;
	}
	
	
}
