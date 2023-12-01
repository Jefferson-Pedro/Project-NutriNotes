package br.com.nutrinotes.service.reminder;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.nutrinotes.dto.ReminderDTO;
import br.com.nutrinotes.model.reminder.Reminder;

public interface IReminderService {
	
	public Reminder save(Reminder novo);
	public Reminder update(Reminder reminder);
	public boolean delete(Integer id);
	public List<Reminder> findAll();
	public Page<Reminder> findAllPage(Pageable pageable);
	public Page<ReminderDTO> findAllPageDTO(Pageable pageable);
	public Reminder findById(Integer id);
}
