package br.com.nutrinotes.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.project.dao.ProfileDAO;
import br.com.nutrinotes.project.model.Profile;

@Component
public class ProfileImpl implements IProfileService {
	
	@Autowired
	private ProfileDAO dao;

	@Override
	public Profile cadastrar(Profile novo) {
		if(novo.getNome() != null && novo.getCrn() != null) {
		novo.setAtivo(1);
		return dao.save(novo);
		}
		return null;
	}

	@Override
	public Profile alterar(Profile profile) {
		return dao.save(profile);
	}
	
	@Override
	public List<Profile> buscarTodos() {
		return dao.findAll();
	}

	@Override
	public List<Profile> buscarPorNome(String nome) {
		return dao.findByNomeContaining(nome);
	}

	@Override
	public Profile recuperarPeloId(Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean deletar(Integer id) {
		Profile p = recuperarPeloId(id);
		if(p != null) {
			p.setAtivo(0);
			dao.save(p);
			return true;
		}
	return false;
		
		//dao.deleteById(id);
		//System.out.println("Perfil com id " + id + " excluido com sucesso!");
	}

}
