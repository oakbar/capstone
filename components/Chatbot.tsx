'use client'
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const DisappearingFeatures = () => {
  return (
    <>
      <div className="relative h-fit bg-red-50">
        <Features />
      </div>

      <div className="h-[50vh] bg-white" />
    </>
  );
};

const Features = () => {
  return (
    <section id = "chatbot">
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
    </section>
  );
};

const Copy = () => {
  return (
    <div className="flex h-fit w-full flex-col justify-center py-12 md:top-0 md:h-fit">
      <span className="w-fit rounded-full bg-red-500 px-4 py-2 text-sm uppercase text-white">
        Generative AI in Action
      </span>
      <h2 className="mb-4 mt-2 text-5xl font-medium text-red-500 leading-tight">
        Solve your problems with our new chatbot.
      </h2>
      <p className="text-lg text-indigo-950">
        Lorem ipsum dolor sit amet consectetur. Dolor quis a leo lobortis orci
        tortor eget. Enim proin aliquam nulla a lacus pellentesque quam in. Nec
        vel vel nulla nunc vel in molestie proin convallis. Leo et vulputate
        tincidunt justo a varius et elementum.
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">
      <Gradient />

      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={4}
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={4}
        />
      </div>

      <Buffer />
    </div>
  );
};

const CarouselItem = ({
  scrollYProgress,
  position,
  numItems,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-neutral-900"
    >
      <span className="text-lg text-neutral-600">Feature demo here</span>
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-12 w-full bg-gradient-to-b from-indigo-50 to-indigo-50/0 md:block" />
);

const Buffer = () => <div className="h-12 w-full md:h-12" />;
export default Features;