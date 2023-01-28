//ELEMENTS
const tcGonderButton = document.getElementById("tcGonder");
const tcInput = document.getElementById("tc");
const adInput = document.getElementById("ad");
const soyadInput = document.getElementById("soyad");
const sifreInput = document.getElementById("sifre");
const rolInput = document.getElementById("rol");
const telefonInput = document.getElementById("telefon");
const epostaInput = document.getElementById("eposta");
const adresInput = document.getElementById("adres");
const cinsiyetInput = document.getElementById("cinsiyet"); 
const iseBaslamaTarihiInput = document.getElementById("isebaslamatarihi");
const istenCikisTarihiInput = document.getElementById("istenayrılmatarihi");
const gonderButton = document.getElementById("gonder")
const guncelleButton = document.getElementById("guncelle");
const errorDiv = document.getElementById("errordiv");


//EVENTLİSTENERS
addEventListener("load", function(e){

    tcInput.value = this.sessionStorage.getItem("personelKimlikNumarası")

    let url = "http://localhost:8080/personel/";

    fetch(url + tcInput.value)
    .then(function(response){
        return response.json();
    })
    .then(function(personel){

        adInput.value = personel.ad;
        soyadInput.value = personel.soyad;
        sifreInput.value = personel.sifre;
        rolInput.value = personel.rol.rolId;
        telefonInput.value = personel.telefonNumarasi;
        epostaInput.value = personel.eposta;
        adresInput.value = personel.adres;
        cinsiyetInput.value = personel.cinsiyet;
        iseBaslamaTarihiInput.value = personel.iseGirisTarihi;
        istenCikisTarihiInput.value = personel.istenCikisTarihi;
    })
    .catch(() => {
        clearForm();
        tcInput.className = "form-control is-invalid";
        errorDiv.innerText = "Kayıtlı Personel Bulunamadı !!!"
    })
    
})

guncelleButton.addEventListener("click", function(e){

    var data = {
        personelKimlikNumarasi:tcInput.value,
        ad:adInput.value,
        soyad:soyadInput.value,
        sifre:sifreInput.value,
        rol:{rolId:rolInput.value},
        cinsiyet:cinsiyetInput.value,
        eposta:epostaInput.value,
        telefonNumarasi:telefonInput.value,
        adres:adresInput.value,
        iseGirisTarihi:iseBaslamaTarihiInput.value,
        istenCikisTarihi:istenCikisTarihiInput.value
    }

    let url = "http://localhost:8080/personel/guncelle/";

    fetch(url  + tcInput.value, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(alert("Personel Bilgisi Güncellendi"), clearForm())
})

addEventListener("load", function(){

    url = "http://localhost:8080/rol";

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        for(let i=0 ; i<data.length ; i++){

            rolInput.insertAdjacentHTML("beforeend",
            `
            <option value="${data[i].rolId}">${data[i].rolAdi}</option>
            `)
        }
    })
});



//FUNCTİONS
function clearForm(){
    tcInput.className = "form-control";
    tcInput.value = "";
    adInput.value = "";
    soyadInput.value = "";
    sifreInput.value = "";
    rolInput.value = "";
    telefonInput.value = "";
    epostaInput.value = "";
    adresInput.value = "";
    cinsiyetInput.value = "";
    iseBaslamaTarihiInput.value = "";
    istenCikisTarihiInput.value = "";
}