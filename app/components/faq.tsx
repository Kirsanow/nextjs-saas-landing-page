"use client";
import React, { useState } from "react";
import TestimonialSingle from "./testimonial-single";

const faqData = [
  {
    question: "What is QuillMinds?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          QuillMinds is an AI-powered platform designed to assist teachers with
          lesson planning and educational content creation. Our goal is to save
          educators time and enhance the quality of their teaching materials.
        </p>
      </div>
    ),
  },
  {
    question: "How does the free plan work?",
    answer:
      "Our free plan offers 50 credits for AI-powered content generation. This allows you to explore QuillMinds' capabilities and create several lesson plans or educational resources without any cost.",
  },
  {
    question: "What features are included in the subscription plan?",
    answer:
      "The subscription plan offers unlimited AI-powered content generation, advanced customization options, priority support, and access to premium educational resources and templates.",
  },
  {
    question: "Can I try QuillMinds before subscribing?",
    answer:
      "Absolutely! You can start with our free plan, which includes 50 credits for content generation. This allows you to experience the platform's capabilities before deciding to subscribe.",
  },
  {
    question: "How does AI assist in lesson planning?",
    answer:
      "Our AI analyzes educational standards, best teaching practices, and your input to generate comprehensive lesson plans, activities, and assessments tailored to your specific needs and teaching style.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take data security very seriously. All user data is encrypted, and we adhere to strict privacy policies to ensure your information and created content remain confidential.",
  },
  {
    question: "Can I customize the AI-generated content?",
    answer:
      "Absolutely! While our AI provides a strong foundation, you have full control to edit, customize, and refine any generated content to perfectly match your teaching needs and style.",
  },
  {
    question: "What subjects and grade levels does QuillMinds support?",
    answer:
      "QuillMinds supports a wide range of subjects and grade levels, from elementary to high school. Our AI is continuously updated to align with current educational standards across various disciplines.",
  },
  {
    question: "How often is new content added?",
    answer:
      "We regularly update our content library and AI models to ensure you have access to the latest educational resources and teaching methodologies. Subscribers receive notifications about new features and content.",
  },
  {
    question: "Can I collaborate with other teachers on QuillMinds?",
    answer:
      "Yes, our platform includes collaboration features that allow you to share and co-edit lesson plans with colleagues, fostering a community of educators and enabling the exchange of ideas.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <li>
      <button
        className="relative flex w-full items-center gap-2 border-t border-slate-200 py-5 text-left text-base font-semibold md:text-lg"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="flex-1 text-slate-800">{question}</span>
        <svg
          className={`ml-auto h-4 w-4 flex-shrink-0 fill-current transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 12L2 6h12l-6 6z" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-5 leading-relaxed text-slate-600">
          {typeof answer === "string" ? <p>{answer}</p> : answer}
        </div>
      </div>
    </li>
  );
};

export default function FAQ({ config }: { config?: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50" id="faq">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex basis-1/2 flex-col text-left">
            <p className="mb-4 inline-block font-bold text-blue-500">FAQ</p>
            <p className="text-3xl font-extrabold text-slate-800 md:text-4xl">
              Frequently Asked Questions
            </p>
          </div>
          <ul className="basis-1/2">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </ul>
        </div>
        <TestimonialSingle
          testimonial={{
            name: "Emily Thompson",
            content:
              "QuillMinds has transformed my teaching experience. The AI-powered lesson plans are not only time-saving but also incredibly creative and engaging for my students.",
            schoolName: "Westfield High School",
            image: "https://api.dicebear.com/6.x/avataaars/svg?seed=Emily",
          }}
        />
      </div>
    </section>
  );
}
