package br.com.nutrinotes.service.reminder;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.reminder.ReminderDAO;
import br.com.nutrinotes.dto.ReminderDTO;
import br.com.nutrinotes.model.reminder.Reminder;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class ReminderImpl implements IReminderService{
	
	@Autowired
	private ReminderDAO dao;
	

	@Override
	public Reminder create(@Valid @NotNull Reminder novo) {
			
		return dao.save(novo);
	}

	@Override
	public boolean update(@Valid @NotNull Reminder reminder, @NotNull @Positive Integer id) {
		Optional<Reminder> res = dao.findById(id);
	    if (res.isPresent()) {
	    	Reminder existingBusiness = res.get();
	        BeanUtils.copyProperties(reminder, existingBusiness, "idReminder");
	        dao.save(existingBusiness);
	        return true;
	    }
	    System.err.println("Erro ao editar o evento!");
	    return false;
	}
	
	@Override
	public List<Reminder> findAll() {
		return dao.findAll();
	}

	@Override
	public Reminder findById(@NotNull @Positive Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(@NotNull @Positive Integer id) {
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
