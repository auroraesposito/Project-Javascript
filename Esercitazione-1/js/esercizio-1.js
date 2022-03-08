var lato1= 5;
var lato2= 6;
var lato3 = 7;

var p = ((lato1 + lato2 + lato3)/2);
var area = Math.sqrt ((p * (p - lato1) * (p-lato2)* (p-lato3)));

document.write( 'L\'area del triangolo è: ' + area);

