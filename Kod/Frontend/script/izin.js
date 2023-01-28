//ELEMENTS
const izinKayıt = document.getElementById("izin-kayıt")
const tcIzinInput = document.getElementById("tc-izin");
const izinTablo = document.getElementById("izinTablosu")


//EVENTLİSTENERS
addEventListener("load", function(){

    url = "http://localhost:8080/izin";

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for(let i=0 ; i<data.length ; i++){

            var tarih1 = new Date(`${data[i].izinBaslangicTarihi}`);
            var tarih2 = new Date(`${data[i].izinBitisTarihi}`);

            if(data[i].izinTuru.izinTurId == 1){

                izinKayıt.insertAdjacentHTML("beforeend", 
                `
                    <tr id="${"izinsatır"+(i+1)}">
                        <th scope="row">${data[i].izinId}</th>
                        <td>${data[i].personel.ad+" "+data[i].personel.soyad}</td>
                        <td>${data[i].personel.personelKimlikNumarasi}</td>
                        <td>${data[i].izinTuru.izinTurAdı}</td>
                        <td>${data[i].izinBaslangicTarihi}</td>
                        <td>${data[i].izinBitisTarihi}</td>
                        <td>${Math.floor(tarih2.getTime() - tarih1.getTime())/1000/60/60/24}</td>
                        <td>${data[i].izinSebep.izinSebepAdı}</td>
                        <td>${data[i].aciklama}</td>
                        <td><a href="izinguncelleme.html"><button id="${"izingüncelle"+(i+1)}" class="btn btn-warning btn-tablo" type="button">GÜNCELLE</button></a></td>
                        <td><a href="izinsilme.html"><button id="${"izinsil"+(i+1)}" class="btn btn-danger btn-tablo" type="button">SİL</button></a></td>
                    </tr>
                `)
            }else{
                izinKayıt.insertAdjacentHTML("beforeend", 
                `
                    <tr id="${"izinsatır"+(i+1)}">
                        <th scope="row">${data[i].izinId}</th>
                        <td>${data[i].personel.ad+" "+data[i].personel.soyad}</td>
                        <td>${data[i].personel.personelKimlikNumarasi}</td>
                        <td>${data[i].izinTuru.izinTurAdı}</td>
                        <td>${data[i].izinBaslangicTarihi}</td>
                        <td>${data[i].izinBitisTarihi}</td>
                        <td>${Math.floor(tarih2.getTime() - tarih1.getTime())/1000/60/60/24}</td>
                        <td> — </td>
                        <td> — </td>
                        <td><a href="izinguncelleme.html"><button id="${"izingüncelle"+(i+1)}" class="btn btn-warning btn-tablo" type="button">GÜNCELLE</button></a></td>
                        <td><a href="izinsilme.html"><button id="${"izinsil"+(i+1)}" class="btn btn-danger btn-tablo" type="button">SİL</button></a></td>
                    </tr>
                `)
            }

            //Veriler sessionStorage'ye aktarıldı
            const izinGuncelleButton = document.getElementById("izingüncelle"+(i+1))
            izinGuncelleButton.addEventListener("click", function(){
                sessionStorage.setItem("personelKimlikNumarası", data[i].personel.personelKimlikNumarasi)
            })
            
            const izinSilButton = document.getElementById("izinsil"+(i+1))
            izinSilButton.addEventListener("click", function(){
                sessionStorage.setItem("personelKimlikNumarası", data[i].personel.personelKimlikNumarasi)
            })
        }        
    })
})

tcIzinInput.addEventListener("keyup", function(){
    
    if(tcIzinInput.value < 11111111111){
        
        izinError()

    }else {

        clearFormIzin()

        izinTablo.insertAdjacentHTML("beforeend", `<tbody id="izin-kayıt2"></tbody>`)
        const izinKayıt2 = document.getElementById("izin-kayıt2")

        url = "http://localhost:8080/izin/";

        fetch(url + tcIzinInput.value)
        .then(function(response){
            return response.json();
        })
        .then(function(data){

            if(data.length > 0){
                
                for(let i=0 ; i<data.length ; i++){

                    var tarih1 = new Date(`${data[i].izinBaslangicTarihi}`);
                    var tarih2 = new Date(`${data[i].izinBitisTarihi}`);

                    
                    if(data[i].izinTuru.izinTurId == 1){

                        izinKayıt2.insertAdjacentHTML("beforeend", 
                        `
                            <tr id="izinsatır0">
                                <th scope="row">${data[i].izinId}</th>
                                <td>${data[i].personel.ad+" "+data[i].personel.soyad}</td>
                                <td>${data[i].personel.personelKimlikNumarasi}</td>
                                <td>${data[i].izinTuru.izinTurAdı}</td>
                                <td>${data[i].izinBaslangicTarihi}</td>
                                <td>${data[i].izinBitisTarihi}</td>
                                <td>${Math.floor(tarih2.getTime() - tarih1.getTime())/1000/60/60/24}</td>
                                <td>${data[i].izinSebep.izinSebepAdı}</td>
                                <td>${data[i].aciklama}</td>
                                <td><a href="izinguncelleme.html"><button id="izingüncelle0" class="btn btn-warning btn-tablo" type="button">GÜNCELLE</button></a></td>
                                <td><a href="izinsilme.html"><button id="izinsil0" class="btn btn-danger btn-tablo" type="button">SİL</button></a></td>
                            </tr>
                        `)
                    }else{
                        izinKayıt2.insertAdjacentHTML("beforeend", 
                        `
                            <tr id="izinsatır0">
                                <th scope="row">${data[i].izinId}</th>
                                <td>${data[i].personel.ad+" "+data[i].personel.soyad}</td>
                                <td>${data[i].personel.personelKimlikNumarasi}</td>
                                <td>${data[i].izinTuru.izinTurAdı}</td>
                                <td>${data[i].izinBaslangicTarihi}</td>
                                <td>${data[i].izinBitisTarihi}</td>
                                <td>${Math.floor(tarih2.getTime() - tarih1.getTime())/1000/60/60/24}</td>
                                <td> — </td>
                                <td> — </td>
                                <td><a href="izinguncelleme.html"><button id="izingüncelle0" class="btn btn-warning btn-tablo" type="button">GÜNCELLE</button></a></td>
                                <td><a href="izinsilme.html"><button id="izinsil0" class="btn btn-danger btn-tablo" type="button">SİL</button></a></td>
                            </tr>
                        `)
                    }

                    //Veriler sessionStorage'ye aktarıldı
                    const izinGuncelleButton = document.getElementById("izingüncelle0")
                    izinGuncelleButton.addEventListener("click", function(){
                        sessionStorage.setItem("personelKimlikNumarası", data.personel.personelKimlikNumarasi)
                    })
                    
                    const izinSilButton = document.getElementById("izinsil0")
                    izinSilButton.addEventListener("click", function(){
                        sessionStorage.setItem("personelKimlikNumarası", data.personel.personelKimlikNumarasi)
                    })
                }
                
            }else{

                izinKayıt2.insertAdjacentHTML("beforeend", 
                `
                    <tr id="izinsatır0">
                        <td class="bg-danger" colspan="15"><b>İZİN BİLGİSİ BULUNAMADI</b></td>
                    </tr>
                `)
            }
        })
    }
})


//FUNCTİONS
function izinError(){
    tcIzinInput.className = "border border-2 border-danger"
}

function clearFormIzin(){

    tcIzinInput.className = "border border-secondary"

    $("#izin-kayıt").remove()
    $("#izinsatır0").remove()
}