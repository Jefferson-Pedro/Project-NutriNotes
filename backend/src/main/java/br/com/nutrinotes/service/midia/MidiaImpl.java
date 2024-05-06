package br.com.nutrinotes.service.midia;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.nutrinotes.dao.midia.MidiaDAO;
import br.com.nutrinotes.dao.user.UserDAO;
import br.com.nutrinotes.model.midia.Midia;
import br.com.nutrinotes.model.user.User;

@Service
public class MidiaImpl implements IMidiaService {

	@Autowired
	private MidiaDAO dao;
	
	@Autowired
	private UserDAO userDao;
	
	@Override
	public Midia create(Midia midia) {
		// MELHORAR ESTE METODO
		return dao.save(midia);
	}
	
	@Override
	public Midia create(String linkMidia, Integer idUser) {
        Midia midia = new Midia();
        User user = userDao.findById(idUser).get();
       //Melhorar este metodo;
        midia.setLinkMidia(linkMidia);
        midia.setUser(user);
        return dao.save(midia);
    }

	@Override
	public boolean update(Midia midia) {
		// MELHORAR ESTE METODO
		Midia save = dao.save(midia);
		if(save != null ) {
			return true;
		}
		return false;
	}

	@Override
	public boolean delete(Integer id) {
		// MELHORAR ESTE METODO
		if (dao.existsById(id)) {
			dao.deleteById(id);
			return true;
		}
		return false;
	}

	@Override
	public Midia findById(Integer id) {
		// MELHORAR ESTE METODO
		return dao.findById(id).orElse(null);
	}
}
