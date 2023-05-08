import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _type: EnergyType;
  private static _countNecromancer = 0;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Necromancer._countNecromancer += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._countNecromancer;
  }
}

export default Necromancer;