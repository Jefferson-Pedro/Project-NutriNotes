package br.com.nutrinotes.service.templates;

import java.util.List;

import br.com.nutrinotes.model.templates.TemplateChecklist;


public interface ITemplateChecklistService {
	
	public boolean save(TemplateChecklist newTemplate);
	public boolean update(TemplateChecklist templateChecklist, Integer id);
	public List<TemplateChecklist> findAll();
	public List<TemplateChecklist> findByName(String nome);
	public TemplateChecklist findById(Integer id);
	public boolean delete(Integer id);
}
