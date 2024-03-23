package br.com.nutrinotes.dto;

import java.time.LocalDate;

public record UserUpdateDTO(
		Integer id, 
		String nome,
		LocalDate data_nasc, 
		String sexo,
		String email,
		String telefone,
		String crn,
		String senhaAtual,
		String novaSenha
		) {

}
