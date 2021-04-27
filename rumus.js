function next(){
    var x=document.getElementById("next");
    x.style.visibility="visible";
}

function luas(){
    var panjang = parseFloat(document.persegi.panjang.value);
    var lebar = parseFloat(document.persegi.lebar.value);

    if(isNaN(panjang))
    panjang = 0.0;
    if(isNaN(lebar))
    lebar = 0.0;

    var luas = panjang * lebar;
    alert("Hasilnya adalah" + luas);
}

function luasPP(){
    var panjang = parseFloat(document.persegi.panjang.value);
    var lebar = parseFloat(document.persegi.lebar.value);

    if(isNaN(panjang))
    panjang = 0.0;
    if(isNaN(lebar))
    lebar = 0.0;

    var luas = panjang * lebar;
    alert("Hasilnya adalah" + luas);
}

function luas(){
    var alas = parseFloat(document.segitiga.alas.value);
    var tinggi = parseFloat(document.segitiga.tinggi.value);

    if(isNaN(tinggi))
    tinggi = 0.0;
    if(isNaN(alas))
    alas = 0.0;

    var luas = (tinggi * alas)/2;
    alert("Hasilnya adalah" + luas);
}