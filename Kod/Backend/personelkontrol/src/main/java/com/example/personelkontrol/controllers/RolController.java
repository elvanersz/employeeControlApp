package com.example.personelkontrol.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.personelkontrol.entities.Rol;
import com.example.personelkontrol.services.RolService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/rol")
public class RolController {

	private RolService rolService;
	
	
	//CONTROLLERS
	public RolController(RolService rolService) {
		this.rolService = rolService;
	}
	
	
	
	//METHODS
	@GetMapping
	public List<Rol> getAllRol() {
		return rolService.getAllRol();
	}
	
	
	//Id'si girilen rolü getirir
	@GetMapping("/{rolId}")
	public Optional<Rol> getOneRol(@PathVariable int rolId){
		return rolService.getOneRol(rolId);
	}
	
	
	//Adı girilen rolü getirir
	@GetMapping("/rolad/{rolAdi}")
	public Optional<Rol> getOneRolWithAd(@PathVariable String rolAdi){
		return rolService.getOneRolWithRolAd(rolAdi);
	}
	
	
	//Rol Ekleme
	@PostMapping(consumes = {"application/xml","application/json"})
	public Rol saveRol(@RequestBody Rol newRol) {
		return rolService.saveOneRol(newRol);
	}
	
	
	//Id'si verilen rolü günceller
	@PutMapping("/guncelle/{rolId}")
	public Rol updateOneRol(@PathVariable(value = "rolId") int rolId, @RequestBody Rol newRol) {
		return rolService.updateOneRol(rolId, newRol);
	}
	
	
	//Id'si girilen rolü siler
	@DeleteMapping("/sil/{rolId}")
	public void deleteOneRol(@PathVariable int rolId) {
		rolService.deleteOneRol(rolId);
	}
}






