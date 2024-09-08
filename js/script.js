function jajarGenjangActive() {
    document.getElementById('jajar-genjang').style.zIndex = '2';
    document.getElementById('segitiga').style.zIndex = '1';
}

function segitigaActive() {
    document.getElementById('segitiga').style.zIndex = '2';
    document.getElementById('jajar-genjang').style.zIndex = '1';
    
}

function luasSegitiga(){
    var alasInput = document.getElementById('alas-input').value;
    var tinggiInput = document.getElementById('tinggi-input').value;
    var hasilLuas = 1/2 * alasInput * tinggiInput;

    document.getElementById('result-luas-segitiga').innerHTML = `Hasilnya yaitu : ${hasilLuas}`;
}

function reset(){
    location.reload();
}