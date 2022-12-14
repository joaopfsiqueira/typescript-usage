// Rest & Spread

const numbers = [1, 2, 3, 4];
console.log(Math.max(...numbers));

// mas o que o spread operator agrega? Bom, sem ele ficaria dessa forma:
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]));

// então, basicamente ele instância cada elemento do array e passa como parâmetro como da forma acima, só que vem mais clean!
