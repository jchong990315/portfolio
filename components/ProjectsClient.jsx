"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";

const projects = [
  {
    num: "01",
    title: "PanMax",
    description: "Co-founded Panmax, a platform that streamlines multi-channel inventory management for online sellers. The system synchronizes product data across marketplaces, automates stock level updates, and provides analytics to reduce overselling and stockouts. Designed the backend architecture to support scalable syncing, real-time updates, and integrations with platforms like. Panmax helps small-to-medium businesses simplify operations and make smarter supply decisions.",
    href: "https://drive.google.com/file/d/12X6_oFqX0B807z5G6TMdnbuxg-TE8EGn/view?usp=sharing"
  },
  {
    num: "02",
    title: "AI Teeko Player",
    description: "Built an AI agent to play Teeko, a two-player strategy game on a 5×5 board. Used the Minimax algorithm with a depth cutoff and a custom heuristic evaluation function to make strategic decisions during both the drop and move phases. The AI strategically evaluates game positions in both the drop phase and the move phase, detecting win conditions including rows, columns, diagonals, and 2×2 squares.",
    href: "https://github.com/jchong990315/teeko_app"
  },
  {
    num: "03",
    title: "Autonomous Drone",
    description: "Developed software for a lightweight drone equipped with onboard sensors and processing modules to autonomously navigate and map indoor environments during fire emergencies. The goal is to support firefighters by providing real-time 3D data of building interiors, highlighting hazardous zones, and improving situational awareness through augmented reality using HoloLens headsets.",
    href: "https://drive.google.com/file/d/11oc9ePYO1MEjaTfp8K43BpbaWTg4bAwH/view?usp=sharing"
  },
  {
    num: "04",
    title: "FIRST Robots",
    description: "As a core member of Team 1405 – Finney Falcons, I’ve developed autonomous and teleoperated systems for competition robots across multiple seasons. My work includes PID control, vision tracking, autonomous path planning, and integration of WPILib frameworks. I’ve collaborated with mechanical and electrical teams, mentored new programmers, and led the transition to modern command-based architectures.",
    href: "https://www.team1405robotics.com/index.html"
  },
];

import { motion } from "framer-motion";

const ProjectsClient = () => {
  return (
    <section className="min-h0[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {project.num}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </a>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {project.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{project.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsClient;