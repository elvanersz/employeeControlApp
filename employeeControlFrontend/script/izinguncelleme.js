//ELEMENTS
const tcInput = document.getElementById("tc");
const adInput = document.getElementById("ad");
const soyadInput = document.getElementById("soyad");
const errorDiv = document.getElementById("errordiv");



//EVENTLİSTENERS
addEventListener("load", function(){

    tcInput.value = this.sessionStorage.getItem("personelKimlikNumarası")

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


    url = "http://localhost:8080/izin/";

    fetch(url + tcInput.value)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        for(let i=0 ; i<data.length ; i++){

            var tarih1 = new Date(`${data[i].izinBaslangicTarihi}`);
            var tarih2 = new Date(`${data[i].izinBitisTarihi}`);

            if(data[i].izinTuru.izinTurAdı === "Günlük"){

                soyadInput.insertAdjacentHTML("afterend", 
                `
                <div id="${'izincard'+(i+1)}" style="margin-top: 20px; border-color: black; border-width: 2px; height: 100%;" class="card">
                    <div style="border-color: black; border-width: 2px;" class="card-header">İzin Detayları</div>
                    <div class="card-body">
                        <form id="form" novalidate>
                            <div class="form-group">

                                <div class="input-group">
                                    <label for="${'izinturu'+(i+1)}" style="margin-top: 5px;"><b>İzin Türü:</b></label><br>
                                    <select class="custom-select" id="${'izinturu'+(i+1)}">
                                    </select>
                                </div>
                                <div class="input-group">
                                    <label style="margin-top: 15px; margin-bottom: 16px;" for="${'izinsebep'+(i+1)}"><b>İzin Sebebi:</b></label><br>
                                    <select style="margin-top: 8px;" class="custom-select" id="${'izinsebep'+(i+1)}">
                                    </select>
                                </div>

                                <label><b>Başlangıç Tarihi:</b> <input style="width: 220px;" type="text" value="${data[i].izinBaslangicTarihi}"></label><br>
                                <label><b>Bitiş Tarihi:</b> <input style="width: 258px;" type="text" value="${data[i].izinBitisTarihi}"></label><br>
                                <label><b>Kaç Gün:</b> <input disabled style="width: 275px;" type="text" value="${Math.floor(tarih2.getTime() - tarih1.getTime())/1000/60/60/24}"></label><br>
                                <label><b>Açıklama:</b> <input style="width: 268px;" type="text" value="${data[i].aciklama}"></label>
                                <button type="button" style="margin-top: 15px;" class="btn btn-warning btn-block" id="${'izinguncelle'+(i+1)}">İzni Güncelle</button>
                            </div> 
                        </form>
                    </div>
                </div>
                `)


                url = "http://localhost:8080/izin/izinsebep";
                fetch(url)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
            
                    for(let y=0 ; y<data.length ; y++){

                        document.getElementById("izinsebep"+(i+1)).insertAdjacentHTML("beforeend",
                        `
                        <option value="${data[y].izinSebepId}">${data[y].izinSebepAdı}</option>
                        `)
                    }
                })

            }else if (data[i].izinTuru.izinTurAdı === "Yıllık"){
                
                soyadInput.insertAdjacentHTML("afterend", 
                `
                <div id="${'izincard'+(i+1)}" style="margin-top: 20px; border-color: black; border-width: 2px; height: 100%;" class="card">
                    <div style="border-color: black; border-width: 2px;" class="card-header">İzin Detayları</div>
                    <div class="card-body">
                        <form id="form" novalidate>
                            <div class="form-group">

                            <div class="input-group">
                                <label for="${'izinturu'+(i+1)}" style="margin-top: 5px;"><b>İzin Türü:</b></label><br>
                                <select class="custom-select" id="${'izinturu'+(i+1)}">
                                </select>
                            </div>

                            <label><b>Başlangıç Tarihi:</b> <input style="width: 220px; margin-top: 5px;" type="text" value="${data[i].izinBaslangicTarihi}"></label><br>
                            <label><b>Bitiş Tarihi:</b> <input style="width: 258px;" type="text" value="${data[i].izinBitisTarihi}"></label><br>
                            <label><b>Kaç Gün:</b> <input disabled style="width: 275px;" type="text" value="${Math.floor(tarih2.getTime() - tarih1.getTime())/1000/60/60/24}"></label><br>
                            <button type="button" style="margin-top: 15px;" class="btn btn-warning btn-block" id="${'izinguncelle'+(i+1)}">İzni Güncelle</button>
                            </div> 
                        </form>
                    </div>
                </div>
                `)
            }

            
            url = "http://localhost:8080/izin/izintur";
        
            fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
        
                for(let y=0 ; y<data.length ; y++){

                    document.getElementById("izinturu"+(i+1)).insertAdjacentHTML("beforeend",
                    `
                    <option value="${data[y].izinTurId}">${data[y].izinTurAdı}</option>
                    `)
                }
            })
        }
    })
});



//FUNCTİONS
function clearForm(){

    for(let i=0 ; i<$("label").length-3 ; i++){
        document.getElementById("izincard"+(i+1)).remove();
    }
}