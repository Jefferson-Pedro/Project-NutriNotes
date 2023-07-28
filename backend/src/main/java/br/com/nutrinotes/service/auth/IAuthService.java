package br.com.nutrinotes.service.auth;

import br.com.nutrinotes.model.user.User;
import br.com.nutrinotes.security.NutriToken;

public interface IAuthService {
	public User createUser(User newUser);
	public NutriToken authenticate(User dataLogin);
}
