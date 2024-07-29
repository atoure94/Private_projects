import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import {bs8} from '../assets';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">

      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
      <div className="-mt-[6rem] flex flex-row items-center">
          <div className="relative">
              <img
                  className="w-[300px] lg:w-[400px] xl:w-[500px] h-auto"
                  src={bs8}
                  alt="Bourama Soumano"
              />
          </div>
          <motion.div variants={textVariant()} className="ml-8">
              <h2 className={styles.sectionHeadText}>A propos.</h2>
              <motion.p variants={fadeIn('', '', 0.1, 1)} className={styles.sectionSubText}>
                  Qui suis-je?
              </motion.p>
              <div className="flex justify-center">
                  <motion.p
                      variants={fadeIn('', '', 0.1, 1)}
                      className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] text-justify"
                  >
                      Né le 24 juin, Bourama Soumano est un communicateur traditionnel originaire du Mali, reconnu pour son rôle dans la préservation et la transmission des traditions orales de sa culture. Après avoir étudié la socio-anthropologie, il s’est engagé activement dans la transmission des histoires, des chants et des danses qui constituent le patrimoine immatériel de sa communauté. Son parcours professionnel est marqué par une profonde implication dans la préservation du patrimoine culturel malien à travers des performances et des enseignements destinés à transmettre les valeurs et les connaissances traditionnelles à la nouvelle génération.
                  </motion.p>
              </div>

          </motion.div>


      </div>
  );
};

export default SectionWrapper(About, 'about');
