import React, { useState } from "react";
import { questions } from "../data/faqQuestions";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="w-full px-5 md:px-20 py-10 font-ubuntu">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center w-full space-y-2 mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-center">
            Frequently Asked Questions
          </h1>
          <span className="text-sm md:text-base text-gray-500 text-center">
            Answers to our most frequently asked questions are just one click
            away.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-5 cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => toggleQuestion(item.id)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-800">
                  {item.question}
                </h2>
                <span
                  className={`text-xl font-bold text-gray-500 transition-transform duration-300 ${
                    openQuestion === item.id ? "rotate-180" : ""
                  }`}
                >
                  &#9660;
                </span>
              </div>

              {openQuestion === item.id && (
                <p className="mt-3 text-gray-600 text-sm md:text-base">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
