package br.com.nutrinotes.dao.item_checklist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.nutrinotes.model.item_checklist.IdItemCheckList;
import br.com.nutrinotes.model.item_checklist.ItemChecklist;

@Repository
public interface ItemChecklistDAO extends JpaRepository<ItemChecklist, IdItemCheckList>{
	//public List<ItemChecklist> findByNomeContaining(String palavraChave);
}
