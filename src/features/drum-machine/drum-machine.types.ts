export type drumMachineTypes = {
  mode: DrumMachineMode
  volume: number
  power: boolean
  display: string
}

export enum DrumMachineMode {
  piano = 'piano',
  heater = 'heater'
}