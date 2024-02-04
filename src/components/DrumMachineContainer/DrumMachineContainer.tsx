import TileContainer from "../TileContainer/TileContainer.component";
import Settings from "../Settings/Settings.component";
import { motion } from "framer-motion";

const DrumMachineContainer = () => {
  return (
    <motion.section
      className="flex md:flex-row flex-col-reverse items-center justify-center 
      rounded-2xl md:gap-x-6  gap-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <TileContainer />
      <Settings />
    </motion.section>
  );
};

export default DrumMachineContainer;
