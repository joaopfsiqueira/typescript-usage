const caracteristicas = ['Motor Zetec 1.8', 2020];

// sem destructuring
const motor = caracteristicas[0];
const ano = caracteristicas[1];
console.log(motor, ano);

//com destructuring
const caracteristicas1 = ['Motor Zetec 2.0', 2021];
const [motor1, ano1] = caracteristicas1;
console.log(motor1, ano1);

// Objetos
const item = {
  name: 'ssd',
  storageSpace: '240 gb',
  price: '2.00',
};

// sem destructuring
const nomeItem = item.name;
const storageSpace = item.storageSpace;
const price = item.price;

console.log(nomeItem, storageSpace, price);

// com destructuring

const item2 = {
  name2: 'ssd nvme',
  storageSpace2: '500 gb',
  price2: '500.00',
};

const { name2, storageSpace2, price2 } = item2;
console.log(name2, storageSpace2, price2);

//podemos utilizar ALIAS para renomear as propriedades.
const item3 = {
  name3: 'placa mae',
  storageSpace3: '0',
  price3: '1000.00',
};

const { name3: n, storageSpace3: sp, price3: p } = item3;
console.log(n, sp, p);
