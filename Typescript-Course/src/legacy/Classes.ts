/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

  class Coder {

    //Property that won't be initialized on the constructor, but will have further functionality
    secondLang!: string


    constructor(
      public readonly name: string,
      public music: string,
      private age: number,
      protected language: string = 'Typescript'
    ) {
      this.name = name;
      this.music = music;
      this.age = age;
      this.language = language;
    }

    public getAge() {
      return `Hello, i'm ${this.age}`
    }
  }

  const Caio = new Coder('Caio', 'Country', 27)

  console.log(Caio.getAge())
  // console.log(Caio.age)
  // console.log(Caio.language)

  class WebDev extends Coder {
    constructor(
      public computer: string,
      name: string,
      music: string,
      age: number,
    ) {
      super(name, music, age);
      this.computer = computer;
    }

    public getLang() {
      return `I write ${this.language}`
    }
  }

  const Jorge = new WebDev('Linux', 'Jorge', 'Melodic Metal', 10)

  console.log(Jorge.getLang())
  // console.log(Jorge.lang)
  // console.log(Jorge.age)

  ///////////////////////////////////////////////////

  //Interface to a class
  interface Musician {
    name: string
    instrument: string
    play(action: string): string
  }

  class Guitarist implements Musician {

    constructor(public name: string, public instrument: string) {
      this.name = name;
      this.instrument = instrument;
    }

    play(action: string) {
      return `${this.name} ${action} the ${this.instrument}`
    }

  }

  const VanHalen = new Guitarist('Eddie Van Halen', 'guitar')

  console.log(VanHalen.play('strums'))

  //////////////////////////////////////////

  class Peeps {
    static count: number = 0;

    static getCount(): number {
      return Peeps.count
    }

    public id: number

    constructor(public name: string) {
      this.name = name;
      this.id = ++Peeps.count
    }
  }

  const John = new Peeps('John');
  const Steve = new Peeps('Steve');
  const Amy = new Peeps('Amy');

  console.log(Amy.id)
  console.log(Steve.id)
  console.log(John.id)
  console.log(Peeps.count)

  //////////////////////////////////////////////

  // Getters and Setters

  class Bands {
    private dataState: string[]

    constructor() {
      this.dataState = []
    }

    public get data(): string[] {
      return this.dataState
    }

    public set data(value: string[]) {
      if (Array.isArray(value) && value.every(val => typeof val === 'string')) {
        this.dataState = value
        return
      } else throw new Error('Param is not an array of strings')

    }
  }

  const myBands = new Bands();

  myBands.data = ['Linking Park', 'Bon Jovi']

  console.log(myBands.data)

  myBands.data = [...myBands.data, 'Raça Negra']

  console.log(myBands.data)

  // myBands.data = ['Van Halen', 5150]

  console.log(myBands.data)


