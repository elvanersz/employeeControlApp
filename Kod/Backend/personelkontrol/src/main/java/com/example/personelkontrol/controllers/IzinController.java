package personelkontrol.src.main.java.com.example.personelkontrol.controllers;

import com.example.personelkontrol.entities.Izin;
import com.example.personelkontrol.entities.IzinSebep;
import com.example.personelkontrol.entities.IzinTuru;
import com.example.personelkontrol.services.IzinService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/izin")
public class IzinController {

	private IzinService izinService;
	
	
	//CONSTRUCTOR
	public IzinController(IzinService izinService) {
		this.izinService = izinService;
	}
	
	
	
	//METHODS
	//Tüm izinleri getirir
	@GetMapping
	public List<Izin> getAllIzin(){
		return izinService.getAllIzin();
	}
	
	
	//TC'si girilen personelin izinlerini getirir
	@GetMapping("/{personelKimlikNumarasi}")
	public List<Izin> getOneIzin(@PathVariable long personelKimlikNumarasi) {
		return izinService.getOneIzin(personelKimlikNumarasi);
	}
	
	
	//İzin ekleme
	@PostMapping(consumes = {"application/xml","application/json"})  
	public Izin saveIzin(@RequestBody Izin newIzin) {
		return izinService.saveOneIzin(newIzin);
	}
	
	
	//Tüm izin türlerini getirir
	@GetMapping("/izintur")
	public List<IzinTuru> getAllIzınTuru(){
		return izinService.getAllIzinTur();
	}
	
	
	//Tüm izin sebeplerini getirir
	@GetMapping("/izinsebep")
	public List<IzinSebep> getAllIzınSebep(){
		return izinService.getAllIzinSebep();
	}
	
	
	//İd'si verilen izni günceller
	@PutMapping("/guncelle/{izinId}")
	public Izin updateOneIzin(@PathVariable(value = "izinId") int izinId, @RequestBody Izin newIzin) {
		return izinService.updateOneIzin(izinId, newIzin);
	}
	
	
	//Id'si verilen izni getirir
	@GetMapping("/goruntule/{izinId}")
	public Izin getOneIzin(@PathVariable int izinId){
		return izinService.getOneIzin(izinId).orElse(null);
	}
	
	
	//İd'si girilen izni siler
	@DeleteMapping("/sil/{izinId}")
	public void deleteOneIzin(@PathVariable int izinId) {
		izinService.deleteOneIzin(izinId);
	}
}








