package br.com.nutrinotes.service.auth;

import br.com.nutrinotes.dto.AuthDTO;
import br.com.nutrinotes.dto.LoginDTO;
import jakarta.validation.constraints.NotNull;


public interface IAuthService {
	
	public AuthDTO authenticate(@NotNull LoginDTO login);
}
