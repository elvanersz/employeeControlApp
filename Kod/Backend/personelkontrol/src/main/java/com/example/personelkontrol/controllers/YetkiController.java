package com.example.personelkontrol.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.personelkontrol.entities.Yetki;
import com.example.personelkontrol.services.YetkiService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/yetki")
public class YetkiController {

	private YetkiService yetkiService;

	
	
	//CONSTRUCTOR
	public YetkiController(YetkiService yetkiService) {
		this.yetkiService = yetkiService;
	}
	
	
	
	//METHODS
	@GetMapping
	public List<Yetki> getAllYetki(){
		return yetkiService.getAllYetki();
	}
	
	@GetMapping("/rolyetkileri/{rolId}")
	public List<Yetki> getRolYetki(@PathVariable int rolId){
		return yetkiService.getRolYetki(rolId);
	}
}
