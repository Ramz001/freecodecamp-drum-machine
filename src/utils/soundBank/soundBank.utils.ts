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

import { drumMachineMode } from "../../features/drum-machine/drum-machine.types";
import { nanoid } from "@reduxjs/toolkit";

export const heaterSounds = [
  {
    keyChar: "Q",
    clicked: false,
    keyDisplay: "heater 1",
    src: HeaterOne,
    mode: drumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "W",
    keyDisplay: "heater 2",
    src: HeaterTwo,
    mode: drumMachineMode.heater,
    id: nanoid(),
    clicked: false,
  },
  {
    keyChar: "E",
    clicked: false,
    keyDisplay: "heater 3",
    src: HeaterThree,
    mode: drumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "A",
    clicked: false,
    keyDisplay: "heater 4",
    src: HeaterFour,
    mode: drumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "S",
    clicked: false,
    keyDisplay: "clap",
    src: Clap,
    mode: drumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "D",
    clicked: false,
    keyDisplay: "open HH",
    src: OpenHH,
    mode: drumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "Z",
    clicked: false,
    keyDisplay: "kick n' hat",
    src: KickNHat,
    mode: drumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "X",
    clicked: false,
    keyDisplay: "kick",
    src: Kick,
    mode: drumMachineMode.heater,
    id: nanoid(),
  },
  {
    keyChar: "C",
    clicked: false,
    keyDisplay: "closed HH",
    src: ClosedHH,
    mode: drumMachineMode.heater,
    id: nanoid(),
  },
];

export const pianoSounds = [
  {
    keyChar: "Q",
    clicked: false,

    keyDisplay: "chord 1",
    src: ChordOne,
    mode: drumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "W",
    clicked: false,
    keyDisplay: "chord 2",
    src: ChordTwo,
    mode: drumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "E",
    clicked: false,
    keyDisplay: "chord 3",
    src: ChordThree,
    mode: drumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "A",
    clicked: false,
    keyDisplay: "shaker",
    src: Shaker,
    mode: drumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "S",
    clicked: false,

    keyDisplay: "open HH",
    src: OpenHHTwo,
    mode: drumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "D",
    clicked: false,

    keyDisplay: "closed HH",
    src: ClosedHHTwo,
    mode: drumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "Z",
    clicked: false,

    keyDisplay: "punchy kick",
    src: PunchyKick,
    mode: drumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "X",
    clicked: false,
    keyDisplay: "side stick",
    src: SideStick,
    mode: drumMachineMode.piano,
    id: nanoid(),
  },
  {
    keyChar: "C",
    clicked: false,
    keyDisplay: "snare",
    src: Snare,
    mode: drumMachineMode.piano,
    id: nanoid(),
  },
];
