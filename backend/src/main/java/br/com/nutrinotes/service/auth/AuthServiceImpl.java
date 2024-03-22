package br.com.nutrinotes.service.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.user.UserDAO;
import br.com.nutrinotes.dto.AuthDTO;
import br.com.nutrinotes.dto.LoginDTO;
import br.com.nutrinotes.exception.InvalidAccountException;
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


	private User create(@Valid @NotNull User newUser) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(10);
		String newPassword = encoder.encode(newUser.getSenha());
		newUser.setSenha(newPassword);
		return dao.save(newUser);
	}

	@Override
	public NutriToken authenticate(@NotNull LoginDTO login) {
		
		User res = dao.findByEmail(login.login());
		
		if(res != null) {
			
			BCryptPasswordEncoder verifyPass = new BCryptPasswordEncoder();
			
			if(verifyPass.matches(login.password(), res.getSenha())) {
				NutriToken token = TokenUtil.encode(res);
				//return new AuthDTO(res.getIdUser(),res.getEmail(),token.toString());
				return token;
			}else {
				throw new InvalidAccountException("Senha incorreta. Verifique as informações e tente novamente! ");
			}
		}
		throw new InvalidAccountException("Usuário não existe no banco de dados!");
	}
}
