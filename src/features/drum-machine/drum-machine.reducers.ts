import { DrumMachineMode, drumMachineTypes } from "./drum-machine.types";
import { PayloadAction } from "@reduxjs/toolkit";


export const togglePowerReducer = (state: drumMachineTypes) => {
  state.power = !state.power
}

export const toggleAudioModeReducer = (state: drumMachineTypes, action: PayloadAction<DrumMachineMode>) => {
  state.mode = action.payload
}

export const setDisplayReducer = (state: drumMachineTypes, action: PayloadAction<string>) => {
  state.display = action.payload
}

export const setVolumeReducer = (state: drumMachineTypes, action: PayloadAction<number>) => {
  state.volume = action.payload
}
