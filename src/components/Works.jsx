// src/components/Works.jsx
import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1.05, speed: 400 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-lg hover:shadow-purple-500/30 transition-all"
      >
        {/* Project Image */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl transform hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-5">
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-lg hover:opacity-90 transition"
          >
            🔗 Explore Case Study
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Our Portfolio</p>
        <h2 className={`${styles.sectionHeadText}`}>What We’ve Built 🚀</h2>
      </motion.div>

      {/* Intro */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          We collaborate with startups, businesses, and creators to bring their
          ideas to life. From mobile apps and web platforms to unique digital
          experiences, our projects reflect our commitment to design,
          technology, and results that matter.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="mt-16 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
