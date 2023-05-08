import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _type: EnergyType;
  private static _countMage = 0;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Mage._countMage += 1;
  }

  get energyType():EnergyType {
    return this._type;
  }

  public static createdArchetypeInstances(): number {
    return Mage._countMage;
  }
}

export default Mage;