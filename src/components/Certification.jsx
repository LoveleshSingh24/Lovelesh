import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from './styles';
// import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { certifications } from '../contants'; // Import certifications instead of projects
import { fadeIn, textVariant } from '../utlis/motion';

const CertificationCard = ({ index, name, description, provider, date, tags, image, certification_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(certification_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              {/* <img
                src={github}  // This can be any icon or leave blank if not needed
                className='w-1/2 h-1/2 object-contain'
              /> */}
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          <p className='mt-1 text-secondary text-[12px]'>Provided by: {provider}</p>
          <p className='mt-1 text-secondary text-[12px]'>Date: {date}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Certifications
        </p>
        <h2 className={styles.sectionHeadText}>
          Certifications.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following certifications highlight my learning and expertise across various platforms. Each certification showcases my dedication to continuous learning and technical proficiency, covering diverse technologies and skills.
        </motion.p>
      </div>

      <div className='mt-24 flex flex-wrap gap-7'>
        {certifications.map((certification, index) => (
          <CertificationCard
            key={`certification-${index}`}
            index={index}
            {...certification}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certification");
