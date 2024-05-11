package br.com.nutrinotes.service.user;

import java.util.List;

import br.com.nutrinotes.dto.UserEditDTO;
import br.com.nutrinotes.dto.UserViewDTO;
import br.com.nutrinotes.model.user.User;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public interface IUser {
	
	public User create(@Valid @NotNull User novo);
	public boolean update(@Valid @NotNull UserEditDTO User, @NotNull @Positive Integer id);
	public List<UserViewDTO> findAll();
	public List<UserViewDTO> findByName(@NotNull @NotBlank String nome);
	public UserViewDTO findById(@NotNull @Positive Integer id);
	public UserEditDTO findByIdForUpdate(@NotNull @Positive Integer id);
	public boolean delete(@NotNull @Positive Integer id);
}
