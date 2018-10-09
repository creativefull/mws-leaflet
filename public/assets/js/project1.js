function kalkulator() { 
    let angka = document.querySelectorAll('input');
    let result = document.getElementById('hasil');
    let i1= angka[0].value; //angka pertama  
    let i2= angka[1].value; //angka kedua
    if (i1 == '' || i2 == '') {
        result.innerHTML= "0";
    } else {
        result.setAttribute('class', 'animate-count fadeOut')
        setTimeout(() => {
            result.setAttribute('class', 'animate-count fadeIn')
            result.innerHTML= parseInt(i1) + parseInt(i2);
        }, 500);
    }
}

window.onload = () => {
    console.log("Loaded");
    document.querySelectorAll('input')[0].focus();
}
// let tombol = document.querySelector('button'); 
// tombol.addEventListener('click', kalkulator);