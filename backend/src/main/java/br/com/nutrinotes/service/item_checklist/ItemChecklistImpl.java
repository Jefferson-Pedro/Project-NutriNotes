package br.com.nutrinotes.service.item_checklist;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.item_checklist.ItemChecklistDAO;
import br.com.nutrinotes.model.item_checklist.IdItemCheckList;
import br.com.nutrinotes.model.item_checklist.ItemChecklist;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class ItemChecklistImpl implements IItemChecklist {

	@Autowired
	private ItemChecklistDAO dao;

	@Override
	public ItemChecklist create(@Valid @NotNull ItemChecklist newItem) {
		return dao.save(newItem);
	}

	@Override
	public boolean update(@Valid @NotNull ItemChecklist itemChecklist, @NotNull @Positive IdItemCheckList id) {
		Optional<ItemChecklist> res = dao.findById(id);
		if (res.isPresent()) {
			ItemChecklist existingItem = res.get();
			BeanUtils.copyProperties(itemChecklist, existingItem, "idItem");
			dao.save(existingItem);
			return true;
		}
		System.err.println("Erro ao editar o item do checklist, verifique se as "
				+ "informações estão preenchidas corretamente");
		return false;
	}

	@Override
	public List<ItemChecklist> findAll() {
		return dao.findAll();
	}

	@Override
	public List<ItemChecklist> findByName(@NotNull @NotBlank String nome) {
		return null; //Descobrir um jeito de puxar
	} 

	@Override
	public ItemChecklist findById(@NotNull @Positive IdItemCheckList id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(@NotNull @Positive IdItemCheckList id) {
		Optional<ItemChecklist> item = dao.findById(id);
		if (item.isPresent()) {
			dao.deleteById(id);
			return true;
		}
		System.err.println("Ocorreu um erro ao excluir o item do checklist");
		return false;
	}
}
