var pais = ["Peru", "Chile", "Bolivia", "Colombia", "Venezuela", "Uruguay"];

pais[0] = "Argentina"

for (i = 0; i < pais.length; i++) {
    document.write(pais[i] + "<br>");
}

document.write("<h2>Arreglo Invertido</h2>");
pais.reverse();//invertir la posicion original
for (i = 0; i < pais.length; i++) {
    document.write(pais[i] + "<br>");
}

document.write("<h2>Arreglo Ordenado</h2>");
pais.sort();//Ordenar el arreglo
for (i = 0; i < pais.length; i++) {
    document.write(pais[i] + "<br>");
}

document.write("<h2>Arreglo Adicionado</h2>");
pais.push("Brasil");
for (i = 0; i < pais.length; i++) {
    document.write(pais[i] + "<br>");
}

document.write("<h2>Eliminacion del primer elemento</h2>");
pais.shift();
for (i = 0; i < pais.length; i++) {
    document.write(pais[i] + "<br>");
}

document.write("<h2>Eliminacion del ultimo elemento</h2>");
pais.pop();
for (i = 0; i < pais.length; i++) {
    document.write(pais[i] + "<br>");
}