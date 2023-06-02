package br.com.nutrinotes.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.nutrinotes.model.Reminder;

public interface ReminderDAO extends JpaRepository<Reminder, Integer>{
	
}
