package br.com.nutrinotes.service.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.user.UserDAO;
import br.com.nutrinotes.dto.AuthDTO;
import br.com.nutrinotes.model.user.User;
import br.com.nutrinotes.security.NutriToken;
import br.com.nutrinotes.security.TokenUtil;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

@Validated
@Service
public class AuthServiceImpl implements IAuthService {
	
	@Autowired
	UserDAO dao;

	@Override
	public User create(@Valid @NotNull User newUser) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(10);
		String newPassword = encoder.encode(newUser.getSenha());
		newUser.setSenha(newPassword);
		return dao.save(newUser);
	}

	@Override
	public AuthDTO authenticate(@Valid @NotNull User dataLogin) {
		User res = dao.findByLogin(dataLogin.getEmail());
		
		if(res != null) {
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			if(encoder.matches(dataLogin.getSenha(), res.getSenha())) {
				NutriToken token = TokenUtil.encode(res);
				return new AuthDTO(res.getIdProfile(),res.getEmail(),token.toString());
			}
		}
		return null;
	}
}
