package br.com.nutrinotes.service.auth;

import br.com.nutrinotes.model.User;
import br.com.nutrinotes.security.Token;

public interface IAuthService {
	public User createUser(User newUser);
	public Token authenticate(User dataLogin);
}
