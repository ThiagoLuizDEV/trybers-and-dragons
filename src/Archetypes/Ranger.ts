import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _type: EnergyType;
  private static _countRanger = 0;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Ranger._countRanger += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._countRanger;
  }
}

export default Ranger;