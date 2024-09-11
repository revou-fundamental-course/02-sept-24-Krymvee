document.addEventListener('DOMContentLoaded', function () {

    //menghilangkan hasil dari penghitungan
    document.getElementById('result-luas-segitiga').style.display = 'none';
    document.getElementById('result-keliling-segitiga').style.display = 'none';
    document.getElementById('result-luas-jajar-genjang').style.display = 'none';
    document.getElementById('result-keliling-jajar-genjang').style.display = 'none';

    //logika menghitung luas segitiga
    document.getElementById('luas-segitiga').addEventListener('submit', function (e) {
        e.preventDefault();

        let alasSegitiga = parseFloat(document.getElementById('alas-input').value);
        let tinggiSegitiga = parseFloat(document.getElementById('tinggi-input').value);

        if (alasSegitiga == ""){
            document.getElementById('alas-input').style.border = "none";
        }
        
        // Menghitung luas
        let luasSegitiga = 0.5 * alasSegitiga * tinggiSegitiga;

        // Menampilkan hasil luas segitiga
        document.getElementById('value-alas-segitiga').innerText = alasSegitiga;
        document.getElementById('value-tinggi-segitiga').innerText = tinggiSegitiga;
        document.getElementById('value-luas-segitiga').innerText = luasSegitiga.toFixed(2);
        document.getElementById('result-luas-segitiga').style.display = 'block';        
    });

    //logika menghitung keliling segitiga
    document.getElementById('keliling-segitiga').addEventListener('submit', function (e) {
        e.preventDefault();

        let sisi1Segitiga = parseFloat(document.getElementById('sisi-input1').value);
        let sisi2Segitiga = parseFloat(document.getElementById('sisi-input2').value);
        let sisi3Segitiga = parseFloat(document.getElementById('sisi-input3').value);

        // Validasi apakah segitiga valid
        if (sisi1Segitiga + sisi2Segitiga <= sisi3Segitiga || sisi1Segitiga + sisi3Segitiga <= sisi2Segitiga || sisi2Segitiga + sisi3Segitiga <= sisi1Segitiga) {
            alert("Sisi-sisi yang dimasukkan tidak dapat membentuk segitiga.");
            return;
        }

        // Menghitung keliling
        let kelilingSegitiga = sisi1Segitiga + sisi2Segitiga + sisi3Segitiga;

        //menampilkan hasil keliling segitiga
        document.getElementById('value-sisi1').innerText = sisi1Segitiga;
        document.getElementById('value-sisi2').innerText = sisi2Segitiga;
        document.getElementById('value-sisi3').innerText = sisi3Segitiga;
        document.getElementById('value-keliling-segitiga').innerText = kelilingSegitiga.toFixed(2);
        document.getElementById('result-keliling-segitiga').style.display = 'block';
       
    });

    //reset luas segitiga
    document.getElementById('reset-luas-segitiga').addEventListener('click', function () {
        document.getElementById('luas-segitiga').reset();
        document.getElementById('result-luas-segitiga').style.display = 'none';
    });


    //reset keliling segitiga
    document.getElementById('reset-keliling-segitiga').addEventListener('click', function () {
        document.getElementById('keliling-segitiga').reset();
        document.getElementById('result-keliling-segitiga').style.display = 'none';
    });

    //luas jajar genjang
    document.getElementById('luas-jajar-genjang').addEventListener('submit', function (e) {
        e.preventDefault();
        let alasJajarGenjang = parseFloat(document.getElementById('alas-input-jg').value);
        let tinggiJajarGenjang = parseFloat(document.getElementById('tinggi-input-jg').value);
        let luasJajarGenjang = alasJajarGenjang * tinggiJajarGenjang;

        //menampilkan hasil luas jajar genjang
        document.getElementById('value-alas-jg').innerText = alasJajarGenjang;
        document.getElementById('value-tinggi-jg').innerText = tinggiJajarGenjang;
        document.getElementById('value-luas-jajar-genjang').innerText = luasJajarGenjang.toFixed(2);
        document.getElementById('result-luas-jajar-genjang').style.display = 'block';
        
    });
    
    //reset luas jajar genjang
    document.getElementById('reset-luas-jajar-genjang').addEventListener('click', function () {
        document.getElementById('luas-jajar-genjang').reset();
        document.getElementById('result-luas-jajar-genjang').style.display = 'none';
    });

    //keliling jajar genjang
    document.getElementById('keliling-jajar-genjang').addEventListener('submit', function (e) {
        e.preventDefault();
        let panjangJajarGenjang = parseFloat(document.getElementById('panjang-input-jg').value);
        let lebarJajarGenjang = parseFloat(document.getElementById('lebar-input-jg').value);
        let kelilingJajarGenjang = 2 * (panjangJajarGenjang + lebarJajarGenjang);
        
        //menampilkan hasil dari keliling jajar genjang
        document.getElementById('value-panjang-jg').innerText = panjangJajarGenjang;
        document.getElementById('value-lebar-jg').innerText = lebarJajarGenjang;
        document.getElementById('value-keliling-jajar-genjang').innerText = kelilingJajarGenjang.toFixed(2);
        document.getElementById('result-keliling-jajar-genjang').style.display = 'block';
       
    });


    //reset keliling jajar genjang
    document.getElementById('reset-keliling-jajar-genjang').addEventListener('click', function () {
        document.getElementById('keliling-jajar-genjang').reset();
        document.getElementById('result-keliling-jajar-genjang').style.display = 'none';
    });


});

//menampilkan halaman jajar genjang
function jajarGenjangActive() {
    document.getElementById('jajar-genjang').style.zIndex = '2';
    document.getElementById('segitiga').style.zIndex = '1';
}

//menampilkan halaman segitiga
function segitigaActive() {
    document.getElementById('segitiga').style.zIndex = '2';
    document.getElementById('jajar-genjang').style.zIndex = '1';

}