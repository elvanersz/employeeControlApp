package com.employeecontrol.repos;


import java.util.Optional;

import com.employeecontrol.entities.Personel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonelRepository extends JpaRepository<Personel, Integer>{
	
	Optional<Personel> findByPersonelKimlikNumarasi(long personelKimlikNumarasi);
	
	void deleteByPersonelKimlikNumarasi(long personelKimlikNumarasi);
}
