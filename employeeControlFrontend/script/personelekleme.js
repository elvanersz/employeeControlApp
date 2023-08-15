//ELEMENTS
const tcInput = document.getElementById("tc");
const adInput = document.getElementById("ad");
const soyadInput = document.getElementById("soyad");
const sifreInput = document.getElementById("sifre");
const rolSelectedInput = document.getElementById("rol");
const telefonInput = document.getElementById("telefon");
const epostaInput = document.getElementById("eposta");
const adresInput = document.getElementById("adres");
const cinsiyetInput = document.getElementById("cinsiyet"); 
const iseBaslamaTarihiInput = document.getElementById("isebaslamatarihi");
const kaydetButton = document.getElementById("kaydet");
const selected = document.getElementById("defaultselecteditem");


//EVENTLİSTENERS
kaydetButton.addEventListener("click", function(){
    
    let data = {
        personelKimlikNumarasi:tcInput.value,
        ad:adInput.value,
        soyad:soyadInput.value,
        sifre:sifreInput.value,
        rol:{rolId:rolSelectedInput.value},
        cinsiyet:cinsiyetInput.value,
        eposta:epostaInput.value,
        telefonNumarasi:telefonInput.value,
        adres:adresInput.value,
        iseGirisTarihi:iseBaslamaTarihiInput.value
    }

    url = "http://localhost:8080/personel";

    fetch(url, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())

    clearForm();
    alert("Personel Kaydı Tamamlandı");
})


addEventListener("load", function(){

    url = "http://localhost:8080/rol";

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        for(let i=0 ; i<data.length ; i++){

            rolSelectedInput.insertAdjacentHTML("beforeend",
            `
            <option value="${data[i].rolId}">${data[i].rolAdi}</option>
            `)
        }
    })
});



//METHODS
function clearForm(){
    tcInput.value = "";
    adInput.value = "";
    soyadInput.value = "";
    rolSelectedInput.value = "";
    sifreInput.value = "";
    telefonInput.value = "";
    epostaInput.value = "";
    adresInput.value = "";
    cinsiyetInput.value = "";
    iseBaslamaTarihiInput.value = "";
}