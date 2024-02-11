package br.com.nutrinotes.service.auth;

import br.com.nutrinotes.dto.AuthDTO;
import br.com.nutrinotes.dto.LoginDTO;


public interface IAuthService {
	
	public AuthDTO authenticate(LoginDTO login);
}
