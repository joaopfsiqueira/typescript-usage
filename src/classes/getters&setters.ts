class Person {
  // precisa do underline _ antes do idade para não dar conflito no get e no set pelo nome. É muito usado em privates
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(value: number) {
    if (value >= 0 && value < 120) {
      this._idade = value;
    }
  }
}

const person1 = new Person();
person1.idade = 22;

console.log(person1); // 22
