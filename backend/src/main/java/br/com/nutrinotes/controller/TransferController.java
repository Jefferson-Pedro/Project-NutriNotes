package br.com.nutrinotes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.nutrinotes.service.media.IUploadService;


@RestController
@CrossOrigin("*")
@RequestMapping("/media")
public class TransferController {
	
	@Autowired 
	IUploadService sevice;
	
	@PostMapping("/upload")
	public ResponseEntity<?> upload(@RequestParam(name="file") MultipartFile file,  
									@RequestParam(name="id") Integer id){
		
		String res = sevice.upload(file);
		
		if (res != null) {
			//System.out.println("Armazenado em: " + res);
	
			return ResponseEntity.status(201).body(res);
		}
		return ResponseEntity.badRequest().build();
	}
}
