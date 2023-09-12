package com.elvan.employeecontrol.repos;

import java.util.Optional;

import com.elvan.employeecontrol.entities.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolRepository extends JpaRepository<Rol, Integer>{

	Optional<Rol> findByRolAdi(String rolAdi);
}
