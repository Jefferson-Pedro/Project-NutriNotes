package br.com.nutrinotes.service.checklist;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.dao.checklist.ChecklistDAO;
import br.com.nutrinotes.model.checklist.Checklist;

@Component
public class CheckListImpl implements ICheckList {
	
	@Autowired
	ChecklistDAO dao;

	@Override
	public Checklist save(Checklist novo) {
		return dao.save(novo);
	}

	@Override
	public Checklist update(Checklist checklist, Integer id) {
		Optional<Checklist> res = dao.findById(id);
		if(res.isPresent()) {
			Checklist existingChecklist = res.get();
			BeanUtils.copyProperties(checklist, existingChecklist, "idChecklist");
			return dao.save(existingChecklist);
		}
		System.out.println("Erro ao editar o checklist!");
		return null;
	}

	@Override
	public Page<Checklist> findAllPage(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Checklist> findAll() {
		return dao.findAll();
	}

	@Override
	public List<Checklist> findByName(String nome) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public List<Checklist> findAllByDate(LocalDate date) {
		return dao.findAllByDataAuditoria(date);
	}

	@Override
	public Checklist findById(Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(Integer id) {
		dao.deleteById(id);
		return true;
	}
}
