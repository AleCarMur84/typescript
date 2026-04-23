"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_1 = require("./math-utils");
const datos = [10, 20, 30, 40, 1000];
console.log("Media:", (0, math_utils_1.calcularMedia)(datos));
console.log("Mediana:", (0, math_utils_1.calcularMediana)(datos));
console.log("Filtrados:", (0, math_utils_1.filtrarAtipicos)(datos, 100));
