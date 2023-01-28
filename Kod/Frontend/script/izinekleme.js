//ELEMENTS
const tcGonderButton = document.getElementById("gonder");
const tcInput = document.getElementById("tc");
const adInput = document.getElementById("ad");
const soyadInput = document.getElementById("soyad");
const izinTuruInput = document.getElementById("izituru");
const izinSebepInput = document.getElementById("izinsebebi")
const aciklamaInput = document.getElementById("aciklama");
const izinBaslangicInput = document.getElementById("izinbaslamatarihi");
const izinBitisInput = document.getElementById("izinbitistarihi");
const kaydetButton = document.getElementById("kaydet");
const errorDiv = document.getElementById("errordiv");
const izinTuruSelected = document.getElementById("izinturuselected");
const izinSebepSelected = document.getElementById("izinsebepselected");
const sebepGrup = document.getElementById("sebepgrup");
const aciklamaGrup = document.getElementById("aciklamagrup")



//EVENTLİSTENERS
tcGonderButton.addEventListener("click", function(e){

    if(tcInput.value === "" || tcInput.value < 11111111111){
        
        error();
    
    }else {

        tcInput.className = "form-control is-valid";

        url = "http://localhost:8080/personel/";

        fetch(url + tcInput.value)
        .then(function(response){
            return response.json();
        })
        .then(function(personel){

            adInput.value = personel.ad;
            soyadInput.value = personel.soyad;
        })
        .catch(() => {
            clearForm();
            tcInput.className = "form-control is-invalid";
            errorDiv.innerText = "Kayıtlı Personel Bulunamadı !!!"
        })
    }
});


kaydetButton.addEventListener("click", function(){
    
    url2 = "http://localhost:8080/personel/";
    fetch(url2 + tcInput.value)
    .then(function(response){
        return response.json();
    })
    .then(function(personel){

        let dataGunluk = {
            personel:{personelId:personel.personelId},
            izinTuru:{izinTurId:izinTuruInput.value},
            izinSebep:{izinSebepId:izinSebepInput.value},
            aciklama:aciklamaInput.value,
            izinBaslangicTarihi:izinBaslangicInput.value,
            izinBitisTarihi:izinBitisInput.value
        }
    
        let dataYıllık = {
            personel:{personelId:personel.personelId},
            izinTuru:{izinTurId:izinTuruInput.value},
            izinBaslangicTarihi:izinBaslangicInput.value,
            izinBitisTarihi:izinBitisInput.value
        }
    
        url = "http://localhost:8080/izin";
    
        if(izinTuruInput.value == 1){
    
            fetch(url, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(dataGunluk)
            })
            .then(response => response.json())
        
            clearForm();
            alert("İzin Kaydı Tamamlandı");
    
        }else if(izinTuruInput.value == 2){
    
            fetch(url, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(dataYıllık)
            })
            .then(response => response.json())
        
            clearForm();
            alert("İzin Kaydı Tamamlandı");
        }
    })
})


izinTuruInput.addEventListener("click", function(){

    if(izinTuruInput.value == 1){
        sebepGrup.style = "margin-top: 20px; display: block;"
        aciklamaGrup.style = "resize: none; display: block;"
    }else if(izinTuruInput.value == 0 || izinTuruInput.value == 2){
        sebepGrup.style = "margin-top: 20px; display: none;"
        aciklamaGrup.style = "resize: none; display: none;"
    }

})


addEventListener("load", function(){

    url = "http://localhost:8080/izin/izintur";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        for(let i=0 ; i<data.length ; i++){

            izinTuruInput.insertAdjacentHTML("beforeend",
            `
            <option value="${data[i].izinTurId}">${data[i].izinTurAdı}</option>
            `)
        }
    })


    url2 = "http://localhost:8080/izin/izinsebep";
    fetch(url2)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        for(let i=0 ; i<data.length ; i++){

            izinSebepInput.insertAdjacentHTML("beforeend",
            `
            <option value="${data[i].izinSebepId}">${data[i].izinSebepAdı}</option>
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
    izinTuruInput.value = "";
    izinSebepInput.value = "";
    aciklamaInput.value = "";
    izinBaslangicInput.value = "";
    izinBitisInput.value = "";
    sebepGrup.style = "margin-top: 20px; display: none;";
    aciklamaGrup.style = "resize: none; display: none;";
}