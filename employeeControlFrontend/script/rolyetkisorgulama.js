//ELEMENTS
const rolAdiInput = document.getElementById("rol");
const Yetkilendirme = document.getElementById("yetkilendirme");
const PersonelEkleme = document.getElementById("personelekleme");
const PersonelSorgulama = document.getElementById("personelsorgulama");
const PersonelGüncelleme = document.getElementById("personelguncelleme");
const PersonelSilme = document.getElementById("personelsilme");
const RolEkleme = document.getElementById("rolekleme");
const RolSorgulama = document.getElementById("rolyetkisisorgulama");
const RolGüncelleme = document.getElementById("rolyetkisigüncelleme");
const RolSilme = document.getElementById("rolsilme");
const İzinEkleme = document.getElementById("izinekleme");
const İzinSorgulama = document.getElementById("izinsorgulama");
const İzinGüncelleme = document.getElementById("izingüncelleme");
const İzinSilme = document.getElementById("izinsilme");
const rolAdiInputId = this.sessionStorage.getItem("rolId")



//EVENTLİSTENERS
addEventListener("load", function(){

    clearForm();

    rolAdiInput.value = this.sessionStorage.getItem("rolAdi")

    url = "http://localhost:8080/yetki/rolyetkileri/";
            
    fetch(url + rolAdiInputId)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        const yetkiList = [];

        for(let i=0 ; i<data.length ; i++){
            yetkiList.push(data[i].yetkiId);
        }

        
        if(yetkiList.includes(1)){
            Yetkilendirme.checked = true;
        }
        if(yetkiList.includes(2)){
            PersonelEkleme.checked = true;
        }
        if(yetkiList.includes(3)){
            PersonelSorgulama.checked = true;
        }
        if(yetkiList.includes(4)){
            PersonelGüncelleme.checked = true;
        }
        if(yetkiList.includes(5)){
            PersonelSilme.checked = true;
        }
        if(yetkiList.includes(6)){
            RolEkleme.checked = true;
        }
        if(yetkiList.includes(7)){
            RolSorgulama.checked = true;
        }
        if(yetkiList.includes(8)){
            RolGüncelleme.checked = true;
        }
        if(yetkiList.includes(9)){
            RolSilme.checked = true;
        }
        if(yetkiList.includes(10)){
            İzinEkleme.checked = true;
        }
        if(yetkiList.includes(11)){
            İzinSorgulama.checked = true;
        }
        if(yetkiList.includes(12)){
            İzinGüncelleme.checked = true;
        }
        if(yetkiList.includes(13)){
            İzinSilme.checked = true;
        }
    })
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