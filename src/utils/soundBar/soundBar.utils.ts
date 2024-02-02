import HeaterOne from "../../assets/audio/Heater-1.mp3";
import HeaterTwo from "../../assets/audio/Heater-2.mp3";
import HeaterThree from "../../assets/audio/Heater-3.mp3";
import HeaterFour from "../../assets/audio/Heater-4_1.mp3";
import Clap from "../../assets/audio/clap.mp3";
import OpenHH from "../../assets/audio/open-hh.mp3";
import KickNHat from "../../assets/audio/Kick_n_Hat.mp3";
import Kick from "../../assets/audio/kick.mp3";
import ClosedHH from "../../assets/audio/closed-hh.mp3";

import ChordOne from "../../assets/audio/Chord_1.mp3";
import ChordTwo from "../../assets/audio/Chord_2.mp3";
import ChordThree from "../../assets/audio/Chord_3.mp3";
import Shaker from "../../assets/audio/shaker.mp3";
import OpenHHTwo from "../../assets/audio/open-hh-2.mp3";
import ClosedHHTwo from "../../assets/audio/closed-hh-2.mp3";
import PunchyKick from "../../assets/audio/punchy_kick_1.mp3";
import SideStick from "../../assets/audio/side-stick.mp3";
import Snare from "../../assets/audio/snare.mp3";

import { DrumMachineMode } from "../../features/drum-machine/drum-machine.types";
import { nanoid } from "@reduxjs/toolkit";

export const heaterSoundBar = [
  {
    keyChar: "Q",
    keyCode: 81,
    keyDisplay: "heater 1",
    src: HeaterOne,
    mode: DrumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "W",
    keyCode: 87,
    keyDisplay: "heater 2",
    src: HeaterTwo,
    mode: DrumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "E",
    keyCode: 69,
    keyDisplay: "heater 3",
    src: HeaterThree,
    mode: DrumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "A",
    keyCode: 65,
    keyDisplay: "heater 4",
    src: HeaterFour,
    mode: DrumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "S",
    keyCode: 83,
    keyDisplay: "clap",
    src: Clap,
    mode: DrumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "D",
    keyCode: 68,
    keyDisplay: "open HH",
    src: OpenHH,
    mode: DrumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "Z",
    keyCode: 90,
    keyDisplay: "kick n' hat",
    src: KickNHat,
    mode: DrumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "X",
    keyCode: 88,
    keyDisplay: "kick",
    src: Kick,
    mode: DrumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "C",
    keyCode: 67,
    keyDisplay: "closed HH",
    src: ClosedHH,
    mode: DrumMachineMode.heater,
    id: nanoid(),
  },
];

export const pianoSoundBar = [
  {
    keyChar: "Q",
    keyCode: 81,
    keyDisplay: "chord 1",
    src: ChordOne,
    mode: DrumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "W",
    keyCode: 87,
    keyDisplay: "chord 2",
    src: ChordTwo,
    mode: DrumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "E",
    keyCode: 69,
    keyDisplay: "chord 3",
    src: ChordThree,
    mode: DrumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "A",
    keyCode: 65,
    keyDisplay: "shaker",
    src: Shaker,
    mode: DrumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "S",
    keyCode: 83,
    keyDisplay: "open HH",
    src: OpenHHTwo,
    mode: DrumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "D",
    keyCode: 68,
    keyDisplay: "closed HH",
    src: ClosedHHTwo,
    mode: DrumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "Z",
    keyCode: 90,
    keyDisplay: "punchy kick",
    src: PunchyKick,
    mode: DrumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "X",
    keyCode: 88,
    keyDisplay: "side stick",
    src: SideStick,
    mode: DrumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "C",
    keyCode: 67,
    keyDisplay: "snare",
    src: Snare,
    mode: DrumMachineMode.piano,
    id: nanoid(),
  },
]