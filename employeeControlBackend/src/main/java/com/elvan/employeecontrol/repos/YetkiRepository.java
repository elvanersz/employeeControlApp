package com.elvan.employeecontrol.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.elvan.employeecontrol.entities.Yetki;

public interface YetkiRepository extends JpaRepository<Yetki, Integer> {

	@Query(value = "SELECT ROL_YETKI.yetki_id, YETKI.yetki_ad FROM ROL_YETKI inner join YETKI on YETKI.yetki_id = ROL_YETKI.yetki_id WHERE rol_id = :rolId",
			nativeQuery = true)
	public List<Yetki>findByRolYetkiWithRolId(int rolId);
}
