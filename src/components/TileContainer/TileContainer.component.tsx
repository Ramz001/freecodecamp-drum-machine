import Tile from "../Tile/Tile.component";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { drumMachineMode } from "../../features/drum-machine/drum-machine.types";
import { useEffect, useCallback } from "react";
import {
  setDisplay,
  setKeyClicked,
} from "../../features/drum-machine/drum-machine.slice";
import { tileType } from "../../features/drum-machine/drum-machine.types";

const TileContainer = () => {
  const dispatch = useAppDispatch();
  const { mode, power, volume, heaterSoundBank, pianoSoundBank } =
    useAppSelector((store) => store.drumMachine);

  const handleClick = useCallback(
    (src: string) => {
      const audio = new Audio(src);
      audio.currentTime = 0;
      audio.volume = volume;
      power && audio.play();
      if (mode === drumMachineMode.heater) {
        heaterSoundBank
          .filter((sound) => sound.src === src)
          .map((sound: tileType) => dispatch(setDisplay(sound.keyDisplay)));
      }
      if (mode === drumMachineMode.piano) {
        pianoSoundBank
          .filter((sound) => sound.src === src)
          .map((sound: tileType) => dispatch(setDisplay(sound.keyDisplay)));
      }
    },
    [dispatch, mode, power, volume, heaterSoundBank, pianoSoundBank]
  );

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      const currentKey = e.key;
      if (mode === drumMachineMode.piano) {
        pianoSoundBank
          .filter((sound) => sound.keyChar === currentKey.toUpperCase())
          .map((sound) => handleClick(sound.src));
      }
      if (mode === drumMachineMode.heater) {
        heaterSoundBank
          .filter((sound) => sound.keyChar === currentKey.toUpperCase())
          .map((sound) => handleClick(sound.src));
      }
      dispatch(setKeyClicked(currentKey));
      const keyClickedDelay = setTimeout(
        () => dispatch(setKeyClicked(currentKey)),
        350
      );
      return () => clearTimeout(keyClickedDelay);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mode, power, handleClick, heaterSoundBank, pianoSoundBank, dispatch]);

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2">
      {mode === drumMachineMode.heater &&
        heaterSoundBank.map((sound) => (
          <Tile handleClick={handleClick} tile={sound} key={sound.id} />
        ))}
      {mode === drumMachineMode.piano &&
        pianoSoundBank.map((sound) => (
          <Tile handleClick={handleClick} tile={sound} key={sound.id} />
        ))}
    </div>
  );
};

export default TileContainer;
