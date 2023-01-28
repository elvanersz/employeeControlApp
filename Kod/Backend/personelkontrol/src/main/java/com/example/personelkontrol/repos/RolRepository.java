package com.example.personelkontrol.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.personelkontrol.entities.Rol;

public interface RolRepository extends JpaRepository<Rol, Integer>{

	Optional<Rol> findByRolAdi(String rolAdi);
}
