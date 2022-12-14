const caracteristicas = ['Motor Zetec 1.8', 2020];

// sem destructuring
const motor = caracteristicas[0];
const ano = caracteristicas[1];
console.log(motor, ano);

//com destructuring
const caracteristicas1 = ['Motor Zetec 2.0', 2021];
const [motor1, ano1] = caracteristicas1;
console.log(motor1, ano1);
