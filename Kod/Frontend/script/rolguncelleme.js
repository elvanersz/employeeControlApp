//ELEMENTS
const rolAdiInput = document.getElementById("rol");
const yeniRolAdiInput = document.getElementById("yeniad");
const yetkilendirme = document.getElementById("yetkilendirme");
const personelekleme = document.getElementById("personelekleme");
const personelsorgulama = document.getElementById("personelsorgulama");
const personelguncelleme = document.getElementById("personelguncelleme");
const personelsilme = document.getElementById("personelsilme");
const rolekleme = document.getElementById("rolekleme");
const seciniz = document.getElementById("seciniz")
const rolyetkisisorgulama = document.getElementById("rolyetkisisorgulama");
const rolyetkisigüncelleme = document.getElementById("rolyetkisigüncelleme");
const rolsilme = document.getElementById("rolsilme");
const izinekleme = document.getElementById("izinekleme");
const izinsorgulama = document.getElementById("izinsorgulama");
const izingüncelleme = document.getElementById("izingüncelleme");
const izinsilme = document.getElementById("izinsilme");
const guncelleButton = document.getElementById("guncelle");
const rolAdiInputId = this.sessionStorage.getItem("rolId")


//EVENTLİSTENERS

addEventListener("load", function(){

    clearForm()

    rolAdiInput.value = this.sessionStorage.getItem("rolAdi")

    url = "http://localhost:8080/rol/";
    fetch(url  + rolAdiInputId)
    .then(response => response.json())
    .then(function(data){
        yeniRolAdiInput.value = data.rolAdi;
    })


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

guncelleButton.addEventListener("click", function(){

    let yetkiler = [];

    if(yetkilendirme.checked == true){
        yetkiler.push({yetkiId: 1, yetkiAdı: "Yetkilendirme"})
    }
    if(personelekleme.checked == true){
        yetkiler.push({yetkiId: 2, yetkiAdı: "PersonelEkleme"})
    }
    if(personelsorgulama.checked == true){
        yetkiler.push({yetkiId: 3, yetkiAdı: "PersonelSorgulama"})
    }
    if(personelguncelleme.checked == true){
        yetkiler.push({yetkiId: 4, yetkiAdı: "PersonelGüncelleme"})
    }
    if(personelsilme.checked == true){
        yetkiler.push({yetkiId: 5, yetkiAdı: "PersonelSilme"})
    }
    if(rolekleme.checked == true){
        yetkiler.push({yetkiId: 6, yetkiAdı: "RolEkleme"})
    }
    if(rolyetkisisorgulama.checked == true){
        yetkiler.push({yetkiId: 7, yetkiAdı: "RolSorgulama"})
    }
    if(rolyetkisigüncelleme.checked == true){
        yetkiler.push({yetkiId: 8, yetkiAdı: "RolGüncelleme"})
    }
    if(rolsilme.checked == true){
        yetkiler.push({yetkiId: 9, yetkiAdı: "RolSilme"})
    }
    if(izinekleme.checked == true){
        yetkiler.push({yetkiId: 10, yetkiAdı: "İzinEkleme"})
    }
    if(izinsorgulama.checked == true){
        yetkiler.push({yetkiId: 11, yetkiAdı: "İzinSorgulama"})
    }
    if(izingüncelleme.checked == true){
        yetkiler.push({yetkiId: 12, yetkiAdı: "İzinGüncelleme"})
    }
    if(izinsilme.checked == true){
        yetkiler.push({yetkiId: 13, yetkiAdı: "İzinSilme"})
    }


    let data = {
        rolAdi: yeniRolAdiInput.value,
        yetkiList: yetkiler
    }

    url = "http://localhost:8080/rol/guncelle/";
    fetch(url  + rolAdiInputId, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res => {

        if(res.ok){
            clearForm()
            alert("Rol Güncelleme İşlemi Gerçekleştirildi")

        }else{
            alert("Rol Güncelleme İşlemi Başarısız !!!")
        }
    })
})



//METHODS
function clearForm(){

    rolAdiInput.value = ""
    yeniRolAdiInput.value = ""
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