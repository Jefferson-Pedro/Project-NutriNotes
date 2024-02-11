package br.com.nutrinotes.service.auth;

import br.com.nutrinotes.dto.AuthDTO;
import br.com.nutrinotes.model.user.User;

public interface IAuthService {
	public User createUser(User newUser);
	public AuthDTO authenticate(User dataLogin);
}
