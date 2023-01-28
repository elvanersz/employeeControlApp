package com.example.personelkontrol.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.personelkontrol.entities.Rol;
import com.example.personelkontrol.repos.RolRepository;

@Service
public class RolService {

	RolRepository rolRepository;
	
	
	
	//CONSTRUCTOR
	public RolService(RolRepository rolRepository) {
		this.rolRepository = rolRepository;
	}



	//METHODS
	//Rolleri getirir
	public List<Rol> getAllRol() {
		return rolRepository.findAll();
	}

	//Id'si girilen rolü getirir
	public Optional<Rol> getOneRol(int rolId) {
		return rolRepository.findById(rolId);
	}
	
	//Adı girilen rolü getirir
	public Optional<Rol> getOneRolWithRolAd(String rolAdi) {
		return rolRepository.findByRolAdi(rolAdi);
	}
	
	//Rol Ekleme
	public Rol saveOneRol(Rol newRol) {
		return rolRepository.save(newRol);
	}
	
	//Id'si verilen rolü günceller
	public Rol updateOneRol(int rolId, Rol newRol) {
		Optional<Rol> rol = rolRepository.findById(rolId);
		
		if(rol.isPresent()) {
			Rol foundRol = rol.get();
			foundRol.setRolAdi(newRol.getRolAdi());
			foundRol.setYetkiList(newRol.getYetkiList());
			rolRepository.save(foundRol);
			return foundRol;
		}else {
			return null;
		}
	}
	
	//Id'si girilen rolü siler
	public void deleteOneRol(int rolId) {
		rolRepository.deleteById(rolId);
	}
}







