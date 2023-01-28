//ELEMENTS
const rolAdiInput = document.getElementById("rol");
const yetkilendirme = document.getElementById("yetkilendirme");
const personelekleme = document.getElementById("personelekleme");
const personelsorgulama = document.getElementById("personelsorgulama");
const personelguncelleme = document.getElementById("personelguncelleme");
const personelsilme = document.getElementById("personelsilme");
const rolekleme = document.getElementById("rolekleme");
const rolyetkisisorgulama = document.getElementById("rolyetkisisorgulama");
const rolyetkisigüncelleme = document.getElementById("rolyetkisigüncelleme");
const rolsilme = document.getElementById("rolsilme");
const izinekleme = document.getElementById("izinekleme");
const izinsorgulama = document.getElementById("izinsorgulama");
const izingüncelleme = document.getElementById("izingüncelleme");
const izinsilme = document.getElementById("izinsilme");
const kaydetButton = document.getElementById("kaydet");



//EVENTLİSTENERS
kaydetButton.addEventListener("click", function(){

    let yetkiler = [];

    if(yetkilendirme.checked == true){
        yetkiler.push({yetkiId: 1})
    }
    if(personelekleme.checked == true){
        yetkiler.push({yetkiId: 2})
    }
    if(personelsorgulama.checked == true){
        yetkiler.push({yetkiId: 3})
    }
    if(personelguncelleme.checked == true){
        yetkiler.push({yetkiId: 4})
    }
    if(personelsilme.checked == true){
        yetkiler.push({yetkiId: 5})
    }
    if(rolekleme.checked == true){
        yetkiler.push({yetkiId: 6})
    }
    if(rolyetkisisorgulama.checked == true){
        yetkiler.push({yetkiId: 7})
    }
    if(rolyetkisigüncelleme.checked == true){
        yetkiler.push({yetkiId: 8})
    }
    if(rolsilme.checked == true){
        yetkiler.push({yetkiId: 9})
    }
    if(izinekleme.checked == true){
        yetkiler.push({yetkiId: 10})
    }
    if(izinsorgulama.checked == true){
        yetkiler.push({yetkiId: 11})
    }
    if(izingüncelleme.checked == true){
        yetkiler.push({yetkiId: 12})
    }
    if(izinsilme.checked == true){
        yetkiler.push({yetkiId: 13})
    }


    let data = {
        rolAdi: rolAdiInput.value,
        yetkiList: yetkiler
    }

    url = "http://localhost:8080/rol";

    fetch(url, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(alert("Rol Başarıyla Eklendi"), clearForm())
})



//METHODS
function clearForm(){

    rolAdiInput.value = "";
    yetkilendirme.checked = false;
    personelekleme.checked = false;
    personelsorgulama.checked = false;
    personelguncelleme.checked = false;
    personelsilme.checked = false;
    rolekleme.checked = false;
    rolyetkisisorgulama.checked = false;
    rolyetkisigüncelleme.checked = false;
    rolsilme.checked = false;
    izinekleme.checked = false;
    izinsorgulama.checked = false;
    izingüncelleme.checked = false;
    izinsilme.checked = false;
}