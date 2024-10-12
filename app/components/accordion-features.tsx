"use client";
import React, { useState } from "react";
import TestimonialSingle from "./testimonial-single";
import feature1 from "../../public/feature_1.gif";
import feature2 from "../../public/feature_2.png";
import feature3 from "../../public/feature_3.gif";

const features = [
  {
    id: 1,
    title: "AI-Powered Lesson Creation",
    description:
      "Say goodbye to hours of planning. Our AI creates engaging lesson plans in minutes, giving you more time to focus on what matters most - your students.",
    additionalInfo: [
      "Save hours of prep time",
      "Get fresh, creative ideas",
      "Customize to your needs",
    ],
    icons: [
      <svg
        key="clock"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-600"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
          clipRule="evenodd"
        />
      </svg>,
      <svg
        key="bulb"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-600"
      >
        <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
        <path
          fillRule="evenodd"
          d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
          clipRule="evenodd"
        />
      </svg>,
      <svg
        key="pencil"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-600"
      >
        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
      </svg>,
    ],
    image: feature1,
  },
  {
    id: 2,
    title: "One-Click Resource Generation",
    description:
      "Need a quiz, worksheet, or study guide? Our AI creates them instantly. Just choose what you need, and it's done - saving you time and boosting your productivity.",
    additionalInfo: [
      "Instant resource creation",
      "Multiple resource types",
      "Perfectly aligned with your lessons",
    ],
    icons: [
      <svg
        key="click"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-600"
      >
        <path
          fillRule="evenodd"
          d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>,
      <svg
        key="resources"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-600"
      >
        <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.684 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
      </svg>,
      <svg
        key="align"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-600"
      >
        <path
          fillRule="evenodd"
          d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
          clipRule="evenodd"
        />
      </svg>,
    ],
    image: feature2,
  },
  {
    id: 3,
    title: "Easy Editing and Sharing",
    description:
      "Tweak AI-generated content to perfection and share it instantly. Edit with ease, export as a polished PDF, and you're ready to teach - it's that simple!",
    additionalInfo: [
      "User-friendly editing",
      "Professional PDF export",
      "Ready to use in class",
    ],
    icons: [
      <svg
        key="edit"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-600"
      >
        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
      </svg>,
      <svg
        key="pdf"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-600"
      >
        <path
          fillRule="evenodd"
          d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
          clipRule="evenodd"
        />
        <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
      </svg>,
      <svg
        key="class"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-600"
      >
        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
        <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
      </svg>,
    ],
    image: feature3,
  },
];

export default function AccordionFeatures({ config }: { config?: any }) {
  const [activeFeature, setActiveFeature] = useState(1);

  return (
    <section
      className="bg-base-100 mx-auto max-w-5xl space-y-24 py-24 md:space-y-32"
      id="features"
    >
      <div className="px-8">
        <h2 className="mb-12 text-4xl font-extrabold tracking-tight text-slate-800 md:mb-24 lg:text-5xl">
          AI-powered lesson preparation <br />
          <span className="relative mt-2 inline-block">
            <span className="absolute inset-0 -rotate-1 transform bg-blue-600"></span>
            <span className="relative z-10 px-2 py-2 text-white">
              made easy
            </span>
          </span>
        </h2>
        <div className="flex flex-col gap-12 md:flex-row md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-24">
            <ul className="w-full">
              {features.map((feature) => (
                <li
                  key={feature.id}
                  className={feature.id !== features.length ? "border-b" : ""}
                >
                  <button
                    className="relative flex w-full items-center gap-2 py-4 text-left text-base font-medium md:text-lg"
                    aria-expanded={activeFeature === feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <span
                      className={`duration-100 ${
                        activeFeature === feature.id
                          ? "font-bold text-blue-600"
                          : ""
                      }`}
                    >
                      {feature.id}.{" "}
                    </span>
                    <span
                      className={`flex-1 text-slate-700 ${
                        activeFeature === feature.id
                          ? "font-bold text-blue-600"
                          : ""
                      }`}
                    >
                      <h3 className="inline">{feature.title}</h3>
                    </span>
                    <span className="ml-auto">
                      <svg
                        className="ml-auto h-[10px] w-[10px] flex-shrink-0 fill-slate-600"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`origin-center transform transition duration-200 ease-out ${
                            activeFeature === feature.id ? "rotate-180" : ""
                          }`}
                        />
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                            activeFeature === feature.id
                              ? "hidden rotate-180"
                              : ""
                          }`}
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden text-slate-700 transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: activeFeature === feature.id ? "1000px" : "0",
                      opacity: activeFeature === feature.id ? 1 : 0,
                    }}
                  >
                    <div className="pb-8">
                      <div className="leading-relaxed text-slate-600">
                        <p>{feature.description}</p>
                      </div>
                      <div className="mt-4 space-y-1.5">
                        {Array.isArray(feature.additionalInfo) ? (
                          feature.additionalInfo.map((info, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1.5 text-sm font-medium text-slate-700"
                            >
                              {feature.icons?.[index]}
                              {info}
                            </div>
                          ))
                        ) : (
                          <div className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                            {feature.icons}
                            {feature.additionalInfo}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="">
              {features.map((feature) => (
                <img
                  key={feature.id}
                  alt={`Feature ${feature.id}: ${feature.title}`}
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className={`w-full rounded-[16px] border bg-slate-50 object-contain object-center transition-opacity duration-300 sm:-m-2 sm:w-[26rem] sm:p-2 ${
                    activeFeature === feature.id
                      ? "opacity-100"
                      : "hidden opacity-0"
                  }`}
                  style={{ color: "transparent" }}
                  src={feature.image?.src || ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <TestimonialSingle
        testimonial={{
          name: "Sarah Johnson",
          content:
            "This AI teaching assistant is a game-changer! It's incredibly intuitive and has saved me hours of lesson planning time. My students are more engaged than ever.",
          schoolName: "Oakridge Elementary",
          image: "https://api.dicebear.com/6.x/avataaars/svg?seed=Sarah",
        }}
      />
    </section>
  );
}
