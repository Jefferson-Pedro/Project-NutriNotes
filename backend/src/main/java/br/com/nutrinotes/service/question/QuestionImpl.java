package br.com.nutrinotes.service.question;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.dao.question.QuestionDAO;
import br.com.nutrinotes.model.questions.Question;

@Component
public class QuestionImpl implements IQuestion {
	
	@Autowired
	QuestionDAO dao;

	@Override
	public boolean save(Question novo) {
		if(novo.getQuestions().length() < 20) {
			System.err.println("Erro ao cadastrar o novo item, "
					+ "tem que ter no minimo 20 caracteres");
			return false;
		}
		dao.save(novo);
		return true;
	}

	@Override
	public Question update(Question question, Integer id) {
		Optional<Question> res = dao.findById(id);
		  if (res.isPresent()) {
			  Question  existingQuestion = res.get();
			  BeanUtils.copyProperties(question, existingQuestion, "idQuestions");
			  return dao.save(existingQuestion);
		  }
		  System.err.println("Erro ao editar a questão!");
		return null;
	}

	@Override
	public List<Question> findAll() {
		return dao.findAll();
	}

	@Override
	public List<Question> findByQuestions(String nome) {
		return dao.findByQuestions(nome);
	}

	@Override
	public Question findById(Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(Integer id) {
		Optional<Question> res = dao.findById(id);
		 if (res.isPresent()) {
			 dao.deleteById(id);
			 return true;
		 }
		 System.err.println("Ocorreu um erro para excluir a questão.");
		return false;
	}
}
