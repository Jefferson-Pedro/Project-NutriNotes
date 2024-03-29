package br.com.nutrinotes.service.item_checklist;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.dao.item_checklist.ItemChecklistDAO;
import br.com.nutrinotes.model.item_checklist.IdItemCheckList;
import br.com.nutrinotes.model.item_checklist.ItemChecklist;

@Component
public class ItemChecklistImpl implements IItemChecklist {

	@Autowired
	private ItemChecklistDAO dao;

	@Override
	public boolean save(ItemChecklist newItem) {
		if(newItem == null) {
			System.err.println("O objeto está vazio.");
			return false;
		}
		dao.save(newItem);
		return true;
	}

	@Override
	public boolean update(ItemChecklist itemChecklist, IdItemCheckList id) {
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
	public List<ItemChecklist> findByName(String nome) {
		return null; //Descobrir um jeito de puxar
	} 

	@Override
	public ItemChecklist findById(IdItemCheckList id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(IdItemCheckList id) {
		Optional<ItemChecklist> item = dao.findById(id);
		if (item.isPresent()) {
			dao.deleteById(id);
			return true;
		}
		System.err.println("Ocorreu um erro ao excluir o item do checklist");
		return false;
	}

}
