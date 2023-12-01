package br.com.nutrinotes.service.reminder;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.dao.reminder.ReminderDAO;
import br.com.nutrinotes.dto.ReminderDTO;
import br.com.nutrinotes.dto.ReminderMapper;
import br.com.nutrinotes.model.reminder.Reminder;

@Component
public class ReminderImpl implements IReminderService{
	
	@Autowired
	private ReminderDAO dao;
	
	@Autowired
	private ReminderMapper mapper;


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

	@Override
	public Page<Reminder> findAllPage(Pageable pageable) {
		return dao.findAll(pageable);
	}

	@Override
	public Page<ReminderDTO> findAllPageDTO(Pageable pageable) {
		Page<Reminder> page = dao.findAll(PageRequest.of(0, 5));
	
		return null;
	}

	

}
