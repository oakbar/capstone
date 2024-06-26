'use client'
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useState } from "react";

 
const TabsFAQ = () => {
  const [selected, setSelected] = useState(TABS[0]);
 
  return (
    <div className="overflow-hidden bg-neutral-950 px-4 py-12 text-slate-50">
      <Heading />
      <Tabs selected={selected} setSelected={setSelected} />
      <Questions selected={selected} />
      </div>
  );
};
 
const Heading = () => {
    return (
      <>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <span className="mb-8 bg-gradient-to-r from-red-400 to-red-700 bg-clip-text font-medium text-transparent">
            More about our product
          </span>
          <span className="mb-8 text-4xl font-bold">Frequently Asked Questions</span>
        </div>
  
        <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-red-600/20 to-red-600/20 blur-3xl" />
      </>
    );
  };
 
const Tabs = ({ selected, setSelected }) => {
  return (
    <section id ="faq">
    <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
      {TABS.map((tab) => (
        <button
          onClick={() => setSelected(tab)}
          className={`relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 ${
            selected === tab
              ? "border-red-600 text-slate-50"
              : "border-slate-600 bg-transparent text-slate-400"
          }`}
          key={tab}
        >
          <span className="relative z-10">{tab}</span>
          <AnimatePresence>
            {selected === tab && (
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 0.5,
                  ease: "backIn",
                }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-red-600 to-red-400"
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
    </section>
  );
};
 
const Questions = ({ selected }) => {
  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <AnimatePresence mode="wait">
        {Object.entries(QUESTIONS).map(([tab, questions]) => {
          return selected === tab ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: "backIn",
              }}
              className="space-y-4"
              key={tab}
            >
              {questions.map((q, idx) => (
                <Question key={idx} {...q} />
              ))}
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </div>
  );
};
 
const Question = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
 
  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className={`rounded-xl border-[1px] border-slate-700 px-4 transition-colors ${
        open ? "bg-neutral-800" : "bg-neutral-900"
      }`}
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-4"
      >
        <span
          className={`text-left text-lg font-medium transition-colors ${
            open ? "text-slate-50" : "text-slate-400"
          }`}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: {
              rotate: "45deg",
            },
            closed: {
              rotate: "0deg",
            },
          }}
        >
          <FiPlus
            className={`text-2xl transition-colors ${
              open ? "text-slate-50" : "text-slate-400"
            }`}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-400"
      >
        <p>{answer}</p>
      </motion.div>
    </motion.div>
  );
};

export default TabsFAQ;
 
const TABS = ["Chatbot", "Documentation", "Support"];
 
const QUESTIONS = {
  "Chatbot": [
    {
      question: "How do I access the chatbot?",
      answer:
        "To access the chatbot, simply look for the chatbot page in the navigation bar.",
    },
    {
      question: "Why is the chatbot giving me inaccurate results?",
      answer:
        "The chatbot is not always accurate. If you have trouble getting your questions answered, ask your team for help.",
    },
    {
      question: "What are some tips to get better prompts?",
      answer:
        "Be more specific with your inquiries. Since the chatbot is built upon company data, it is familiar with our information and commonly asked questions.",
    },
    {
      question: "How do I report problems and concerns with our chatbot?",
      answer:
        "If there are any concerns regarding the answers returned by the chatbot, send an inquiry to the AI/ML team.",
    },
  ],
  "Documentation": [
    {
      question: "Blank Text",
      answer:
        "Blank Text",
    },
    {
      question: "Blank Text",
      answer:
        "Blank Text",
    },
    {
      question: "Blank Text",
      answer:
        "Blank Text",
    },
    {
      question: "Blank Text",
      answer:
        "Blank Text",
    },
  ],
  "Support": [
    {
      question: "Blank Text",
      answer:
        "Blank Text",
    },
    {
      question: "Blank Text",
      answer:
        "Blank Text",
    },
    {
      question: "Blank Text",
      answer:
        "Blank Text",
    },
    {
      question: "Blank Text",
      answer:
        "Blank Text",
    },
  ],
};