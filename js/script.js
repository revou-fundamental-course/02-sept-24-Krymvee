document.addEventListener('DOMContentLoaded', function () {

    //menghilangkan hasil dari penghitungan
    document.getElementById('result-luas-segitiga').style.display = 'none';
    document.getElementById('result-keliling-segitiga').style.display = 'none';
    document.getElementById('result-luas-jajar-genjang').style.display = 'none';
    document.getElementById('result-keliling-jajar-genjang').style.display = 'none';

    document.getElementById('luasSegitiga').addEventListener('submit', function (e) {
        e.preventDefault();

        const alasSegitiga = parseFloat(document.getElementById('alas-input').value);
        const tinggiSegitiga = parseFloat(document.getElementById('tinggi-input').value);

        // Menghitung luas
        const luasSegitiga = 0.5 * alasSegitiga * tinggiSegitiga;

        document.getElementById('value-alas-segitiga').innerText = alasSegitiga;
        document.getElementById('value-tinggi-segitiga').innerText = tinggiSegitiga;
        document.getElementById('value-luas-segitiga').innerText = luasSegitiga.toFixed(2);
        document.getElementById('result-luas-segitiga').style.display = 'block';
        
    });

    document.getElementById('kelilingSegitiga').addEventListener('submit', function (e) {
        e.preventDefault();

        const sisi1Segitiga = parseFloat(document.getElementById('sisi-input1').value);
        const sisi2Segitiga = parseFloat(document.getElementById('sisi-input2').value);
        const sisi3Segitiga = parseFloat(document.getElementById('sisi-input3').value);

        // Validasi apakah segitiga valid
        if (sisi1Segitiga + sisi2Segitiga <= sisi3Segitiga || sisi1Segitiga + sisi3Segitiga <= sisi2Segitiga || sisi2Segitiga + sisi3Segitiga <= sisi1Segitiga) {
            alert("Sisi-sisi yang dimasukkan tidak dapat membentuk segitiga.");
            return;
        }

        // Menghitung keliling
        const kelilingSegitiga = sisi1Segitiga + sisi2Segitiga + sisi3Segitiga;

        document.getElementById('value-sisi1').innerText = sisi1Segitiga;
        document.getElementById('value-sisi2').innerText = sisi2Segitiga;
        document.getElementById('value-sisi3').innerText = sisi3Segitiga;
        document.getElementById('value-keliling-segitiga').innerText = kelilingSegitiga.toFixed(2);
        document.getElementById('result-keliling-segitiga').style.display = 'block';
       
    });

    //reset luas segitiga
    document.getElementById('resetLuasSegitiga').addEventListener('click', function () {
        document.getElementById('luasSegitiga').reset();
        document.getElementById('result-luas-segitiga').style.display = 'none';
    });


    //reset keliling segitiga
    document.getElementById('resetKelilingSegitiga').addEventListener('click', function () {
        document.getElementById('kelilingSegitiga').reset();
        document.getElementById('result-keliling-segitiga').style.display = 'none';
    });
    
    //menghilangkan hasil dari penghitungan
   

    //luas jajar genjang
    document.getElementById('luasJajarGenjang').addEventListener('submit', function (e) {
        e.preventDefault();
        const alasJajarGenjang = parseFloat(document.getElementById('alas-input-jg').value);
        const tinggiJajarGenjang = parseFloat(document.getElementById('tinggi-input-jg').value);
        const luasJajarGenjang = alasJajarGenjang * tinggiJajarGenjang;

        document.getElementById('value-alas-jg').innerText = alasJajarGenjang;
        document.getElementById('value-tinggi-jg').innerText = tinggiJajarGenjang;
        document.getElementById('value-luas-jajar-genjang').innerText = luasJajarGenjang.toFixed(2);
        document.getElementById('result-luas-jajar-genjang').style.display = 'block';
        
    });
    
    //reset luas jajar genjang
    document.getElementById('resetLuasJajarGenjang').addEventListener('click', function () {
        document.getElementById('luasJajarGenjang').reset();
        document.getElementById('result-luas-jajar-genjang').style.display = 'none';
    });

    //keliling jajar genjang
    document.getElementById('kelilingJajarGenjang').addEventListener('submit', function (e) {
        e.preventDefault();
        const panjangJajarGenjang = parseFloat(document.getElementById('panjang-input-jg').value);
        const lebarJajarGenjang = parseFloat(document.getElementById('lebar-input-jg').value);
        const kelilingJajarGenjang = 2 * (panjangJajarGenjang + lebarJajarGenjang);
     
        document.getElementById('value-panjang-jg').innerText = panjangJajarGenjang;
        document.getElementById('value-lebar-jg').innerText = lebarJajarGenjang;
        document.getElementById('value-keliling-jajar-genjang').innerText = kelilingJajarGenjang.toFixed(2);
        document.getElementById('result-keliling-jajar-genjang').style.display = 'block';
       
    });


    //reset keliling jajar genjang
    document.getElementById('resetKelilingJajarGenjang').addEventListener('click', function () {
        document.getElementById('kelilingJajarGenjang').reset();
        document.getElementById('result-keliling-jajar-genjang').style.display = 'none';
    });


});

function jajarGenjangActive() {
    document.getElementById('jajar-genjang').style.zIndex = '2';
    document.getElementById('segitiga').style.zIndex = '1';
}

function segitigaActive() {
    document.getElementById('segitiga').style.zIndex = '2';
    document.getElementById('jajar-genjang').style.zIndex = '1';

}