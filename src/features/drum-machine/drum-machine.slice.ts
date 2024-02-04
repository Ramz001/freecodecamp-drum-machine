import { createSlice } from "@reduxjs/toolkit";
import { drumMachineMode, drumMachineTypes } from "./drum-machine.types";
import {
  heaterSounds,
  pianoSounds,
} from "../../utils/soundBank/soundBank.utils";
import {
  togglePowerReducer,
  setDisplayReducer,
  toggleAudioModeReducer,
  setVolumeReducer,
  setKeyClickedReducer,
} from "./drum-machine.reducers";

const initialState: drumMachineTypes = {
  mode: drumMachineMode.heater,
  volume: 1,
  power: true,
  display: "",
  heaterSoundBank: heaterSounds,
  pianoSoundBank: pianoSounds,
};

const drumMachine = createSlice({
  name: "drum machine",
  initialState,
  reducers: {
    togglePower: togglePowerReducer,
    toggleAudioMode: toggleAudioModeReducer,
    setDisplay: setDisplayReducer,
    setVolume: setVolumeReducer,
    setKeyClicked: setKeyClickedReducer,
  },
});

export const {
  togglePower,
  setDisplay,
  toggleAudioMode,
  setVolume,
  setKeyClicked,
} = drumMachine.actions;

export default drumMachine.reducer;
