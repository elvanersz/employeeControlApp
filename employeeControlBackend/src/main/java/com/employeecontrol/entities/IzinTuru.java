package com.employeecontrol.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "izin_tur")
public class IzinTuru {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "izin_tur_id")
	private int izinTurId;
	
	@Column(name = "izin_tur_ad")
	private String izinTurAdı;
	
	@OneToMany(mappedBy = "izinTuru")
	@JsonBackReference(value = "izintur-izin")
	private List<Izin> izinList;
	
	

	//GETTER - SETTER
	public int getIzinTurId() {
		return izinTurId;
	}
	public void setIzinTurId(int izinTurId) {
		this.izinTurId = izinTurId;
	}

	public String getIzinTurAdı() {
		return izinTurAdı;
	}
	public void setIzinTurAdı(String izinTurAdı) {
		this.izinTurAdı = izinTurAdı;
	}

	public List<Izin> getIzinList() {
		return izinList;
	}
	public void setIzinList(List<Izin> izinList) {
		this.izinList = izinList;
	}
}
