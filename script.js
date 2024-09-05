function calcular(){
    let p = parseFloat(document.getElementById('peso').value);
    let a = parseFloat(document.getElementById('altura').value);

    let imc = p / (a*a);

    document.getElementById('resultado').innerHTML = imc;


}