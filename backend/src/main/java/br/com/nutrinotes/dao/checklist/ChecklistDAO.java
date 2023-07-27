package br.com.nutrinotes.dao.checklist;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.nutrinotes.model.checklist.Checklist;

@Repository
public interface ChecklistDAO extends JpaRepository<Checklist, Integer>{
	public List<Checklist> findAllByDataAuditoria(LocalDate date);
}
