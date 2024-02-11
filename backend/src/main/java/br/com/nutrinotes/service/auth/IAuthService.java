package br.com.nutrinotes.service.auth;

import br.com.nutrinotes.dto.AuthDTO;
import br.com.nutrinotes.model.user.User;

public interface IAuthService {
	public User create(User newUser);
	public AuthDTO authenticate(User dataLogin);
}
