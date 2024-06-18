package br.com.nutrinotes.exception;

public class EmptyListException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public EmptyListException(String message) {
		super("Lista de " +  message  +  " vazia.");
	}
	
	public EmptyListException() {
		super("Lista de vazia.");
	}
}
