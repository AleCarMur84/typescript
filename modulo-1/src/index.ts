import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils";

const datos = [10, 20, 30, 40, 1000];

console.log("Media:", calcularMedia(datos));
console.log("Mediana:", calcularMediana(datos));
console.log("Filtrados:", filtrarAtipicos(datos, 100));

let identificador: string = "USR-492";
let iteraciones: number = 10;
let procesoActivo: boolean = true;

let timestamp = new Date().getTime();

let metricas: number[] = [12.4, 8.9, 15.0];
let logs: Array<string> = ["INFO: Inicio", "ERROR: Timeout"];

let coordenadaEspacial: [number, number, number] = [40.4168, -3.7038, 600];

function calcularDesviacionEstandar(datos: number[], media: number): number {
  return 0.5;
}

function registrarEvento(
  mensaje: string,
  nivelError: number = 1,
  metadatos?: unknown
): void {
  console.log(`[Nivel ${nivelError}] ${mensaje}`);
}

interface Configuracion {
  timeout: number;
  reintentos: number;
}

// ❌ MAL (aserción)
const configMal = { timeout: 5000 } as Configuracion;

// ✅ BIEN (declaración)
const configBien: Configuracion = { timeout: 5000, reintentos: 3 };

let estado = "ACTIVO";
const estadoFijo = "ACTIVO";

const permisosMutables = { admin: true, nivel: 1 };

const permisosInmutables = { admin: true, nivel: 1 } as const;