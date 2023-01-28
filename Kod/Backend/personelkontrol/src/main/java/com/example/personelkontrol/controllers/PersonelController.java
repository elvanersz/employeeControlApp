package com.example.personelkontrol.controllers;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.personelkontrol.entities.Personel;
import com.example.personelkontrol.services.PersonelService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/personel", method = {RequestMethod.PUT, RequestMethod.POST})
public class PersonelController {

	private PersonelService personelService;
	
	
	
	//CONSTRUCTOR
	public PersonelController(PersonelService personelService) {
		this.personelService = personelService;
	}
	
	
	
	//METHODS
	//Tüm personelleri getirir
	@GetMapping
	public List<Personel> getAllPersonel(){
		return personelService.getAllPersonel();
	}
	
	
	//Personel ekleme
	@PostMapping(consumes = {"application/xml","application/json"})  
	public Personel savePersonel(@RequestBody Personel newPersonel) {
		return personelService.saveOnePersonel(newPersonel);
	}
	
	
	//Kimlik Numarası girilen bir personeli getirir
	@GetMapping("/{personelKimlikNumarasi}")
	public Optional<Personel> getOnePersonel(@PathVariable long personelKimlikNumarasi) {
		return personelService.getOnePersonelByPersonelKimlikNumarasi(personelKimlikNumarasi);
	}
	
	
	//Personel Güncelleme
	@PutMapping("/guncelle/{personelKimlikNumarasi}")
	public Personel updateOnePersonel(@PathVariable(value = "personelKimlikNumarasi") long personelKimlikNumarasi, 
			@RequestBody Personel newPersonel) {
		return personelService.updateOnePersonel(personelKimlikNumarasi, newPersonel);
	}
	
	
	//Personel Silme
	@Transactional
	@DeleteMapping("/sil/{personelKimlikNumarasi}")
	public void deleteOnePersonel(@PathVariable long personelKimlikNumarasi) {
		personelService.deleteOnePersonel(personelKimlikNumarasi);
	}
}









