package br.com.nutrinotes.service.media;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Path;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletRequest;

public interface IUploadService {
	
	public Boolean delete(String fileName);
	
	public Resource download(String file) throws FileNotFoundException, IOException;

	public String upload(MultipartFile file, Integer id) throws FileNotFoundException;

}
