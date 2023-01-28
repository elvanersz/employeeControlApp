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
const silButton = document.getElementById("sil");
const rolAdiInputId = this.sessionStorage.getItem("rolId")



//EVENTLİSTENERS
addEventListener("load", function(){

    clearForm()

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
            yetkilendirme.checked = true;
        }
        if(yetkiList.includes(2)){
            personelekleme.checked = true;
        }
        if(yetkiList.includes(3)){
            personelsorgulama.checked = true;
        }
        if(yetkiList.includes(4)){
            personelguncelleme.checked = true;
        }
        if(yetkiList.includes(5)){
            personelsilme.checked = true;
        }
        if(yetkiList.includes(6)){
            rolekleme.checked = true;
        }
        if(yetkiList.includes(7)){
            rolyetkisisorgulama.checked = true;
        }
        if(yetkiList.includes(8)){
            rolyetkisigüncelleme.checked = true;
        }
        if(yetkiList.includes(9)){
            rolsilme.checked = true;
        }
        if(yetkiList.includes(10)){
            izinekleme.checked = true;
        }
        if(yetkiList.includes(11)){
            izinsorgulama.checked = true;
        }
        if(yetkiList.includes(12)){
            izingüncelleme.checked = true;
        }
        if(yetkiList.includes(13)){
            izinsilme.checked = true;
        }
    })
})

silButton.addEventListener("click", function(){

    if (window.confirm('Rolü Silmek İstediğinize Emin misiniz?')){

        url = "http://localhost:8080/rol/sil/";

        fetch(url + rolAdiInputId, {method:"DELETE"})
        .then(response => {

            if(response.ok){
                clearForm()
                alert("Rol Silme İşlemi Gerçekleştirildi")

            }else{
                alert("Rol Silme İşlemi Başarısız, Bu Role Sahip Personel Mevcut !!!")
            }
        })
    }
})



//METHODS
function clearForm(){

    rolAdiInput.value = ""
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