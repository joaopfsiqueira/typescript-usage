// módulos são maneiras de exportar funções ou variáveis para acessar em outros arquivos.
// Na função, devemos colocar um export na frente para exportar, e no arquivo que vai receber devemos utilizar o import.

import { areaRetangulo } from './retangulo';
import { areaCircunferencial } from './circunferencia';

console.log(areaRetangulo(2, 3));
console.log(areaCircunferencial(5));
