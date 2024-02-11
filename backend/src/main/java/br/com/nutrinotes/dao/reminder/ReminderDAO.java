package br.com.nutrinotes.dao.reminder;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.nutrinotes.model.reminder.Reminder;

public interface ReminderDAO extends JpaRepository<Reminder, Integer>{
	
}
