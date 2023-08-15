package com.example.personelkontrol.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "izin_sebep")
public class IzinSebep {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "izin_sebep_id")
	private int izinSebepId;
	
	@Column(name = "izin_sebep_ad")
	private String izinSebepAdı;
	
	@OneToMany(mappedBy = "izinSebep")
	@JsonBackReference(value = "izinsebep-izin")
	private List<Izin> izinList;

	
	
	//GETTER - SETTER
	public int getIzinSebepId() {
		return izinSebepId;
	}
	public void setIzinSebepId(int izinSebepId) {
		this.izinSebepId = izinSebepId;
	}

	public String getIzinSebepAdı() {
		return izinSebepAdı;
	}
	public void setIzinSebepAdı(String izinSebepAdı) {
		this.izinSebepAdı = izinSebepAdı;
	}

	public List<Izin> getIzinList() {
		return izinList;
	}
	public void setIzinList(List<Izin> izinList) {
		this.izinList = izinList;
	}
}
