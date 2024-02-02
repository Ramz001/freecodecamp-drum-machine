import {
  heaterSoundBar,
  pianoSoundBar,
} from "../../utils/soundBar/soundBar.utils";
import Tile from "../Tile/Tile.component";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { DrumMachineMode } from "../../features/drum-machine/drum-machine.types";
import { useEffect } from "react";
import { setDisplay } from "../../features/drum-machine/drum-machine.slice";

const TileContainer = () => {
  const dispatch = useAppDispatch();

  const { mode, power, volume } = useAppSelector((store) => store.drumMachine);

  const handleClick = (src: string) => {
    const audio = new Audio(src);
    audio.currentTime = 0;
    audio.volume = volume;
    power && audio.play();
    if (mode === DrumMachineMode.heater) {
      heaterSoundBar.map((sound) => {
        if (sound.src === src) {
          return dispatch(setDisplay(sound.keyDisplay));
        }
      });
    }
    if (mode === DrumMachineMode.piano) {
      pianoSoundBar.map((sound) => {
        if (sound.src === src) {
          return dispatch(setDisplay(sound.keyDisplay));
        }
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      const currentKey = e.key;
      if (mode === DrumMachineMode.piano) {
        pianoSoundBar.map((sound) => {
          if (sound.keyChar === currentKey.toUpperCase()) {
            return handleClick(sound.src);
          }
        });
      }
      if (mode === DrumMachineMode.heater) {
        heaterSoundBar.map((sound) => {
          if (sound.keyChar === currentKey.toUpperCase()) {
            return handleClick(sound.src);
          }
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mode, power, handleClick]);

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2">
      {mode === DrumMachineMode.heater &&
        heaterSoundBar.map((sound) => (
          <Tile handleClick={handleClick} key={sound.id} tile={sound} />
        ))}
      {mode === DrumMachineMode.piano &&
        pianoSoundBar.map((sound) => (
          <Tile handleClick={handleClick} key={sound.id} tile={sound} />
        ))}
    </div>
  );
};

export default TileContainer;
