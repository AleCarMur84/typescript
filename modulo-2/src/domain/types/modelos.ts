export interface Estudiante {
  readonly id: string;
  nombre: string;
  email: string;
}

export interface Asignatura {
  readonly id: string;
  nombre: string;
  creditos: number;
}

// Unión discriminada
export interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivo: string;
}

export interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;
}

export type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;

  export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas`;

    case "SUSPENDIDA":
      return `Matrícula suspendida por: ${estado.motivo}`;

    case "FINALIZADA":
      return `Matrícula finalizada con nota media: ${estado.notaMedia}`;

    default:
      const comprobacion: never = estado;
      return comprobacion;
  }
}