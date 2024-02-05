import { FC } from "react";
import { tileType } from "../../features/drum-machine/drum-machine.types";
import { motion } from "framer-motion";

type TileTypes = {
  key: string;
  tile: tileType;
  handleClick: (src: string) => void;
};

const Tile: FC<TileTypes> = ({ tile, handleClick }) => {
  const { src, keyChar, clicked } = tile;

  const buttonHoverAnimations = {
    scale: 1.05,
    backgroundColor: "rgb(250 204 21)",
    color: "rgb(2 6 23)",
  };
  const buttonPassiveAnimations = {
    color: "rgb(226 232 240)",
    backgroundColor: "rgb(17 24 39)",
  };

  return (
    <motion.button
      className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 2xl:w-40 2xl:h-40 
      text-3xl font-semibold rounded-lg"
      onClick={() => handleClick(src)}
      whileHover={buttonHoverAnimations}
      whileTap={buttonHoverAnimations}
      animate={clicked ? buttonHoverAnimations : buttonPassiveAnimations}
    >
      {keyChar}
    </motion.button>
  );
};

export default Tile;
