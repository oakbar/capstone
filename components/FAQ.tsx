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
 
const TABS = ["Chatbot", "Metrics", "Support"];
 
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
  "Metrics": [
    {
      question: "What should I do if my rideshare doesn't arrive on time?",
      answer:
        "If your rideshare is delayed, please contact our support team immediately through the Southwest Airlines app or website. We have a dedicated team ready to assist you and coordinate an alternative solution to ensure you reach the airport on time.",
    },
    {
      question: "How can I report a problem experienced during my rideshare journey?",
      answer:
        "We value your feedback and safety. If you encounter any issues during your rideshare, please report them through the 'Help' section on our website or directly in the Southwest Airlines app. Provide details of your trip, and our support team will address your concerns promptly.",
    },
    {
      question: "Can I request special assistance for my rideshare booking?",
      answer:
        "Yes, Southwest Airlines is committed to accommodating all passengers. For special assistance requests, please contact our customer support prior to booking your rideshare. We will coordinate with our rideshare partners to ensure your specific needs are met.",
    },
    {
      question: "Who do I contact for questions about charges or billing for my rideshare?",
      answer:
        "For any inquiries related to charges or billing for your rideshare service, please reach out to our customer support team through the Southwest Airlines website or the customer service hotline. Provide your trip details, and our team will assist you with a detailed breakdown or any necessary adjustments.",
    },
  ],
  "Support": [
    {
      question: "Can I earn Rapid Rewards points by booking rideshares through Southwest?",
      answer:
        "Absolutely! When you book a rideshare through Southwest Airlines, you earn Rapid Rewards points just like you would with flights. These points can be redeemed for future travel, making each ride with us even more rewarding.",
    },
    {
      question: "How can I use my Rapid Rewards points for booking a rideshare?",
      answer:
        "Rapid Rewards points can be easily applied towards your rideshare bookings. Just select the option to pay with points when booking your rideshare on our website or app. This seamless integration allows you to enjoy more travel experiences on us.",
    },
    {
      question: "Do Rapid Rewards points expire if I don’t use them?",
      answer:
        "No, your points don’t expire. You can accumulate them and use them whenever you’re ready. Whether it’s for flights, hotel stays, or our rideshare service, your points will always be waiting for you.",
    },
    {
      question: "Is there a limit to the number of reward seats I can book with my points?",
      answer:
        "With Southwest Airlines, there are no limits to reward seats. You can use your Rapid Rewards points to book any available seat on any day that ends in “y”, ensuring you have the freedom to travel whenever you want, without blackout dates.",
    },
  ],
};