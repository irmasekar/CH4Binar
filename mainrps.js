
// array untuk simpan semua elementId user 
const idplayer = ["batuplayer", "kertasplayer", "guntingplayer"];

// array untuk simpan semua elementId com 
const idCom = ["batukomputer", "kertaskomputer", "guntingkomputer"];

function pilihanplayer (parameter) {
    // function untuk update background by user click event parameter
    valueUser = parameter
    document.getElementById(idUsers[parameter]).style.background = "#C4C4C4"
}



function randomPilihan() {
    // function untuk update background com by random function
    valueCom = Math.floor(Math.random() * 3); // valueCom isinya 0, 1 atau 2
    document.getElementById(idCom[valueCom]).style.background = "#C4C4C4"

    return valueCom
}




var cekHasil = function (valueCom, valueUser) {
    // untuk function cekHasil 

    //pilihan player dan com sama, draw
    if (valueUser === valueCom) return 'DRAW';

    // player pilih batu, cek apakah comp pilih gunting?  jika  iya player 1 menang, jika tidak (comp pilih kertas) com menang
    if (valueUser === 0) return (valueCom === 2) ? 'PLAYER 1 WIN' : 'COMP WIN';

    // player pilih kertas, cek apakah comp pilih batu? jika  iya player 1 menang, jika tidak (comp pilih kertas) com menang
    else if (valueUser === 1) return (valueCom === 0) ? 'PLAYER 1 WIN' : 'COMP WIN';

    // player pilih gunting, cek apakah comp pilih kertas? jika iya player 1 menang, jika tidak (comp pilih kertas) com menang
    else if (valueUser === 2) return (valueCom === 1) ? 'PLAYER 1 WIN' : 'COMP WIN';
}