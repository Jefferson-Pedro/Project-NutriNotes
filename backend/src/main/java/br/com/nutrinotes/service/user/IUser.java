package br.com.nutrinotes.service.user;

import java.util.List;

import br.com.nutrinotes.dto.UserResponseDTO;
import br.com.nutrinotes.dto.UserWithoutBusinessDTO;
import br.com.nutrinotes.model.user.User;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public interface IUser {
	
	public User create(@Valid @NotNull User novo);
	public boolean update(@Valid @NotNull User User, @NotNull @Positive Integer id);
	public List<UserWithoutBusinessDTO> findAll();
	public List<UserWithoutBusinessDTO> findByName(@NotNull @NotBlank String nome);
	public UserResponseDTO findById(@NotNull @Positive Integer id);
	public boolean delete(@NotNull @Positive Integer id);
}
