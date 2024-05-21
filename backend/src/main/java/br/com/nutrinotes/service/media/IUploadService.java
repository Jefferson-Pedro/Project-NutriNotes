package br.com.nutrinotes.service.media;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface IUploadService {
	
	public String upload(MultipartFile file, String username);
	
	public Boolean delete(String fileName);
	
	public Resource download(String imageName) throws FileNotFoundException, IOException;

}
