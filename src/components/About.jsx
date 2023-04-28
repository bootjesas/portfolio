import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 250,
          }}
          className='bg-tertiary rounded-[20px] py-5  px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'

          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introductie</p>
        <h3 className={styles.sectionHeadText}>Overzicht</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary tex-[17px] max-w-3x1 leading-[30px]"
      >
    Als ervaren Front-end ontwikkelaar met expertise in JavaScript en frameworks zoals React, help ik graag bij het creëren van efficiënte, schaalbare en gebruiksvriendelijke oplossingen die echte problemen oplossen. Ik heb ook uitgebreide ervaring in het ontwerpen van webapplicaties met behulp van tools zoals Adobe XD en Figma. Ik ben een snelle leerling en werk nauw samen met klanten om hun ideeën tot leven te brengen. Laten we samenwerken om uw visie werkelijkheid te maken!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard 
            key={service.title}
            index={index} {...service}
           />
           )
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
