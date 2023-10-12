
var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");
//celusius  to fahreheit and kelvin
cel.addEventListener('input' , function(){
    var c = parseFloat(cel.value)
    let f = (c * 9/5) + 32;
    let k= c+273.15;
    if(!Number.isInteger(f)){
        f=f.toFixed(4);
        k=k.toFixed(4);
    }
    fah.value = f;
    kel.value = k;
});
// fahrenheit to celcius and kelvin
fah.addEventListener('input',function(){
    let f = parseFloat(fah.value);
    let c = (f - 32) * 5/9;
    let k= (f - 32) * 5/9 +273.15;
    if(!Number.isInteger(c)){
     c= c.toFixed(4)
     k=k.toFixed(4)
    }
    cel.value = c;
    kel.value = k;
});
//kelvin to celcius and fahrenheit
kel.addEventListener('input',function(){
    let k = parseFloat(kel.value);
    let c = k-273.15;
    let f =  (k - 273.15) * 9/5 + 32;
    if(!Number.isInteger(k)){
     c= c.toFixed(4)
     f=f.toFixed(4)
    }
    cel.value= c;
    fah.value= f;
});
