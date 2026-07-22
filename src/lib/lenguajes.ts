export type Lenguaje = {
  id: string;
  nombre: string;
  extension: string;
  comentario: string;
  judge0Id: number;
};

export const LENGUAJES: Lenguaje[] = [
  { id: 'javascript', nombre: 'JavaScript', extension: 'js', comentario: '//', judge0Id: 102 },
  { id: 'typescript', nombre: 'TypeScript', extension: 'ts', comentario: '//', judge0Id: 74 },
  { id: 'python', nombre: 'Python', extension: 'py', comentario: '#', judge0Id: 109 },
  { id: 'java', nombre: 'Java', extension: 'java', comentario: '//', judge0Id: 91 },
  { id: 'csharp', nombre: 'C#', extension: 'cs', comentario: '//', judge0Id: 51 },
  { id: 'php', nombre: 'PHP', extension: 'php', comentario: '//', judge0Id: 98 },
  { id: 'go', nombre: 'Go', extension: 'go', comentario: '//', judge0Id: 107 },
  { id: 'ruby', nombre: 'Ruby', extension: 'rb', comentario: '#', judge0Id: 72 },
  { id: 'sql', nombre: 'SQL', extension: 'sql', comentario: '--', judge0Id: 82 },
];

const PISTAS: Record<string, string> = {
  python: 'python', django: 'python', flask: 'python', fastapi: 'python', pandas: 'python',
  java: 'java', spring: 'java', springboot: 'java', hibernate: 'java',
  'c#': 'csharp', csharp: 'csharp', '.net': 'csharp', dotnet: 'csharp', aspnet: 'csharp',
  php: 'php', laravel: 'php', symfony: 'php',
  go: 'go', golang: 'go',
  ruby: 'ruby', rails: 'ruby',
  sql: 'sql', postgresql: 'sql', postgres: 'sql', mysql: 'sql', oracle: 'sql',
  typescript: 'typescript', nestjs: 'typescript', angular: 'typescript',
  javascript: 'javascript', js: 'javascript', node: 'javascript', nodejs: 'javascript',
  react: 'javascript', express: 'javascript', vue: 'javascript', svelte: 'javascript',
};

export const LENGUAJE_POR_DEFECTO = LENGUAJES[0];

export function buscarLenguaje(id: string): Lenguaje {
  return LENGUAJES.find((l) => l.id === id) ?? LENGUAJE_POR_DEFECTO;
}

export function detectarLenguaje(tecnologias: string[] = []): Lenguaje {
  for (const tec of tecnologias) {
    const clave = tec.toLowerCase().replace(/[\s._-]/g, '');
    const directo = PISTAS[tec.toLowerCase()] ?? PISTAS[clave];
    if (directo) return buscarLenguaje(directo);
  }
  return LENGUAJE_POR_DEFECTO;
}
