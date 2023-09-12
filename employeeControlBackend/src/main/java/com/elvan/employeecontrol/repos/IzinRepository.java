package com.elvan.employeecontrol.repos;

import java.util.List;
import java.util.Optional;

import com.elvan.employeecontrol.entities.Izin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IzinRepository extends JpaRepository<Izin, Integer> {

	@Query(value = "SELECT * FROM izin, personel WHERE izin.personel_id = personel.personel_id AND personel.personel_kimlik_numara = :personelKimlikNumarasi", 
		   nativeQuery = true)
	List<Izin> findByIzinWithPersonelKimlikNumarasi(long personelKimlikNumarasi);

	Optional<Izin> findByIzinId(int izinId);
}
