package com.example.personelkontrol.repos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.personelkontrol.entities.Izin;

public interface IzinRepository extends JpaRepository<Izin, Integer> {

	@Query(value = "SELECT * FROM izin, personel WHERE izin.personel_id = personel.personel_id AND personel.personel_kimlik_numara = :personelKimlikNumarasi", 
		   nativeQuery = true)
	List<Izin> findByIzinWithPersonelKimlikNumarasi(long personelKimlikNumarasi);

	Optional<Izin> findByIzinId(int izinId);
}
