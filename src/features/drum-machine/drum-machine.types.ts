export type tileType = {
  keyChar: string;
  keyDisplay: string;
  src: any;
  mode: drumMachineMode;
  clicked: boolean;
  id: string;
};

export type drumMachineTypes = {
  mode: drumMachineMode;
  volume: number;
  power: boolean;
  display: string;
  heaterSoundBank: tileType[];
  pianoSoundBank: tileType[];
};

export enum drumMachineMode {
  piano = "piano",
  heater = "heater",
}
