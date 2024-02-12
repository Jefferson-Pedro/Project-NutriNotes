package br.com.nutrinotes.exception;

public class InvalidAccountException extends RuntimeException{
	
	public InvalidAccountException(String message) {
		super(message);
	} 
}
