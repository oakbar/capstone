'use client'
import Image from 'next/image';
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import { useScroll } from './Scroll';

const FlipNavWrapper = () => {
  return (
    <div className="sticky top-0 bg-gray-50 z-10">
      <FlipNav />
      <div className="h-55" />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="relative mt-[-3px]" style={{ width: '150px', height: '30px' }}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/State_Farm_logo.svg/2560px-State_Farm_logo.svg.png"
        alt="State Farm Logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

const NavLeft = ({ setIsOpen }) => {
  const scrollToSection = useScroll();

  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
      <NavLink text="Home" sectionId="home" scrollToSection={scrollToSection} />
      <NavLink text="Chatbot" sectionId="chatbot" scrollToSection={scrollToSection} />
      <NavLink text="Kanban" sectionId="kanban" scrollToSection={scrollToSection} />
      <NavLink text="Metrics" sectionId="metrics" scrollToSection={scrollToSection} />
      <NavLink text="Analytics" sectionId="analytics" scrollToSection={scrollToSection} />
      <NavLink text="Blog" sectionId="blog" scrollToSection={scrollToSection} />
      <NavLink text="FAQ" sectionId="faq" scrollToSection={scrollToSection} />
    </div>
  );
};

const NavLink = ({ text, sectionId, scrollToSection }) => {
  return (
    <a
      href={`#${sectionId}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(sectionId);
      }}
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-red-600">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  const openSignIn = () => {
    window.open("");
  };

  const openSignUp = () => {
    window.open("https://www.statefarm.com/");
  };

  return (
    <div className="flex items-center gap-4">
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openSignUp}
        className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-600 text-white font-medium rounded-md whitespace-nowrap"
      >
        Log in
      </motion.button>
    </div>
  );
};


const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Home" />
      <MenuLink text="About Us" />
      <MenuLink text="Blog" />
      <MenuLink text="Testimonial" />
      <MenuLink text="FAQ" />
    </motion.div>
  );
};

const MenuLink = ({ text, sectionId }) => {
  const scrollToSection = useScroll();

  return (
    <motion.a
      href={`#${sectionId}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(sectionId);
      }}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default FlipNavWrapper;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};