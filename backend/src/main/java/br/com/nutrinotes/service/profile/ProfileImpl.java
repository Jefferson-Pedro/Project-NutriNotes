package br.com.nutrinotes.service.profile;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.dao.ProfileDAO;
import br.com.nutrinotes.model.Business;
import br.com.nutrinotes.model.Profile;

@Component
public class ProfileImpl implements IProfileService {
	
	@Autowired
	private ProfileDAO dao;

	@Override
	public Profile save(Profile novo) {
		System.out.println(novo.getNome().length());
		 if (novo.getNome() != null && novo.getNome().length() > 0 &&
			 novo.getCrn() != null && novo.getCrn().length() > 0) {
			
		novo.setAtivo(1);
		return dao.save(novo);
		}
		return null;
	}

	@Override
	public Profile update(Profile profile, Integer id) {
		 Optional<Profile> res = dao.findById(id);
		    if (res.isPresent()) {
		    	Profile existingProfile = res.get();
		        BeanUtils.copyProperties(profile, existingProfile, "idProfile");
		        return dao.save(existingProfile);
		    }
		    System.out.println("Erro ao editar a perfil!");
		    return null;
	}
	
	@Override
	public List<Profile> findAll() {
		return dao.findAll();
	}

	@Override
	public List<Profile> findByName(String nome) {
		return dao.findByNomeContaining(nome);
	}

	@Override
	public Profile findById(Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(Integer id) {
		Optional<Profile> p = dao.findById(id);
		if(p != null) {
			dao.deleteById(id);
			System.out.println("Perfil com id " + id + " excluido com sucesso!");
			return true;
		}
		System.out.println("Ocorreu um erro ao excluir o perfil " + id);
		return false;
	}

}
