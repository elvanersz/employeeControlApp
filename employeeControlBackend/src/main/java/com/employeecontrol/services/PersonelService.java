package com.employeecontrol.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.employeecontrol.entities.Personel;
import com.employeecontrol.repos.PersonelRepository;

@Service
public class PersonelService {

	PersonelRepository personelRepository;

	
	//CONSTRUCTOR
	public PersonelService(PersonelRepository personelRepository) {
		this.personelRepository = personelRepository;
	}
	
	
	
	//METHODS
	//Tüm personelleri getirir
	public List<Personel> getAllPersonel(){
		return personelRepository.findAll();
	}
	
	
	//Personel ekleme
	public Personel saveOnePersonel(Personel newPersonel) {
		return personelRepository.save(newPersonel);
	}
		
		
	//Kimlik Numarası girilen bir personel getirir
	public Optional<Personel> getOnePersonelByPersonelKimlikNumarasi(long personelKimlikNumarasi) {
		return personelRepository.findByPersonelKimlikNumarasi(personelKimlikNumarasi);
	}
	
	
	//Kimlik Numarası girilen personelin bilgilerini günceller
	public Personel updateOnePersonel(long personelKimlikNumarasi, Personel newPersonel) {
		Optional<Personel> personel = personelRepository.findByPersonelKimlikNumarasi(personelKimlikNumarasi);
		
		if(personel.isPresent()) {
			Personel foundPersonel = personel.get();
			foundPersonel.setPersonelKimlikNumarasi(newPersonel.getPersonelKimlikNumarasi());
			foundPersonel.setAd(newPersonel.getAd());
			foundPersonel.setSoyad(newPersonel.getSoyad());
			foundPersonel.setSifre(newPersonel.getSifre());
			foundPersonel.setRol(newPersonel.getRol());
			foundPersonel.setCinsiyet(newPersonel.getCinsiyet());
			foundPersonel.setEposta(newPersonel.getEposta());
			foundPersonel.setTelefonNumarasi(newPersonel.getTelefonNumarasi());
			foundPersonel.setAdres(newPersonel.getAdres());
			foundPersonel.setIseGirisTarihi(newPersonel.getIseGirisTarihi());
			foundPersonel.setIstenCikisTarihi(newPersonel.getIstenCikisTarihi());
			personelRepository.save(foundPersonel);
			return foundPersonel;
		}else {
			return null;
		}
	}

	
	//Personel silme
	public void deleteOnePersonel(long personelKimlikNumarasi) {
		personelRepository.deleteByPersonelKimlikNumarasi(personelKimlikNumarasi);
	}
}








