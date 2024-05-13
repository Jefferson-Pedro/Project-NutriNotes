package br.com.nutrinotes.service.media;

import org.springframework.web.multipart.MultipartFile;

public interface IUploadService {
	
	public String upload(MultipartFile file);
	
	public Boolean delete(String fileName);
	
	public String getImage(String imageName);

}
