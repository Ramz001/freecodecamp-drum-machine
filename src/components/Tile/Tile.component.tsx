import { FC, useEffect, useState } from "react";
import { DrumMachineMode } from "../../features/drum-machine/drum-machine.types";
import { motion } from "framer-motion";

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
  keyClicked: string
};

const Tile: FC<TileTypes> = ({ tile, handleClick, keyClicked }) => {
  const { src, keyChar } = tile;
  const [clicked, setClicked] = useState(false)
  console.log(keyClicked)

  const buttonHoverAnimations = {
    scale: 1.05,
    backgroundColor: "rgb(250 204 21)",
    color: "rgb(2 6 23)",
  }
  const buttonPassiveAnimations = { color: 'rgb(226 232 240)', backgroundColor: 'rgb(17 24 39)'}

  
  useEffect(() => {
    if(keyChar === keyClicked.toUpperCase()){
      setClicked(true)
      setTimeout(() => setClicked(false), 350)
    }
    setTimeout(() => setClicked(false), 1500)

  },[keyClicked, clicked, keyChar])

  return (
    <motion.button
      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-3xl font-semibold rounded-lg"
      onClick={() => handleClick(src)}
      whileHover={buttonHoverAnimations}
      whileTap={buttonHoverAnimations}
      whileFocus={buttonHoverAnimations}
      animate={clicked ? buttonHoverAnimations : buttonPassiveAnimations  }
    >
      {keyChar}
    </motion.button>
  );
};

export default Tile;
