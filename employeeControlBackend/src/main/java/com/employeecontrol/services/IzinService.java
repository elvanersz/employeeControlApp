package com.employeecontrol.services;

import com.employeecontrol.entities.Izin;
import com.employeecontrol.entities.IzinSebep;
import com.employeecontrol.entities.IzinTuru;
import com.employeecontrol.repos.IzinRepository;
import com.employeecontrol.repos.IzinSebepRepository;
import com.employeecontrol.repos.IzinTuruRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IzinService {
	
	IzinRepository izinRepository;
	IzinTuruRepository izinTuruRepository;
	IzinSebepRepository izinSebepRepository;

	
	
	//CONSTRUCTOR
	public IzinService(IzinRepository izinRepository, IzinTuruRepository izinTuruRepository, IzinSebepRepository izinSebepRepository) {
		this.izinRepository = izinRepository;
		this.izinTuruRepository = izinTuruRepository;
		this.izinSebepRepository = izinSebepRepository;
	}
	
	
	
	//METHODS
	//Tüm izinleri getirir
	public List<Izin> getAllIzin(){
		return izinRepository.findAll();
	}
	
	//TC'si girilen personelin izinlerini getirir
	public List<Izin> getOneIzin(long personelKimlikNumarasi) {
		return izinRepository.findByIzinWithPersonelKimlikNumarasi(personelKimlikNumarasi);
	}
	
	//İzin ekleme
	public Izin saveOneIzin(Izin newIzin) {
		return izinRepository.save(newIzin);
	}
	
	//Tüm izin türlerini getirir
	public List<IzinTuru> getAllIzinTur() {
		return izinTuruRepository.findAll();
	}
	
	//Tüm izin sebeplerini getirir
	public List<IzinSebep> getAllIzinSebep(){
		return izinSebepRepository.findAll();
	}
	
	//Id'si verilen izni günceller
	public Izin updateOneIzin(int izinId, Izin newIzin) {
		Optional<Izin> izin = izinRepository.findById(izinId);
		
		if(izin.isPresent()) {
			Izin foundIzin = izin.get();
			foundIzin.setIzinturu(newIzin.getIzinTuru());
			foundIzin.setIzinSebep(newIzin.getIzinSebep());
			foundIzin.setIzinBaslangicTarihi(newIzin.getIzinBaslangicTarihi());
			foundIzin.setIzinBitisTarihi(newIzin.getIzinBitisTarihi());
			foundIzin.setAciklama(newIzin.getAciklama());
			izinRepository.save(foundIzin);
			return foundIzin;
		}else {
			return null;
		}
	}
	
	//Id'si verilen izni getirir
	public Optional<Izin> getOneIzin(int izinId) {
		return izinRepository.findById(izinId);
	}
	
	//İd'si girilen izni siler
	public void deleteOneIzin(int izinId) {
		izinRepository.deleteById(izinId);
	}
}






