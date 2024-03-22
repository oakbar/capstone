'use client'
import { motion } from "framer-motion";
import {
  SiAmazonaws,
  SiNba,
  SiIbm,
  SiVisa,
  SiGoogle,
  SiIheartradio,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiApple
} from "react-icons/si";
import { IconType } from "react-icons";

const DoubleScrollingLogos = () => {
    return (
      <section className="bg-white py-4">
        <div className="flex justify-center overflow-hidden">
          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>
        </div>
        <div className="flex justify-center overflow-hidden mt-25">
          <TranslateWrapper reverse>
            <LogoItemsBottom />
          </TranslateWrapper>
          <TranslateWrapper reverse>
            <LogoItemsBottom />
          </TranslateWrapper>
          <TranslateWrapper reverse>
            <LogoItemsBottom />
          </TranslateWrapper>
        </div>
      </section>
    );
  };

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-black transition-colors"
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiVisa} />
    <LogoItem Icon={SiGoogle} />
    <LogoItem Icon={SiApple} />
    <LogoItem Icon={SiIheartradio} />
    <LogoItem Icon={SiNba} />
    <LogoItem Icon={SiIbm} />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiAmazonaws} />
    <LogoItem Icon={SiNextdotjs} />
    <LogoItem Icon={SiReact} />
    <LogoItem Icon={SiTypescript} />
    <LogoItem Icon={SiTailwindcss} />
    <LogoItem Icon={SiPython } />
  </>
);

export default DoubleScrollingLogos;