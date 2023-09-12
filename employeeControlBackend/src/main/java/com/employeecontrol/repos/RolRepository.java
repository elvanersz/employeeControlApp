package com.employeecontrol.repos;

import java.util.Optional;

import com.employeecontrol.entities.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolRepository extends JpaRepository<Rol, Integer>{

	Optional<Rol> findByRolAdi(String rolAdi);
}
