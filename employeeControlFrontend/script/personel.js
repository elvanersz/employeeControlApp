//ELEMENTS
const personelKayıt = document.getElementById("personel-kayıt")
const tcPersonelInput = document.getElementById("tc-personel")
const personelTablo = document.getElementById("personelTablosu")


//EVENTLİSTENERS
addEventListener("load", function(){

    url = "http://localhost:8080/personel";

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for(let i=0 ; i<data.length ; i++){
            if(data[i].istenCikisTarihi === null){

                personelKayıt.insertAdjacentHTML("beforeend", 
                `
                    <tr class="kayıt-personel" id="${"satır"+(i+1)}">
                        <th scope="row">${data[i].personelId}</th>
                        <td>${data[i].personelKimlikNumarasi}</td>
                        <td>${data[i].ad}</td>
                        <td>${data[i].soyad}</td>
                        <td>${data[i].sifre}</td>
                        <td>${data[i].rol.rolAdi}</td>
                        <td>${data[i].cinsiyet}</td>
                        <td>${data[i].eposta}</td>
                        <td>${data[i].telefonNumarasi}</td>
                        <td>${data[i].adres}</td>
                        <td>${data[i].iseGirisTarihi}</td>
                        <td> — </td>
                        <td><a href="personelguncelleme.html"><button id="${"personelgüncelle"+(i+1)}" class="btn btn-warning btn-tablo" type="button">GÜNCELLE</button></a></td>
                        <td><a href="personelsilme.html"><button id="${"personelsil"+(i+1)}" class="btn btn-danger btn-tablo" type="button">SİL</button></a></td>
                    </tr>
                `)
            }else {

                personelKayıt.insertAdjacentHTML("beforeend", 
                `
                    <tr class="kayıt-personel" id="${"satır"+(i+1)}">
                        <th scope="row">${data[i].personelId}</th>
                        <td>${data[i].personelKimlikNumarasi}</td>
                        <td>${data[i].ad}</td>
                        <td>${data[i].soyad}</td>
                        <td>${data[i].sifre}</td>
                        <td>${data[i].rol.rolAdi}</td>
                        <td>${data[i].cinsiyet}</td>
                        <td>${data[i].eposta}</td>
                        <td>${data[i].telefonNumarasi}</td>
                        <td>${data[i].adres}</td>
                        <td>${data[i].iseGirisTarihi}</td>
                        <td>${data[i].istenCikisTarihi}</td>
                        <td><a href="personelguncelleme.html"><button id="${"personelgüncelle"+(i+1)}" class="btn btn-warning btn-tablo" type="button">GÜNCELLE</button></a></td>
                        <td><a href="personelsilme.html"><button id="${"personelsil"+(i+1)}" class="btn btn-danger btn-tablo" type="button">SİL</button></a></td>
                    </tr>
                `)
            }
            
            //Veriler sessionStorage'ye aktarıldı
            const personelGuncelleButton = document.getElementById("personelgüncelle"+(i+1))
            personelGuncelleButton.addEventListener("click", function(){
                sessionStorage.setItem("personelKimlikNumarası", data[i].personelKimlikNumarasi)
            })
            
            const personelSilButton = document.getElementById("personelsil"+(i+1))
            personelSilButton.addEventListener("click", function(){
                sessionStorage.setItem("personelKimlikNumarası", data[i].personelKimlikNumarasi)
            })
        }        
    })
})

tcPersonelInput.addEventListener("keyup", function(){

    if(tcPersonelInput.value <= 11111111111){
        
        personelError()

    }else {

        clearFormPersonel()

        personelTablo.insertAdjacentHTML("beforeend", `<tbody id="personel-kayıt2"></tbody>`)
        const personelKayıt2 = document.getElementById("personel-kayıt2")

        url = "http://localhost:8080/personel/";

        fetch(url + tcPersonelInput.value)
        .then(function(response){
            return response.json();
        })
        .then(function(data){

            if(data != null){

                if(data.istenCikisTarihi === null){
                
                    personelKayıt2.insertAdjacentHTML("beforeend", 
                    `
                    <tr class="kayıt-personel" id="personelsatır0">
                        <th scope="row">${data.personelId}</th>
                        <td>${data.personelKimlikNumarasi}</td>
                        <td>${data.ad}</td>
                        <td>${data.soyad}</td>
                        <td>${data.sifre}</td>
                        <td>${data.rol.rolAdi}</td>
                        <td>${data.cinsiyet}</td>
                        <td>${data.eposta}</td>
                        <td>${data.telefonNumarasi}</td>
                        <td>${data.adres}</td>
                        <td>${data.iseGirisTarihi}</td>
                        <td> — </td>
                        <td><a href="personelguncelleme.html"><button id="personelgüncelle0" class="btn btn-warning btn-tablo" type="button">GÜNCELLE</button></a></td>
                        <td><a href="personelsilme.html"><button id="personelsil0" class="btn btn-danger btn-tablo" type="button">SİL</button></a></td>
                    </tr>
                    `)
                }else{

                    personelKayıt2.insertAdjacentHTML("beforeend", 
                    `
                    <tr id="personelsatır0">
                        <th scope="row">${data.personelId}</th>
                        <td>${data.personelKimlikNumarasi}</td>
                        <td>${data.ad}</td>
                        <td>${data.soyad}</td>
                        <td>${data.sifre}</td>
                        <td>${data.rol.rolAdi}</td>
                        <td>${data.cinsiyet}</td>
                        <td>${data.eposta}</td>
                        <td>${data.telefonNumarasi}</td>
                        <td>${data.adres}</td>
                        <td>${data.iseGirisTarihi}</td>
                        <td>${data.istenCikisTarihi}</td>
                        <td><a href="personelguncelleme.html"><button id="personelgüncelle0" class="btn btn-warning btn-tablo" type="button">GÜNCELLE</button></a></td>
                        <td><a href="personelsilme.html"><button id="personelsil0" class="btn btn-danger btn-tablo" type="button">SİL</button></a></td>
                    </tr>
                    `)
                }

                //Veriler sessionStorage'ye aktarıldı
                const personelGuncelleButton = document.getElementById("personelgüncelle0")
                personelGuncelleButton.addEventListener("click", function(){
                    sessionStorage.setItem("personelKimlikNumarası", data.personelKimlikNumarasi)
                })
                
                const personelSilButton = document.getElementById("personelsil0")
                personelSilButton.addEventListener("click", function(){
                    sessionStorage.setItem("personelKimlikNumarası", data.personelKimlikNumarasi)
                })

            }else{

                personelKayıt2.insertAdjacentHTML("beforeend", 
                `
                    <tr id="personelsatır0">
                        <td class="bg-danger" colspan="15"><b>PERSONEL BİLGİSİ BULUNAMADI</b></td>
                    </tr>
                `)
            }
        })
    }
})


//FUNCTİONS
function personelError(){
    tcPersonelInput.className = "border border-2 border-danger"
}

function clearFormPersonel(){

    tcPersonelInput.className = "border border-secondary"

    $("#personel-kayıt").remove()
    $("#personelsatır0").remove()
}