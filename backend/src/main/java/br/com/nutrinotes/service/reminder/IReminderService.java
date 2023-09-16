package br.com.nutrinotes.service.reminder;

import java.util.List;

import br.com.nutrinotes.model.reminder.Reminder;

public interface IReminderService {
	
	public Reminder save(Reminder novo);
	public Reminder update(Reminder reminder);
	public boolean delete(Integer id);
	public List<Reminder> findAll();
	public Reminder findById(Integer id);
}
