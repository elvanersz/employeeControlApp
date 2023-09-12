package com.elvan.employeecontrol.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "rol")
public class Rol {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "rol_id")
	private int rolId;
	
	@Column(name = "rol_ad")
	private String rolAdi;
	
	@OneToMany(mappedBy = "rol")
	@JsonBackReference(value = "rol-personel")
	private List<Personel> personelList;
	
	@ManyToMany(cascade = CascadeType.MERGE)
	@JoinTable (
			name = "rol_yetki",
			joinColumns = { @JoinColumn(name = "rolId")},
			inverseJoinColumns = { @JoinColumn (name = "yetkiId")}
			)
	private List<Yetki> yetkiList;

	
	
	//GETTER - SETTER
	public int getRolId() {
		return rolId;
	}
	public void setRolId(int rolId) {
		this.rolId = rolId;
	}

	public String getRolAdi() {
		return rolAdi;
	}
	public void setRolAdi(String rolAdi) {
		this.rolAdi = rolAdi;
	}
	
	public List<Personel> getPersonelList() {
		return personelList;
	}
	public void setPersonelList(List<Personel> personelList) {
		this.personelList = personelList;
	}
	
	public List<Yetki> getYetkiList() {
		return yetkiList;
	}
	public void setYetkiList(List<Yetki> yetkiList) {
		this.yetkiList = yetkiList;
	}
}
