import {
  heaterSoundBar,
  pianoSoundBar,
} from "../../utils/soundBar/soundBar.utils";
import Tile from "../Tile/Tile.component";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { DrumMachineMode } from "../../features/drum-machine/drum-machine.types";
import { useEffect, useCallback, useState } from "react";
import { setDisplay } from "../../features/drum-machine/drum-machine.slice";

const TileContainer = () => {
  const dispatch = useAppDispatch();
  const [keyClicked, setKeyClicked] = useState("");
  const { mode, power, volume } = useAppSelector((store) => store.drumMachine);

  const handleClick = useCallback((src: string) => {
    const audio = new Audio(src);
    audio.currentTime = 0;
    audio.volume = volume;
    power && audio.play();
    if (mode === DrumMachineMode.heater) {
      heaterSoundBar
        .filter((sound) => sound.src === src)
        .map((sound: any) => dispatch(setDisplay(sound.keyDisplay)));
    }
    if (mode === DrumMachineMode.piano) {
      pianoSoundBar
        .filter((sound) => sound.src === src)
        .map((sound: any) => dispatch(setDisplay(sound.keyDisplay)));
    }
  },[dispatch, mode, power, volume]);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      const currentKey = e.key;
      if (mode === DrumMachineMode.piano) {
        pianoSoundBar
          .filter((sound) => sound.keyChar === currentKey.toUpperCase())
          .map((sound) => handleClick(sound.src));
        setKeyClicked(currentKey);
      }
      if (mode === DrumMachineMode.heater) {
        heaterSoundBar
          .filter((sound) => sound.keyChar === currentKey.toUpperCase())
          .map((sound) => handleClick(sound.src));
        setKeyClicked(currentKey);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mode, power, handleClick]);

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2">
      {mode === DrumMachineMode.heater &&
        heaterSoundBar.map((sound) => (
          <Tile
            handleClick={handleClick}
            keyClicked={keyClicked}
            key={sound.id}
            tile={sound}
          />
        ))}
      {mode === DrumMachineMode.piano &&
        pianoSoundBar.map((sound) => (
          <Tile
            handleClick={handleClick}
            keyClicked={keyClicked}
            key={sound.id}
            tile={sound}
          />
        ))}
    </div>
  );
};

export default TileContainer;
