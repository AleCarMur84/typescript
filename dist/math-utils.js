"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMedia = calcularMedia;
exports.calcularMediana = calcularMediana;
exports.filtrarAtipicos = filtrarAtipicos;
function calcularMedia(array) {
    if (array.length === 0)
        return null;
    const suma = array.reduce((acc, num) => acc + num, 0);
    return suma / array.length;
}
function calcularMediana(array) {
    if (array.length === 0)
        return null;
    const ordenado = [...array].sort((a, b) => a - b);
    const mitad = Math.floor(ordenado.length / 2);
    if (ordenado.length % 2 === 0) {
        return (ordenado[mitad - 1] + ordenado[mitad]) / 2;
    }
    return ordenado[mitad];
}
function filtrarAtipicos(array, limite) {
    return array.filter((num) => Math.abs(num) <= limite);
}
