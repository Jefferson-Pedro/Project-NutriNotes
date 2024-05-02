package br.com.nutrinotes.service.midia;

import br.com.nutrinotes.model.midia.Midia;

public interface IMidiaService {
	
	public Midia create(Midia midia);
	public boolean update(Midia midia);
	public boolean delete(Integer id);
	public Midia findById(Integer id);
}
