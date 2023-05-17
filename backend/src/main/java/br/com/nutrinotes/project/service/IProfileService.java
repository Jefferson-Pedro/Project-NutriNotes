package br.com.nutrinotes.project.service;

import java.util.List;

import br.com.nutrinotes.project.model.Profile;

public interface IProfileService {
	
	public Profile cadastrar(Profile novo);
	public Profile alterar(Profile profile);
	public List<Profile> buscarTodos();
	public List<Profile> buscarPorNome(String nome);
	public Profile recuperarPeloId(Integer id);
	public boolean deletar(Integer id);
}
