package br.com.nutrinotes.service.templates;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.dao.templates.TemplateChecklistDAO;
import br.com.nutrinotes.model.templates.TemplateChecklist;

@Component
public class TemplateChecklistImpl implements ITemplateChecklistService {
	
	@Autowired
	TemplateChecklistDAO dao;

	@Override
	public boolean save(TemplateChecklist newTemplate) {
		
		if(newTemplate.getTipoChecklist().length() < 5 
				&& newTemplate.getFrequencia() == null ) {
			System.err.println("Erro ao salvar o novo template. Não cumpre os requisitos minimos: "
					+ "1- Ter a descrição do tipo maior que 5 caracteres "
					+ "e/ou informado qual a frequencia do mesmo.");
			return false;
		}
		dao.save(newTemplate);
		return true;
	}

	@Override
	public boolean update(TemplateChecklist templateChecklist, Integer id) {
		
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
	public List<TemplateChecklist> findByName(String nome) {
		return dao.findByNomeContaining(nome);
	}

	@Override
	public TemplateChecklist findById(Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(Integer id) {
		Optional<TemplateChecklist> template = dao.findById(id);
		if (template.isPresent()) {
			dao.deleteById(id);
			return true;
		}
		System.err.println("Ocorreu um erro ao excluir o item do checklist");
		return false;
	}
	
}
