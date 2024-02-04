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
      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-3xl font-semibold rounded-lg"
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
