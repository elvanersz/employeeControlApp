//ELEMENTS
const tcGonderButton = document.getElementById("gonder");
const tcInput = document.getElementById("tc");
const adInput = document.getElementById("ad");
const soyadInput = document.getElementById("soyad");
const errorDiv = document.getElementById("errordiv");



//EVENTLİSTENERS
addEventListener("load", function(e){

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


    url2 = "http://localhost:8080/izin/";

    fetch(url2 + tcInput.value)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        if(data.length == 0) {
            
            alert("Personelin İzin Kaydı Bulunmamaktadır !!!");

        }else {

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
                                    <label ><b>İzin Türü:</b> ${data[i].izinTuru.izinTurAdı}</label><br>
                                    <label ><b>Başlangıç Tarihi:</b> ${data[i].izinBaslangicTarihi}</label><br>
                                    <label ><b>Bitiş Tarihi:</b> ${data[i].izinBitisTarihi}</label><br>
                                    <label id="gunsayisi"><b>Gün Sayısı:</b> ${Math.floor(tarih2.getTime() - tarih1.getTime())/1000/60/60/24} Gün</label><br>
                                    <label ><b>İzin Sebebi:</b> ${data[i].izinSebep.izinSebepAdı}</label><br>
                                    <label ><b>Açıklama:</b> ${data[i].aciklama}</label>
                                    <button type="button" style="margin-top: 15px;" class="btn btn-danger btn-block" id="${'izinsil'+(i+1)}">İzni Sil</button>
                                </div> 
                            </form>
                        </div>
                    </div>
                    `)

                    izinSilButton = document.getElementById("izinsil"+(i+1));
                    izinSilButton.addEventListener("click", function(){

                        if (window.confirm('İzni Silmek İstediğinize Emin misiniz?')){

                            url = "http://localhost:8080/izin/sil/";

                            fetch(url + data[i].izinId, {method:"DELETE"})

                            izinCard = document.getElementById("izincard"+(i+1));
                            izinCard.remove();

                        }else{

                            alert("İzin Silme Başarısız !!!")
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
                                    <label ><b>İzin Türü:</b> ${data[i].izinTuru.izinTurAdı}</label><br>
                                    <label ><b>Başlangıç Tarihi:</b> ${data[i].izinBaslangicTarihi}</label><br>
                                    <label ><b>Bitiş Tarihi:</b> ${data[i].izinBitisTarihi}</label><br>
                                    <label id="gunsayisi"><b>Gün Sayısı:</b> ${Math.floor(tarih2.getTime() - tarih1.getTime())/1000/60/60/24} Gün</label><br>
                                    <button type="button" style="margin-top: 15px;" class="btn btn-danger btn-block" id="${'izinsil'+(i+1)}">İzni Sil</button>    
                                </div> 
                            </form>
                        </div>
                    </div>
                    `)

                    izinSilButton = document.getElementById("izinsil"+(i+1));
                    izinSilButton.addEventListener("click", function(){

                        if (window.confirm('İzni Silmek İstediğinize Emin misiniz?')){

                            url = "http://localhost:8080/izin/sil/";

                            fetch(url + data[i].izinId, {method:"DELETE"})

                            izinCard = document.getElementById("izincard"+(i+1));
                            izinCard.remove();

                        }else{

                            alert("İzin Silme Başarısız !!!")
                        }
                    })
                }
            }
        }
    })
    
});



//FUNCTİONS
function clearForm(){
    
    for(let i=0 ; i<$("label").length-3 ; i++){
        document.getElementById("izincard"+(i+1)).remove();
    }
}