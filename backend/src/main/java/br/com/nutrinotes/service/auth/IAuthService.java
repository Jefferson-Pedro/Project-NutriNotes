package br.com.nutrinotes.service.auth;

//import br.com.nutrinotes.dto.AuthDTO;
import br.com.nutrinotes.dto.LoginDTO;
import br.com.nutrinotes.security.NutriToken;
import jakarta.validation.constraints.NotNull;


public interface IAuthService {
	
	public NutriToken authenticate(@NotNull LoginDTO login);
}
