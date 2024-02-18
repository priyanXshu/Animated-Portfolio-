"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div
        className="h-full overflow-y-scroll no-scrollbar lg:flex"
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-30 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-20 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              <b>PRIYANSHU SINGH</b> <br /> Aspiring front-end developer! <br />
              Final year Computer Science Engineering Student, enthusiast about
              front-end development. Actively seeking opportunities to
              contribute my skills in Full Stack Development.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Proficient in JavaScript, HTML, and CSS, and dedicated to staying
              updated with the latest technologies.
            </span>
            {/* BIOGRAPHY SIGN SVG */}
            <div className="self-end">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="285"
                height="70"
                viewBox="0 0 330 200"
                preserveAspectRatio="xMidYMid meet"
              >
                {" "}
                <g
                  transform="translate(0.000000,330.000000) scale(0.100000,-0.100000)"
                  stroke="black"
                  strokeWidth="2"
                >
                  {" "}
                  <path d="M1800 1951 c0 -12 -5 -31 -11 -42 -8 -16 -13 -18 -25 -8 -8 6 -14 18 -14 25 0 8 -4 14 -10 14 -5 0 -10 -10 -10 -23 0 -13 -6 -31 -13 -41 -13 -17 -15 -17 -37 10 -12 16 -24 25 -27 19 -11 -30 -29 -58 -38 -59 -5 0 -16 20 -24 47 -18 59 -33 61 -25 4 5 -31 1 -53 -10 -76 -19 -35 -36 -36 -51 -3 -14 31 -25 27 -25 -8 0 -37 -27 -52 -46 -26 -16 23 -34 12 -34 -21 0 -25 -1 -25 -19 -9 -19 17 -20 17 -30 -3 -6 -11 -11 -27 -11 -35 0 -22 -12 -20 -33 5 -22 25 -38 21 -55 -14 -10 -20 -10 -32 -2 -47 16 -30 44 -21 50 15 5 27 7 28 17 11 14 -25 29 -14 37 26 6 30 8 31 20 16 20 -28 36 -21 36 14 0 25 3 29 12 20 19 -19 56 -14 63 8 7 22 13 24 33 11 10 -6 10 -10 -2 -21 -9 -7 -13 -17 -10 -22 9 -14 39 17 59 62 16 35 19 37 33 23 14 -14 17 -13 33 6 10 12 19 27 21 33 3 8 11 7 28 -5 26 -18 60 -8 60 18 0 13 3 13 21 3 17 -11 22 -10 35 6 8 11 14 25 14 31 0 7 14 12 30 12 17 0 36 5 43 13 10 10 7 11 -17 6 -20 -5 -34 -2 -47 10 -18 16 -19 16 -19 -5z m-510 -260 c0 -32 -14 -49 -25 -31 -9 15 3 60 15 60 6 0 10 -13 10 -29z" />{" "}
                  <path d="M1874 1884 c-17 -15 -167 -95 -333 -179 -337 -171 -306 -165 -336 -62 -18 63 -34 75 -31 25 1 -23 -4 -33 -16 -36 -14 -3 -18 3 -18 22 0 14 -4 26 -10 26 -16 0 -12 -46 5 -60 8 -7 23 -10 34 -7 14 3 23 -4 35 -30 20 -41 20 -39 -1 -47 -9 -4 -20 -1 -25 6 -5 9 -8 7 -8 -7 0 -11 -10 -25 -23 -31 -48 -23 -252 -127 -256 -130 -2 -2 -2 -7 2 -10 7 -7 54 16 190 90 48 26 87 44 87 39 0 -4 -34 -26 -76 -48 -75 -40 -108 -65 -85 -65 13 0 93 39 101 49 3 4 18 15 33 25 28 17 29 17 48 -3 11 -12 26 -21 33 -21 23 0 48 37 44 65 -4 32 1 35 352 223 223 119 300 166 300 182 0 16 -14 11 -46 -16z m-617 -390 c3 -8 -1 -22 -9 -31 -13 -12 -20 -13 -39 -3 l-23 13 23 18 c28 23 40 24 48 3z" />{" "}
                  <path d="M1072 1758 c-7 -7 -12 -19 -12 -27 0 -11 4 -10 16 5 10 12 14 14 11 4 -2 -8 -13 -19 -25 -25 -27 -12 -28 -25 -2 -25 27 0 55 53 36 69 -9 7 -16 7 -24 -1z" />{" "}
                  <path d="M778 1685 c-42 -61 -42 -65 -7 -187 24 -81 43 -91 33 -18 -6 44 -4 54 14 71 30 27 56 121 44 157 -15 46 -43 39 -84 -23z m66 -23 c-12 -50 -43 -114 -54 -107 -21 13 -11 82 16 114 30 36 47 32 38 -7z" />{" "}
                  <path d="M1069 1653 c-1 -4 0 -17 1 -27 2 -25 -20 -66 -37 -66 -7 0 -18 12 -23 26 -11 27 -30 24 -30 -5 0 -18 -18 -41 -32 -41 -4 0 -8 13 -8 29 0 29 -15 49 -27 37 -4 -3 -5 -31 -4 -61 2 -45 -1 -55 -14 -55 -9 0 -15 -6 -12 -12 7 -22 32 -14 35 10 2 13 11 26 20 29 9 3 27 15 38 25 14 13 24 16 29 9 11 -19 44 -12 60 13 11 17 23 22 38 19 19 -4 20 -3 5 7 -10 6 -18 22 -18 35 0 22 -19 47 -21 28z" />{" "}
                </g>{" "}
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                C++
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                MongoDb
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                Tailwing CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                Chakra UI
              </div>
              <div className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black">
                Socket.io
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIECE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              className=""
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
            >
              {/* EXPERIENCE LIST ITEM*/}
              <div className="flex justify-between h-50 -mb-12">
                {/* LEFT */}
                <div className="w-1/2">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim, praesentium.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-1 text-red-400 text-sm font-semibold">
                    Lorem ipsum dolor sit.
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Lorem, ipsum dolor.
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 h-[240px] flex justify-center">
                  {/* LINE */}
                  <div className="h-100 w-1 bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2"></div>
              </div>
              {/* EXPERIENCE LIST ITEM 2*/}
              <div className="flex justify-between h-50 -mb-12">
                {/* LEFT */}
                <div className="w-1/3 mt-5"></div>
                {/* CENTER */}
                <div className="w-1/3 h-[240px] flex justify-center">
                  {/* LINE */}
                  <div className="h=100 w-1 bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 mt-5">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg">
                    Lorem ipsum dolor sit amet.
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-1 text-red-400 text-sm font-semibold">
                    Lorem, ipsum.
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Lorem, ipsum dolor.
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM 3*/}
              <div className="flex justify-between h-50 -mb-12">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Lorem, ipsum dolor.
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-1 text-red-400 text-sm font-semibold">
                    Lorem ipsum dolor sit amet.
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 h-[240px] flex justify-center">
                  {/* LINE */}
                  <div className="h-100 w-1 bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
              {/* EXPERIENCE LIST ITEM 4*/}
              <div className="flex justify-between h-50 -mb-12">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 h-[240px] flex justify-center">
                  {/* LINE */}
                  <div className="h-100 w-1 bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg">
                    Lorem ipsum dolor sit amet.
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate?
                  </div>
                  {/* JOB DATE */}
                  <div className="p-1 text-red-400 text-sm font-semibold">
                    Lorem, ipsum dolor.
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM 5*/}
              <div className="flex justify-between h-50 -mb-12">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Lorem ipsum dolor sit amet.
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-1 text-red-400 text-sm font-semibold">
                    Lorem ipsum dolor sit.
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="h-100 w-1 bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2 ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
