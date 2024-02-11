package br.com.nutrinotes.service.profile;

import java.util.List;

import br.com.nutrinotes.model.user.Profile;

public interface IProfile {
	
	public Profile save(Profile novo);
	public Profile update(Profile profile, Integer id);
	public List<Profile> findAll();
	public List<Profile> findByName(String nome);
	public Profile findById(Integer id);
	public boolean delete(Integer id);
}
