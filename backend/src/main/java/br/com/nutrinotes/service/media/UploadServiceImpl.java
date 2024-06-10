package br.com.nutrinotes.service.media;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.nutrinotes.dto.UserEditDTO;
import br.com.nutrinotes.exception.UserException;
import br.com.nutrinotes.model.user.User;
import br.com.nutrinotes.service.user.IUser;

@Service
public class UploadServiceImpl implements IUploadService {
	
	@Autowired
	private IUser userService;
	
	@Value("${file.upload-dir.image}")
    private String imageDir;

    @Value("${file.upload-dir.pdf}")
    private String pdfDir;
           
    
	@Override
	public String upload(MultipartFile file, Integer id) throws FileNotFoundException {
    	 
		Path targetLocation = null;
		
		UserEditDTO user = userService.findByIdForUpdate(id);
		
		if(user != null) {
			
			String fileName = StringUtils.cleanPath(file.getOriginalFilename());
			String extension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
			
			try {
				targetLocation = pathAbsolute(extension).resolve(fileName);
				Files.createDirectories(targetLocation.getParent());
				file.transferTo(targetLocation);
				
				String fileDownloadUri = ServletUriComponentsBuilder
						.fromCurrentContextPath()
						.path("/files/download/")
						.path(fileName)
						.toUriString();
				
				user.setImageProfile(fileDownloadUri);
				userService.update(user, id);
				
				return fileDownloadUri;
				
			} catch (IOException e) {
				System.err.println("Erro ao processar o arquivo! " + e);
			}
		}
			
		return null;
	}
	
	@Override
	public Resource download(String filename) throws FileNotFoundException, IOException {
		
		User user = userService.findByImageProfile(filename);
		
		if(user == null) {
			throw new UserException("Usuário não encontrado!");
		}
		
		String extension = filename.substring(filename.lastIndexOf("."));
	    Path basePath = pathAbsolute(extension);
	    Path filePath = basePath.resolve(filename).normalize();
		
		try {
			Resource resource = new UrlResource(filePath.toUri());
			
			if (resource.exists() && resource.isReadable()) {
	            return resource;
	        } else {
	            throw new FileNotFoundException("Service: Arquivo não encontrado!");
	        }
		} catch (MalformedURLException e) {
	        throw new IllegalArgumentException("URL inválida: " + filePath);
	    }
	}

	@Override
	public Boolean delete(String fileName) {
		// TODO Auto-generated method stub
		return null;
	}

	
	private String generateUniqueFileName(String originalFileName) {
		String uniqueID = UUID.randomUUID().toString();
		return "image_" + uniqueID + "_" + originalFileName;
	}

	private Path pathAbsolute(String extension) throws FileNotFoundException {
		Path fullPath = null;
			
		if (extension.equals(".pdf")) {
			fullPath = Paths.get(pdfDir);
			
		} else if (extension.equalsIgnoreCase(".jpeg") || 
					extension.equalsIgnoreCase(".jpg") || 
					extension.equalsIgnoreCase(".png") || 
					extension.equalsIgnoreCase(".gif")) {
			
			fullPath = Paths.get(imageDir);
			
		} else {
			throw new FileNotFoundException("Extensão de arquivo não suportada: " + extension);
		}
				 
		 return fullPath.toAbsolutePath().normalize();
	}
}
