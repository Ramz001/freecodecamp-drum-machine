import { createSlice } from "@reduxjs/toolkit";
import { DrumMachineMode, drumMachineTypes } from "./drum-machine.types";
import {
  togglePowerReducer,
  setDisplayReducer,
  toggleAudioModeReducer,
  setVolumeReducer
} from "./drum-machine.reducers";

const initialState: drumMachineTypes = {
  mode: DrumMachineMode.heater,
  volume: 1,
  power: true,
  display: "",
};

const drumMachine = createSlice({
  name: "drum machine",
  initialState,
  reducers: {
    togglePower: togglePowerReducer,
    toggleAudioMode: toggleAudioModeReducer,
    setDisplay: setDisplayReducer,
    setVolume: setVolumeReducer
  },
});

export const { togglePower, setDisplay, toggleAudioMode, setVolume } = drumMachine.actions;

export default drumMachine.reducer;
