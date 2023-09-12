package com.elvan.employeecontrol.controllers;

import com.elvan.employeecontrol.services.RolService;
import com.elvan.employeecontrol.entities.Rol;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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






