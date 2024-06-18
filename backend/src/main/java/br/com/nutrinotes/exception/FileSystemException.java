package br.com.nutrinotes.exception;

public class FileSystemException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public FileSystemException(String message) {
		super(message);
	}
}
