package br.com.nutrinotes.service.templates;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.templates.TemplateChecklistDAO;
import br.com.nutrinotes.model.templates.TemplateChecklist;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class TemplateChecklistImpl implements ITemplateChecklistService {
	
	@Autowired
	TemplateChecklistDAO dao;

	@Override
	public TemplateChecklist save(@Valid @NotNull TemplateChecklist newTemplate) {
	
		return dao.save(newTemplate);
	}

	@Override
	public boolean update(@Valid @NotNull TemplateChecklist templateChecklist, @NotNull @Positive Integer id) {
		
		Optional<TemplateChecklist> res = dao.findById(id);
		if (res.isPresent()) {
			TemplateChecklist existingTemplate = res.get();
			BeanUtils.copyProperties(templateChecklist, existingTemplate, "idTemplate");
			dao.save(existingTemplate);
			return true;
		}
		 System.err.println("Erro ao editar o template, verifique se as " + 
				 			"informações estão preenchidas corretamente");
		return false;
	}

	@Override
	public List<TemplateChecklist> findAll() {
		return dao.findAll();
	}

	@Override
	public List<TemplateChecklist> findByName(@NotNull String nome) {
		return dao.findByNomeContaining(nome);
	}

	@Override
	public TemplateChecklist findById(@NotNull @Positive Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(@NotNull @Positive Integer id) {
		Optional<TemplateChecklist> template = dao.findById(id);
		if (template.isPresent()) {
			dao.deleteById(id);
			return true;
		}
		System.err.println("Ocorreu um erro ao excluir o item do checklist");
		return false;
	}
}
