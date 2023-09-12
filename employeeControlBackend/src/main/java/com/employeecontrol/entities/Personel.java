package com.employeecontrol.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "personel")
public class Personel{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "personel_id")
	private int personelId;
	
	@Column(name = "personel_kimlik_numara")
	long personelKimlikNumarasi;
	
	private String ad;
	
	private String soyad;
	
	private String sifre;
	
	@OneToMany(mappedBy = "personel")
	@JsonBackReference(value = "personel-izin")
	private List<Izin> izinList;
	
	@ManyToOne
	@JoinColumn(name = "rol_id")
	private Rol rol;
	
	private String cinsiyet;
	
	private String eposta;
	
	@Column(name = "telefon_numarasi")
	private String telefonNumarasi;
	
	private String adres;
	
	@Column(name = "ise_giris_tarih")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date iseGirisTarihi;

	@Column(name = "isten_cikis_tarih")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date istenCikisTarihi;

	
	
	//GETTER - SETTER
	public int getPersonelId() {
		return personelId;
	}
	public void setPersonelId(int personelId) {
		this.personelId = personelId;
	}

	public long getPersonelKimlikNumarasi() {
		return personelKimlikNumarasi;
	}
	public void setPersonelKimlikNumarasi(long personelKimlikNumarasi) {
		this.personelKimlikNumarasi = personelKimlikNumarasi;
	}

	public String getAd() {
		return ad;
	}
	public void setAd(String ad) {
		this.ad = ad;
	}

	public String getSoyad() {
		return soyad;
	}
	public void setSoyad(String soyad) {
		this.soyad = soyad;
	}

	public String getSifre() {
		return sifre;
	}
	public void setSifre(String sifre) {
		this.sifre = sifre;
	}

	public List<Izin> getIzinList() {
		return izinList;
	}
	public void setIzinList(List<Izin> izinList) {
		this.izinList = izinList;
	}

	public Rol getRol() {
		return rol;
	}
	public void setRol(Rol rol) {
		this.rol = rol;
	}

	public String getCinsiyet() {
		return cinsiyet;
	}
	public void setCinsiyet(String cinsiyet) {
		this.cinsiyet = cinsiyet;
	}

	public String getEposta() {
		return eposta;
	}
	public void setEposta(String eposta) {
		this.eposta = eposta;
	}

	public String getTelefonNumarasi() {
		return telefonNumarasi;
	}
	public void setTelefonNumarasi(String telefonNumarasi) {
		this.telefonNumarasi = telefonNumarasi;
	}

	public String getAdres() {
		return adres;
	}
	public void setAdres(String adres) {
		this.adres = adres;
	}

	public Date getIseGirisTarihi() {
		return iseGirisTarihi;
	}
	public void setIseGirisTarihi(Date iseGirisTarihi) {
		this.iseGirisTarihi = iseGirisTarihi;
	}

	public Date getIstenCikisTarihi() {
		return istenCikisTarihi;
	}
	public void setIstenCikisTarihi(Date istenCikisTarihi) {
		this.istenCikisTarihi = istenCikisTarihi;
	}
}