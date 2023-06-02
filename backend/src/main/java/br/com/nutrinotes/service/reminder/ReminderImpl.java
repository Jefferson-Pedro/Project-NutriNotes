package br.com.nutrinotes.service.reminder;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.dao.ReminderDAO;
import br.com.nutrinotes.model.Reminder;

@Component
public class ReminderImpl implements IReminderService{
	
	@Autowired
	private ReminderDAO dao;

	@Override
	public Reminder save(Reminder novo) {
		if(novo !=null) {
			return dao.save(novo);
		}
		return null;
	}

	@Override
	public Reminder update(Reminder reminder) {
		if(reminder !=null) {
			return dao.save(reminder);
		}
		return null;
	}
	
	@Override
	public List<Reminder> findAll() {
		return dao.findAll();
	}

	@Override
	public Reminder findById(Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(Integer id) {
		Optional<Reminder> reminder = dao.findById(id);
		if(reminder != null) {
			dao.deleteById(id);
			System.out.println("Lembrete excluido com sucesso!");
			return true;
		}
		System.out.println("Erro ao excluir o lembrete com id: " + id);
		return false;
	}

	

}
