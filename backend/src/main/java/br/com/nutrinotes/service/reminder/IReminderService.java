package br.com.nutrinotes.service.reminder;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.nutrinotes.dto.ReminderDTO;
import br.com.nutrinotes.model.reminder.Reminder;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public interface IReminderService {
	
	public Reminder create(@Valid @NotNull Reminder novo);
	public boolean update(@Valid @NotNull Reminder reminder, @NotNull @Positive Integer id);
	public boolean delete(@NotNull @Positive Integer id);
	public List<Reminder> findAll();
	public Page<Reminder> findAllPage(Pageable pageable);
	public Page<ReminderDTO> findAllPageDTO(Pageable pageable);
	public Reminder findById(@NotNull @Positive Integer id);
}
