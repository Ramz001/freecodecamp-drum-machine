import {
  drumMachineMode,
  drumMachineTypes,
} from "./drum-machine.types";
import { PayloadAction } from "@reduxjs/toolkit";

export const togglePowerReducer = (state: drumMachineTypes) => {
  state.power = !state.power;
};

export const toggleAudioModeReducer = (
  state: drumMachineTypes,
  action: PayloadAction<drumMachineMode>
) => {
  state.mode = action.payload;
};

export const setDisplayReducer = (
  state: drumMachineTypes,
  action: PayloadAction<string>
) => {
  state.display = action.payload;
};

export const setVolumeReducer = (
  state: drumMachineTypes,
  action: PayloadAction<number>
) => {
  state.volume = action.payload;
};

export const setKeyClickedReducer = (
  state: drumMachineTypes,
  action: PayloadAction<string>
) => {
  const keyChar = action.payload;
  if (state.mode === drumMachineMode.heater) {
    state.heaterSoundBank
      .filter((sound) => sound.keyChar.toUpperCase() === keyChar.toUpperCase())
      .map((sound) => (sound.clicked = !sound.clicked));
  }
  if (state.mode === drumMachineMode.piano) {
    state.pianoSoundBank
      .filter((sound) => sound.keyChar.toUpperCase() === keyChar.toUpperCase())
      .map((sound) => (sound.clicked = !sound.clicked));
  }
};
