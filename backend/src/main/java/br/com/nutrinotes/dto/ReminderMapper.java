package br.com.nutrinotes.dto;

import org.springframework.stereotype.Component;

import br.com.nutrinotes.model.reminder.Reminder;

@Component
public class ReminderMapper {
	public ReminderDTO toDTO(Reminder reminder) {
		return new ReminderDTO(reminder.getIdReminder(), 
							   reminder.getTitulo(),
							   reminder.getDescricao(),
							   reminder.getDataEvento(),
							   reminder.getCategoria()
		);
	}
}
