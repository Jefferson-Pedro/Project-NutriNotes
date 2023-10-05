package br.com.nutrinotes.dao.templates;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.nutrinotes.model.templates.TemplateChecklist;

public interface TemplateChecklistDAO extends JpaRepository<TemplateChecklist, Integer> {
	
	public List<TemplateChecklist> findByNomeContaining(String palavraChave);
}
