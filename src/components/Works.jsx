import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-black-100 p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div
          className="relative w-full h-[230px]"
        >
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div
            className="absolute inset-0 flex justify-end m-3 card-img_hover"
          >
            <div
              onClick={() => window.open
              (source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div
          className="mt-4 flex flex-wrap gap-2"
        >
          {tags.map((tag) => (
            <p
            key={tag.name}
            className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div 
          className="mt-4 flex justify-center items-center"
        >
          <a 
            className="shadow-md shadow-primary m-4 p-3 bg-tertiary w-[60%] rounded-2xl flex justify-center"
            href={demo_link}
            target='_blank'
          >
            See the project
          </a>
        </div>
      </Tilt>
    </motion.div>
  )
 }

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mijn werk</p>
        <h3 className={styles.sectionHeadText}>Projecten</h3>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
Als designer en codeur ben ik gepassioneerd door het creëren van mooie en functionele digitale ervaringen. Ik nodig je uit om mijn werk te bekijken en te zien hoe ik deze passie tot leven breng. Of je nu op zoek bent naar een op maat gemaakte website, een opvallend of een gebruiksvriendelijke mobiele app, ik heb de vaardigheden en ervaring om je visie werkelijkheid te maken. Bekijk mijn portfolio en neem contact met me op om te bespreken hoe we samen kunnen werken aan jouw project.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
