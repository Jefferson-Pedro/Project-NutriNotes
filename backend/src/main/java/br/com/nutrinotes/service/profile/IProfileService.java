package br.com.nutrinotes.service.profile;

import java.util.List;

import br.com.nutrinotes.model.Profile;

public interface IProfileService {
	
	public Profile save(Profile novo);
	public Profile update(Profile profile);
	public List<Profile> findAll();
	public List<Profile> findByName(String nome);
	public Profile findById(Integer id);
	public boolean delete(Integer id);
}
