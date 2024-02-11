package br.com.nutrinotes.service.checklist;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.checklist.ChecklistDAO;
import br.com.nutrinotes.model.checklist.Checklist;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class CheckListImpl implements ICheckList {
	
	@Autowired
	ChecklistDAO dao;

	@Override
	public Checklist create(@Valid @NotNull Checklist novo) {
		return dao.save(novo);
	}

	@Override
	public boolean update(@Valid @NotNull Checklist checklist, @NotNull @Positive Integer id) {
		Optional<Checklist> res = dao.findById(id);
		if(res.isPresent()) {
			Checklist existingChecklist = res.get();
			BeanUtils.copyProperties(checklist, existingChecklist, "idChecklist");
			dao.save(existingChecklist);
			return true;
		}
		System.out.println("Erro ao editar o checklist!");
		return false;
	}

	@Override
	public Page<Checklist> findAllPage(Pageable pageable) {
		return dao.findAll(pageable);
	}

	@Override
	public List<Checklist> findAll() {
		return dao.findAll();
	}

	@Override
	public List<Checklist> findByName(@NotNull @NotBlank String nome) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public List<Checklist> findAllByDate(LocalDate date) {
		return dao.findAllByDataAuditoria(date);
	}

	@Override
	public Checklist findById(@NotNull @Positive Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(@NotNull @Positive Integer id) {
		Optional<Checklist> p = dao.findById(id);
		if(p.isPresent()) {
			dao.deleteById(id);
			System.out.println("Checklist com id " + id + " excluido com sucesso!");
			return true;
		}
		System.out.println("Ocorreu um erro ao excluir o Checklist " + id);
		return false;
	}
}
