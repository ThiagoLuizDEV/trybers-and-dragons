import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _type: EnergyType;
  private static _countWarrior = 0;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Warrior._countWarrior += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._countWarrior;
  }
}

export default Warrior;