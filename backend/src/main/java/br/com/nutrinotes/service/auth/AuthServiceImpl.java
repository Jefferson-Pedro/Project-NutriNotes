package br.com.nutrinotes.service.auth;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.dao.user.UserDAO;
import br.com.nutrinotes.model.user.User;
import br.com.nutrinotes.security.Token;

@Component
public class AuthServiceImpl implements IAuthService {
	
	@Autowired
	UserDAO dao;

	@Override
	public User createUser(User newUser) {
		/*BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(5);
		String newPassword = encoder.encode(newUser.getSenha());
		newUser.setSenha(newPassword);
		return dao.save(newUser);*/
		return null;
	}

	@Override
	public Token authenticate(User dataLogin) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}
