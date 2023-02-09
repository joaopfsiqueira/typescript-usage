// módulos são maneiras de exportar funções ou variáveis para acessar em outros arquivos.

const PI = 3.14;

export function areaCircunferencial(raio: number): number {
  return raio * raio * PI;
}
