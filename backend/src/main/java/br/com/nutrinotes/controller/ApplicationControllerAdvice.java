package br.com.nutrinotes.controller;

import java.sql.SQLIntegrityConstraintViolationException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import br.com.nutrinotes.exception.EmptyListException;
import br.com.nutrinotes.exception.RecordNotFoundException;

@RestControllerAdvice
public class ApplicationControllerAdvice {
	
	@ExceptionHandler(RecordNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public String handleNotFoundException(RecordNotFoundException e) {
		return e.getMessage();
	}
	
	@ExceptionHandler(EmptyListException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String handleEmptyListException(EmptyListException e) {
        return e.getMessage();
    }
	
	@ExceptionHandler(SQLIntegrityConstraintViolationException.class)
	@ResponseStatus(HttpStatus.CONFLICT)
    public String handleSQLIntegrityConstraintViolationException(SQLIntegrityConstraintViolationException e) {
		 return "Violação de Integridade SQL: " + e.getMessage();
    }
}	
