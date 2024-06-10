package br.com.nutrinotes.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;

import org.springframework.http.HttpHeaders;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.nutrinotes.dto.UserEditDTO;
import br.com.nutrinotes.exception.FileSystemException;
import br.com.nutrinotes.service.media.IUploadService;
import br.com.nutrinotes.service.user.IUser;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;


@RestController
@CrossOrigin("*")
@RequestMapping("/files")
public class TransferController {
	
	@Autowired 
	IUploadService transferSevice;

	
	@PostMapping("/upload")
	public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file, 
			  								   @RequestParam(name="id") @NotNull @Positive Integer id) {
		 
		String fileDownloadUri;
		try {
			fileDownloadUri = transferSevice.upload(file, id);
			if (fileDownloadUri != null) {
				return ResponseEntity.ok("Upload feito com sucesso. Download link: " + fileDownloadUri);
			}
			
		} catch (FileSystemException e) {
			return ResponseEntity.status(500).body(e);
		
		} catch (FileNotFoundException e) {
			return ResponseEntity.status(400).body(e);
		}
		
		return null;
	  }

	@GetMapping("download/{fileName:.+}")
	public ResponseEntity<?> download(@PathVariable String fileName){

		try {
			Resource fileResource = transferSevice.download(fileName);
			
			String contentType = Files.probeContentType(Paths.get(fileResource.getFilename()));
			
			if(contentType == null) {
				contentType = "application/octet-stream";
			}
			
			return ResponseEntity.ok()
					.contentType(MediaType.parseMediaType(contentType))
					.body(fileResource);
			
		} catch (FileNotFoundException e) {
			return ResponseEntity.status(400).body(e);
			
		} catch (IOException e) {
			return ResponseEntity.internalServerError().body(e);
		}
	}
}
