package com.example.personelkontrol.repos;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.personelkontrol.entities.Personel;

public interface PersonelRepository extends JpaRepository<Personel, Integer>{
	
	Optional<Personel> findByPersonelKimlikNumarasi(long personelKimlikNumarasi);
	
	void deleteByPersonelKimlikNumarasi(long personelKimlikNumarasi);
}
