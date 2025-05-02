"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";

const projects = [
  {
    num: "01",
    title: "PanMax",
    description: "A multi-channel inventory platform supporting 50+ online retailers. Designed the backend to handle real-time product syncing, automated stock updates, and scalable API integrations. Integrated blockchain to enhance data integrity and traceability across distributed systems, reducing disputes and improving cross-platform reliability. Achieved ~95% sync accuracy and helped reduce inventory errors by ~40%.",
    href: "https://drive.google.com/file/d/12X6_oFqX0B807z5G6TMdnbuxg-TE8EGn/view?usp=sharing"
  },
  {
    num: "02",
    title: "JustTip",
    description: "Built an innovative auction platform using a bid-fee model inspired by poker dynamics—users pay per bid, not per sale. Designed a pricing algorithm balancing fairness and profitability. Enabled automated payment handling and user management with a secure, scalable backend.",
    href: ""
  },
  {
    num: "03",
    title: "AI Agricultural Robots with Soil Analysis",
    description: "Led a deep learning–driven robotics system to optimize farming. Developed a custom soil database tailored to Korean agriculture and deployed robots using computer vision to automate labor-intensive tasks. Boosted crop yields by 30% through targeted interventions.",
    href: ""
  },
  {
    num: "04",
    title: "Autonomous Drone",
    description: "Built software for an autonomous drone equipped with SLAM, TOF sensors, and AR overlays to assist firefighters during indoor emergencies. The system maps building interiors in real time and visualizes hazardous zones using HoloLens headsets. Implemented edge-computing modules for onboard obstacle avoidance and mapping, improving situational awareness. Enhanced 3D scan accuracy by 30% using multi-pass detection and custom pathfinding (A*, DWA).",
    href: "https://drive.google.com/file/d/11oc9ePYO1MEjaTfp8K43BpbaWTg4bAwH/view?usp=sharing"
  },
  {
    num: "05",
    title: "CLI Vending Machine",
    description: "Engineered a full-stack vending machine system with a command-line interface to simulate real-time purchasing, inventory management, and Stripe-powered credit card processing. Designed and implemented RESTful APIs using Django and MySQL to manage channel-based inventory and track transaction logs. Containerized the project using Docker for consistent deployment; wrote modular CLI scripts for both customer and admin roles",
    href: "https://github.com/jchong990315/Vending_Machine"
  },
  {
    num: "06",
    title: "FIRST Robots",
    description: "Led autonomous & teleop development for FIRST Robotics Team 1405 across 7+ seasons. Implemented PID control, vision tracking, WPILib-based path planning, and modular architecture in Java. Improved autonomous routine stability by 60% and reduced debug time by 50% via command-based refactoring. Mentored 20+ new programmers, collaborated with hardware teams, and contributed to multiple regional wins and innovation awards.",
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