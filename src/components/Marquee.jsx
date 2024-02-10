import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className="w-full py-10  bg-[#004D43] overflow-hidden rounded-t-3xl "
    >
      <div className="text  border-t-2 my-10 border border-x-0 border-b-2 border-zinc-300  flex whitespace-nowrap ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 6, repeat: Infinity }}
          className="text-[12vw] leading-none font-['Founders Grotesk X Condensed'] font-bold uppercase pt-10 pr-10 "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 6, repeat: Infinity }}
          className="text-[12vw] leading-none font-['Founders Grotesk X Condensed'] font-bold uppercase pt-10 pr-10 "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 6, repeat: Infinity }}
          className="text-[12vw] leading-none font-['Founders Grotesk X Condensed'] font-bold uppercase pt-10 pr-10 "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
