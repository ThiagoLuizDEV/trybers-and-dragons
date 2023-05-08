import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static _countElf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._countElf += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._countElf;
  }
}

export default Elf;