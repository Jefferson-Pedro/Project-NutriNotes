package br.com.nutrinotes.service.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.nutrinotes.dao.user.UserDAO;
import br.com.nutrinotes.model.user.User;
import br.com.nutrinotes.security.NutriToken;

@Component
public class AuthServiceImpl implements IAuthService {
	
	@Autowired
	UserDAO dao;

	@Override
	public User createUser(User newUser) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(10);
		String newPassword = encoder.encode(newUser.getSenha());
		newUser.setSenha(newPassword);
		return dao.save(newUser);
	}

	@Override
	public NutriToken authenticate(User dataLogin) {
		User res = dao.findByLogin(dataLogin.getLogin());
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		if(res != null) {
			if(encoder.matches(dataLogin.getSenha(), res.getSenha())) {
				return new NutriToken("*NutriNotes");
			}
		}
		return null;
	}
	
	
}
