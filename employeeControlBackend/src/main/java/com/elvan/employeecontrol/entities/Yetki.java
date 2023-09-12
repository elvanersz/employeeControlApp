package com.elvan.employeecontrol.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "yetki")
public class Yetki {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "yetki_id")
	private int yetkiId;
	
	@Column(name = "yetki_ad")
	private String yetkiAdı;
	
	@ManyToMany(mappedBy = "yetkiList")
	@JsonBackReference
	private List<Rol> rolList;

	
	
	//GETTER - SETTER
	public int getYetkiId() {
		return yetkiId;
	}
	public void setYetkiId(int yetkiId) {
		this.yetkiId = yetkiId;
	}

	public String getYetkiAdı() {
		return yetkiAdı;
	}
	public void setYetkiAdı(String yetkiAdı) {
		this.yetkiAdı = yetkiAdı;
	}
	
	public List<Rol> getRolList() {
		return rolList;
	}
	public void setRolList(List<Rol> rolList) {
		this.rolList = rolList;
	}
}
