import React, { useState } from "react";
import { questions } from "../data/faqQuestions";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="w-full px-5 md:px-20 py-10 font-ubuntu">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ amount: 0.3, once: true }}
        className="w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-full space-y-2 mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-center">
            Frequently Asked Questions
          </h1>
          <span className="text-sm md:text-base text-gray-500 text-center">
            Answers to our most frequently asked questions are just one click
            away.
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: item.id * 0.1 },
              }}
              viewport={{ amount: 0.5, once: true }}
              className="bg-white rounded-lg shadow-md p-5 cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => toggleQuestion(item.id)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-800">
                  {item.question}
                </h2>
                <motion.span
                  animate={{ rotate: openQuestion === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-bold text-gray-500"
                >
                  &#9660;
                </motion.span>
              </div>

              <AnimatePresence>
                {openQuestion === item.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 text-gray-600 text-sm md:text-base"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;
