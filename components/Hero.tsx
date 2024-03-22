'use client'
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Typed from "react-typed";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const ShuffleHero = () => {
  return (
    <section id="home" className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-red-600 font-medium">
          State Farm
        </span>
        <h3 className="text-4xl md:text-5xl font-semibold">
          <Typed
            strings={["Our AI Tools.", "Save Time.", "Better Efficiency.", "New Metrics.", "Like a Good Neighbor."]}
            typeSpeed={80}
            backSpeed={40}
            showCursor={true}
            loop
          />
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        Experience our new AI tools to make your job easier. Our Chatbot will help you with your problems.
        </p>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        Experience a new way for you to evaluate your team and their performance. Get a better idea of how to manage.
        </p>
        <button 
        className="bg-red-600 text-white font-medium py-2 px-4 rounded transition-all hover:bg-stone-950 active:scale-95"
        onClick={() => scrollToSection('product')}
      >
        Get Started
      </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://content.presspage.com/uploads/1441/1920_commercial-desk.png?10000",
  },
  {
    id: 2,
    src: "https://www.cio.com/wp-content/uploads/2023/08/chatbot_ai_machine-learning_emerging-tech-100778305-orig.jpg?quality=50&strip=all",
  },
  {
    id: 3,
    src: "https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-bf96c07fc26040785771044ba8470ff9d73a928c.jpg",
  },
  {
    id: 4,
    src: "https://www.eweek.com/wp-content/uploads/2023/05/top-generative-ai-apps-tools.png",
  },
  {
    id: 5,
    src: "https://www.ccsdifference.com/wp-content/uploads/2022/03/iStock-1203042832.jpg",
  },
  {
    id: 6,
    src: "https://www.brand-innovators.com/wp-content/uploads/2024/01/63e0180c5b20fd21ab9fc5d5_image001-5.png",
  },
  {
    id: 7,
    src: "https://npr.brightspotcdn.com/dims4/default/4693440/2147483647/strip/true/crop/1141x642+0+25/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwglt%2Ffiles%2F201804%2FSF.jpg",
  },
  {
    id: 8,
    src: "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg",
  },
  {
    id: 9,
    src: "https://www.agilitypr.com/wp-content/uploads/2023/01/metrics.jpg",
  },
  {
    id: 10,
    src: "https://dv-website.s3.amazonaws.com/uploads/2022/05/kf_dqmetrics_may22.webp",
  },
  {
    id: 11,
    src: "https://poetsandquants.com/wp-content/uploads/sites/5/2021/12/Rankingsillustration.jpg",
  },
  {
    id: 12,
    src: "https://i.ytimg.com/vi/A3ANa4oaOrU/maxresdefault.jpg",
  },
  {
    id: 13,
    src: "https://www.statefarmarena.com/assets/img/Box-Office-State-Farm-Arena-Exterior-219b0b6c07.jpeg",
  },
  {
    id: 14,
    src: "https://content.presspage.com/uploads/1441/1920_drive-safe-save-160426.png?10000",
  },
  {
    id: 15,
    src: "https://www.statefarm.com/content/dam/sf-library/en-us/secure/legacy/state-farm/about-newsroom.png",
  },
  {
    id: 16,
    src: "https://www.hok.com/wp-content/uploads/2019/05/State-Farm-Arena_Seating-Bowl_1900-1600x1069.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;