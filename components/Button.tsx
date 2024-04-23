import { motion } from "framer-motion";

const AIButtonWrapper = () => {
  return (
    <div className="bg-white min-h-[200px] flex items-center justify-center">
      <AIButton />
    </div>
  );
};

const AIButton = () => {
  return (
    <button className="text-white font-medium px-3 py-2 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95">
      <span className="relative z-10">Try it out</span>
      <motion.div
        initial={{ left: 0 }}
        animate={{ left: "-300%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 4,
          ease: "linear",
        }}
        className="bg-[linear-gradient(to_right,#8f14e6,#e614dc,#e61453,#e68414,#e6e614)] absolute z-0 inset-0 w-[400%]"
      ></motion.div>
    </button>
  );
};

export default AIButtonWrapper;