//ELEMENTS
const rolKayıt = document.getElementById("rol-kayıt")
const rolAdiInput = document.getElementById("rol-adi")
const rolTablo = document.getElementById("rolTablosu")


//EVENTLİSTENERS
addEventListener("load", function(){

    url = "http://localhost:8080/rol";

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for(let i=0 ; i<data.length ; i++){

            rolKayıt.insertAdjacentHTML("beforeend", 
            `
                <tr id="${"rolsatır"+(i+1)}">
                    <th scope="row">${data[i].rolId}</th>
                    <td>${data[i].rolAdi}</td>
                    <td><a href="rolyetkisorgulama.html"><button id="${"yetkiler"+(i+1)}" class="btn btn-primary btn-tablo" type="button">YETKİLERİ GÖRÜNTÜLE</button></a></td>
                    <td><a href="rolgüncelleme.html"><button id="${"rolgüncelle"+(i+1)}" class="btn btn-warning btn-tablo" type="button">GÜNCELLE</button></a></td>
                    <td><a href="rolsilme.html"><button id="${"rolsil"+(i+1)}" class="btn btn-danger btn-tablo" type="button">SİL</button></a></td>
                </tr>
            `)

            //Veriler sessionStorage'ye aktarıldı
            const rolYetkiButton = document.getElementById("yetkiler"+(i+1))
            rolYetkiButton.addEventListener("click", function(){
                sessionStorage.setItem("rolId", data[i].rolId)
                sessionStorage.setItem("rolAdi", data[i].rolAdi)
            })

            const rolGuncelleButton = document.getElementById("rolgüncelle"+(i+1))
            rolGuncelleButton.addEventListener("click", function(){
                sessionStorage.setItem("rolId", data[i].rolId)
                sessionStorage.setItem("rolAdi", data[i].rolAdi)
            })
            
            const rolsilButton = document.getElementById("rolsil"+(i+1))
            rolsilButton.addEventListener("click", function(){
                sessionStorage.setItem("rolId", data[i].rolId)
                sessionStorage.setItem("rolAdi", data[i].rolAdi)
            })
        }
    })
})


rolAdiInput.addEventListener("keyup", function(){

    if(rolAdiInput <= 0){
        
        rolError()

    }else {

        rolTablo.insertAdjacentHTML("beforeend", `<tbody id="rol-kayıt2"></tbody>`)
        const rolKayıt2 = document.getElementById("rol-kayıt2")
        
        url = "http://localhost:8080/rol/rolad/";
                
        fetch(url + rolAdiInput.value)
        .then(function(response){
            return response.json();
        })
        .then(function(data){

            if(data != null && rolAdiInput.value != ""){

                clearFormRol()

                rolKayıt2.insertAdjacentHTML("beforeend",
                `
                <tr id="rolsatır0">
                    <th scope="row">${data.rolId}</th>
                    <td>${data.rolAdi}</td>
                    <td><a href="rolyetkisorgulama.html"><button id="yetkiler0" class="btn btn-primary btn-tablo" type="button">YETKİLERİ GÖRÜNTÜLE</button></a></td>
                    <td><a href="rolgüncelleme.html"><button id="rolgüncelle0" class="btn btn-warning btn-tablo" type="button">GÜNCELLE</button></a></td>
                    <td><a href="rolsilme.html"><button id="rolsil0" class="btn btn-danger btn-tablo" type="button">SİL</button></a></td>
                </tr>
                `)
            
                //Veriler sessionStorage'ye aktarıldı
                const rolYetkiButton = document.getElementById("yetkiler0")
                rolYetkiButton.addEventListener("click", function(){
                    sessionStorage.setItem("rolId", data.rolId)
                    sessionStorage.setItem("rolAdi", data.rolAdi)
                })

                const rolGuncelleButton = document.getElementById("rolgüncelle0")
                rolGuncelleButton.addEventListener("click", function(){
                    sessionStorage.setItem("rolId", data.rolId)
                    sessionStorage.setItem("rolAdi", data.rolAdi)
                })
                
                const rolsilButton = document.getElementById("rolsil0")
                rolsilButton.addEventListener("click", function(){
                    sessionStorage.setItem("rolId", data.rolId)
                    sessionStorage.setItem("rolAdi", data.rolAdi)
                })
            }
        })
    }
})


//FUNCTİONS
function rolError(){
    rolAdiInput.className = "border border-2 border-danger"
}

function clearFormRol(){

    rolAdiInput.className = "border border-secondary"

    $("#rol-kayıt").remove()
    $("#rolsatır0").remove()
}