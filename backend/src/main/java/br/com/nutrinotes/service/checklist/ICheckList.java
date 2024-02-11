package br.com.nutrinotes.service.checklist;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.nutrinotes.model.checklist.Checklist;

public interface ICheckList {
	
	public Checklist save(Checklist novo);
	public boolean update(Checklist checklist, Integer id);
	public Page<Checklist> findAllPage(Pageable pageable);
	public List<Checklist> findAll();
	public List<Checklist> findAllByDate(LocalDate date);
	public List<Checklist> findByName(String nome);
	public Checklist findById(Integer id);
	public boolean delete(Integer id);


}
