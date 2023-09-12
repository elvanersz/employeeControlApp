package com.elvan.employeecontrol.entities;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "izin")
public class Izin {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "izin_id")
	private int izinId;

	@ManyToOne
	@JoinColumn(name = "personel_id")
	private Personel personel;
	
	@ManyToOne
	@JoinColumn(name = "izin_tur_id")
	private IzinTuru izinTuru;

	@ManyToOne
	@JoinColumn(name = "izin_sebep_id")
	private IzinSebep izinSebep;
	
	@Column(name = "izin_baslangic_tarihi")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date izinBaslangicTarihi;

	@Column(name = "izin_bitis_tarihi")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date izinBitisTarihi;
	
	@Column(name = "izin_aciklama")
	private String aciklama;

	
	
	//GETTER - SETTER
	public int getIzinId() {
		return izinId;
	}
	public void setIzinId(int izinId) {
		this.izinId = izinId;
	}

	public Personel getPersonel() {
		return personel;
	}
	public void setPersonel(Personel personel) {
		this.personel = personel;
	}

	public IzinTuru getIzinTuru() {
		return izinTuru;
	}
	public void setIzinturu(IzinTuru izinTuru) {
		this.izinTuru = izinTuru;
	}

	public IzinSebep getIzinSebep() {
		return izinSebep;
	}
	public void setIzinSebep(IzinSebep izinSebep) {
		this.izinSebep = izinSebep;
	}

	public Date getIzinBaslangicTarihi() {
		return izinBaslangicTarihi;
	}
	public void setIzinBaslangicTarihi(Date izinBaslangicTarihi) {
		this.izinBaslangicTarihi = izinBaslangicTarihi;
	}

	public Date getIzinBitisTarihi() {
		return izinBitisTarihi;
	}
	public void setIzinBitisTarihi(Date izinBitisTarihi) {
		this.izinBitisTarihi = izinBitisTarihi;
	}

	public String getAciklama() {
		return aciklama;
	}
	public void setAciklama(String aciklama) {
		this.aciklama = aciklama;
	}
}