import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { motion } from "framer-motion";
import {
  togglePower,
  toggleAudioMode,
  setVolume,
  setDisplay,
} from "../../features/drum-machine/drum-machine.slice";
import { drumMachineMode } from "../../features/drum-machine/drum-machine.types";
import { ChangeEvent } from "react";
import DrumIcon from "../../assets/icons/drum-solid.svg";
import PianoIcon from "../../assets/icons/piano.svg";

const Settings = () => {
  const dispatch = useAppDispatch();
  const { display, volume, mode, power } = useAppSelector(
    (store) => store.drumMachine
  );

  const handlePowerBtn = () => {
    dispatch(togglePower());
  };

  const handleAudioModeBtn = () => {
    if (mode === drumMachineMode.heater) {
      dispatch(toggleAudioMode(drumMachineMode.piano));
      dispatch(setDisplay("Piano Kit"));
    }
    if (mode === drumMachineMode.piano) {
      dispatch(toggleAudioMode(drumMachineMode.heater));
      dispatch(setDisplay("Heater Kit"));
    }
  };

  const handleSliderVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const displayValue = Math.floor(Number(value) * 100);

    dispatch(setVolume(Number(value)));
    dispatch(setDisplay(String(displayValue)));

    setTimeout(() => dispatch(setDisplay("")), 2500);
  };

  const switchActiveAnimations = {
    backgroundColor: "rgb(250 204 21)",
    justifyContent: "flex-end",
  };

  const switchPassiveAnimations = {
    backgroundColor: "rgb(2 6 23)",
    justifyContent: "flex-start",
  };

  return (
    <section
      className="bg-gray-900 text-slate-300 rounded-xl flex flex-col xs:w-full
     md:w-72 sm:py-11 lg:min-w-80 2xl:w-[24rem] 2xl:py-[5.7rem] py-8 px-6 gap-4 h-full"
    >
      <motion.div
        className="bg-gray-700 font-semibold rounded-xl h-20 text-2xl capitalize 
        text-slate-100 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {display}
      </motion.div>
      <div className="w-full">
        <label className="text-xl font-normal" htmlFor="volume">
          Volume
        </label>
        <input
          type="range"
          name="volume"
          id="volume"
          value={volume}
          onChange={(e) => handleSliderVolume(e)}
          min={0}
          max={1}
          step={0.01}
          className="w-full accent-yellow-400"
        />
      </div>
      <div>
        <h4 className="text-xl font-normal">Power</h4>
        <motion.div
          className="w-16 h-8 rounded-full p-2 flex cursor-pointer items-center bg-slate-950"
          animate={power ? switchActiveAnimations : switchPassiveAnimations}
          onClick={handlePowerBtn}
        >
          <motion.div
            animate
            className="bg-white w-5 h-5 rounded-full shadow-xl"
          />
        </motion.div>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-xl font-normal">Mode</h4>
        <motion.div
          onClick={handleAudioModeBtn}
          animate={
            mode === drumMachineMode.heater
              ? switchActiveAnimations
              : switchPassiveAnimations
          }
          className="w-16 h-8 rounded-full p-2 flex cursor-pointer items-center"
        >
          <motion.div
            animate
            className="bg-white w-5 h-5 rounded-full shadow-xl flex justify-center items-center"
          >
            {mode === drumMachineMode.heater && (
              <motion.img
                src={DrumIcon}
                alt="drum icon"
                className="w-4 h-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            )}
            {mode === drumMachineMode.piano && (
              <motion.img
                src={PianoIcon}
                alt="piano icon"
                className="w-4 h-4 select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Settings;
