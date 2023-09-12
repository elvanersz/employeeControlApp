package com.elvan.employeecontrol.controllers;

import com.elvan.employeecontrol.services.YetkiService;
import com.elvan.employeecontrol.entities.Yetki;
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
