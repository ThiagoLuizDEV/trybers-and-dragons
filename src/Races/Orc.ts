import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static _countOrc = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._countOrc += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  public static createdRacesInstances(): number {
    return Orc._countOrc;
  }
}

export default Orc;