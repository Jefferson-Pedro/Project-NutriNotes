package br.com.nutrinotes.service.item_checklist;

import java.util.List;

import br.com.nutrinotes.model.item_checklist.IdItemCheckList;
import br.com.nutrinotes.model.item_checklist.ItemChecklist;

public interface IItemChecklist {
	
	public ItemChecklist save(ItemChecklist novo);
	public ItemChecklist update(ItemChecklist itemChecklist, IdItemCheckList id);
	public List<ItemChecklist> findAll();
	public List<ItemChecklist> findByName(String nome);
	public ItemChecklist findById(IdItemCheckList id);
	public boolean delete(IdItemCheckList id);
}
