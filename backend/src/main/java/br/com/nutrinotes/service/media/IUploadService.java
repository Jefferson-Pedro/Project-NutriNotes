package br.com.nutrinotes.service.media;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface IUploadService {
	
	public String upload(MultipartFile file);
	
	public Boolean delete(String fileName);
	
	public Resource download(String imageName);

}
