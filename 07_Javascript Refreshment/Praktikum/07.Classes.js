class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Saya ${this.name}, usia ${this.age} tahun.`);
  }
}

const person1 = new Person("Jinwoo", 25);
const person2 = new Person("Asta", 17);

person1.introduce(); //Output = Saya Jinwoo, usia 25 tahun.
person2.introduce(); //Output = Saya Asta, usia 17 tahun.
