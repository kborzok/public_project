function FtoC(){
    var far = parseFloat(document.form1.FARENHEIT.value);
    var cels = (far - 32)/1.8;
    document.getElementById('cels').value=cels.toFixed(2);
}
function FtoC1(){
    var far = parseFloat(document.form1.FARENHEIT1.value);
    var cels = (far - 32)/1.8;
    document.getElementById('cels1').value=cels.toFixed(2);
}
function CtoF1(){
    var cels = parseFloat(document.form1.CELSIUS1.value);
    var far = 1.8*cels+32;
    document.getElementById('faren1').value=far.toFixed(2);
}