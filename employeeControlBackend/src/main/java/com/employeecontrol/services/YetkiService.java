package com.employeecontrol.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.employeecontrol.entities.Yetki;
import com.employeecontrol.repos.YetkiRepository;

@Service
public class YetkiService {

	YetkiRepository yetkiRepository;
	
	
	
	//CONSTRUCTOR
	public YetkiService(YetkiRepository yetkiRepository) {
		this.yetkiRepository = yetkiRepository;
	}
	
	
	
	//METHODS
	public List<Yetki> getAllYetki(){
		return yetkiRepository.findAll();
	}
	
	//Id'si girilen rolün yetkilerini getirir
	public List<Yetki> getRolYetki(int rolId){
		return yetkiRepository.findByRolYetkiWithRolId(rolId);
	}
}
