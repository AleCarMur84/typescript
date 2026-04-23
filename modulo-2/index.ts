type EstadoTarea = "pendiente" | "en_progreso" | "completada";

interface Tarea {
  id: number;
  titulo: string;
  estado: EstadoTarea;
}

const tarea1: Tarea = {
  id: 1,
  titulo: "Estudiar TypeScript",
  estado: "en_progreso"
};

const tarea2: Tarea = {
  id: 2,
  titulo: "Hacer ejercicios",
  estado: "pendiente"
};

console.log(tarea1, tarea2);

function obtenerElemento<T>(array: T[], indice: number): T | null {
  if (indice < 0 || indice >= array.length) return null;
  return array[indice];
}

const numeros = [10, 20, 30];
const textos = ["hola", "mundo"];

console.log(obtenerElemento(numeros, 1));
console.log(obtenerElemento(textos, 0));

type Resultado =
  | { estado: "exito"; data: string }
  | { estado: "error"; mensaje: string };

  function procesarResultado(resultado: Resultado) {
  if (resultado.estado === "exito") {
    console.log("OK:", resultado.data);
  } else {
    console.log("ERROR:", resultado.mensaje);
  }
}

procesarResultado({ estado: "exito", data: "Todo correcto" });
procesarResultado({ estado: "error", mensaje: "Algo falló" });