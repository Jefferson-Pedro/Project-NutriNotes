package br.com.nutrinotes.service.media;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.UUID;

import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import br.com.nutrinotes.exception.FileSystemException;

@Service
public class UploadServiceImpl implements IUploadService {

	@Override
	public String upload(MultipartFile file) {

		try {
			System.out.println("DEBUG - Realizando upload do arquivo: " + file.getOriginalFilename());

			String uniqueFileName = generateUniqueFileName(file.getOriginalFilename());
			String extension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
			
			//System.out.println(extension);

			File dir = new File(pathAbsolute(extension));

			// Cria o diretório se ele não existir
			if (!dir.exists()) {
				dir.mkdirs();
			}

			// Criando arquivo no diretório
			File serveFile = new File(dir.getAbsolutePath() + File.separator + uniqueFileName);

			BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serveFile));
			stream.write(file.getBytes());
			stream.close();

			// Retorne o caminho completo do arquivo salvo
			System.out.println("Armazenando em: " + serveFile.getAbsolutePath());

			return uniqueFileName;

		} catch (IOException e) {
			System.err.printf("Ocorreu um erro ao realizar o upload do arquivo: ");
			e.printStackTrace();
		}
		return null;
	}
	
	@Override
	public Resource download(String imageName) throws FileNotFoundException, IOException {
		
		String fullPath = pathAbsolute(imageName);
		System.err.println("Caminho absoluto: " + fullPath);
		File file = new File(fullPath);
		
		
		if (!file.exists()) {
	        throw new FileNotFoundException("Arquivo não encontrado: " + fullPath);
	    }
		
		InputStreamResource resource = new InputStreamResource(new FileInputStream(file));
		return resource;
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

	private static String pathAbsolute(String extension) {
		
		String pathImage;
		
		if (extension.endsWith(".pdf")) {
			pathImage = "src\\report";
		} else {
			pathImage = "src\\image";
		}
		
		// Obtem o caminho absoluto do diretório do projeto
		String projectDirectory = new File("").getAbsolutePath();

		// Concatena com o caminho da imagem para obter o caminho completo
		String fullPath = projectDirectory + File.separator + pathImage + File.separator + extension;

		return fullPath;
	}
}
