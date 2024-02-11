let awe = document.getElementById('ss')
let sekarang = new Date().getHours() <= 18 ? "Selamat Siang" : "Selamat Malam"
awe.innerHTML += `<div>${sekarang}</div>`
console.log(new Date().getDay())
switch(new Date().getDay()){
    case 1:
        awe.innerHTML += `<div>Senin</div>`
        break
    case 2:
        awe.innerHTML += `<div>Selasa</div>`
        break
    case 3:
        awe.innerHTML += `<div>Rabu</div>`
        break
    case 4:
        awe.innerHTML += `<div>Kamis</div>`
        break
    case 5:
        awe.innerHTML += `<div>Jum'at</div>`
        break
    case 6:
        awe.innerHTML += `<div>Sabtu</div>`
        break
    case 0:
        awe.innerHTML += `<div>Minggu</div>`
        break
    default :
        awe.innerHTML += `<div>Data Tidak Valid</div>`
}
awe.innerHTML += `<div id='gas'>${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}</div>`
function x(){
    document.getElementById('gas').innerText = `${String(new Date().getHours()).padStart(2,'0')} : ${String(new Date().getMinutes()).padStart(2,'0')} : ${String(new Date().getSeconds()).padStart(2,'0')}`
}
setInterval(x,1000)