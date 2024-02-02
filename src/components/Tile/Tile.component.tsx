import { FC } from "react";
import { DrumMachineMode } from "../../features/drum-machine/drum-machine.types";
import { motion } from 'framer-motion'

type TileTypes = {
  key: string;
  tile: {
    keyCode: number;
    keyChar: string;
    keyDisplay: string;
    src: any;
    mode: DrumMachineMode;
  };
  handleClick: (e: string) => void;
};

const Tile: FC<TileTypes> = ({ tile, handleClick }) => {
  const { src, keyChar } = tile;

  return (
    <motion.button
      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-3xl font-semibold rounded-lg text-slate-200 
      bg-gray-900 hover:bg-yellow-400 hover:bg-opacity-90 hover:text-slate-950"
      onClick={() => handleClick(src)}
    >
      {keyChar}
    </motion.button>
  );
};

export default Tile;
