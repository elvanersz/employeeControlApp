package com.employeecontrol.controllers;

import com.employeecontrol.entities.Yetki;
import com.employeecontrol.services.YetkiService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
