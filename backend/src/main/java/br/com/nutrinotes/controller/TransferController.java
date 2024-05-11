package br.com.nutrinotes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.nutrinotes.dto.UserEditDTO;
import br.com.nutrinotes.model.user.User;
import br.com.nutrinotes.service.media.IUploadService;
import br.com.nutrinotes.service.user.IUser;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;


@RestController
@CrossOrigin("*")
@RequestMapping("/media")
public class TransferController {
	
	@Autowired 
	IUploadService sevice;
	
	@Autowired
	private IUser user_service;
	
	@PostMapping("/upload")
	public ResponseEntity<?> upload(@RequestParam(name="file") @Valid MultipartFile file,  
									@RequestParam(name="id") @NotNull @Positive Integer id){
		
		UserEditDTO user = user_service.findByIdForUpdate(id);
		String res = sevice.upload(file);
		if (res != null && user != null) {
			//System.out.println("Armazenado em: " + res);
			user.setLink_photo(res);
			
			if (user_service.update(user, id)) {
				return ResponseEntity.status(201).body(res);
			}
			return ResponseEntity.status(400).body("Erro ao atualizar o usuário");
		}
		return ResponseEntity.status(400).body("Erro ao processar a imagem!");
	}
}
