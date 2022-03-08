var demo = document.getElementById('demo');

function moltiplica() {
    var num1 = document.getElementById('first').value;
    var num2 = document.getElementById('second').value;

    var risultato = num1 * num2;

    demo.innerHTML = risultato;
}
function dividi() {
    var num1 = document.getElementById('first').value;
    var num2 = document.getElementById('second').value;

    var risultato = (num1) / (num2)

    demo.innerHTML =  risultato;
}