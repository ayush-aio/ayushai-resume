import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { experiences } from '../data/mockData';
import SplitWordHeading from './SplitWordHeading';

const StarIcon = () => (
  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2996 10.4147C12.2616 10.4782 12.2114 10.5336 12.1519 10.5777C12.0924 10.6218 12.0248 10.6537 11.9529 10.6716C11.881 10.6895 11.8063 10.6931 11.7331 10.682C11.6599 10.671 11.5896 10.6456 11.5262 10.6073L6.75476 7.74352V12.9375C6.75476 13.0867 6.69549 13.2298 6.59 13.3352C6.48452 13.4407 6.34144 13.5 6.19226 13.5C6.04307 13.5 5.9 13.4407 5.79451 13.3352C5.68902 13.2298 5.62976 13.0867 5.62976 12.9375V7.74352L0.856943 10.6073C0.793576 10.6463 0.723119 10.6722 0.649647 10.6838C0.576175 10.6953 0.501148 10.6921 0.428906 10.6745C0.356664 10.6568 0.288642 10.625 0.228775 10.5809C0.168908 10.5367 0.118385 10.4812 0.0801292 10.4174C0.0418731 10.3536 0.0166435 10.2829 0.00590013 10.2093C-0.00484324 10.1357 -0.000886904 10.0607 0.0175398 9.98869C0.0359666 9.91664 0.068498 9.84896 0.113252 9.78956C0.158006 9.73017 0.214094 9.68023 0.278272 9.64266L5.0989 6.75L0.278272 3.85734C0.214094 3.81977 0.158006 3.76983 0.113252 3.71044C0.068498 3.65104 0.0359666 3.58336 0.0175398 3.51131C-0.000886904 3.43926 -0.00484324 3.36427 0.00590013 3.29068C0.0166435 3.21709 0.0418731 3.14636 0.0801292 3.08258C0.118385 3.01881 0.168908 2.96325 0.228775 2.91913C0.288642 2.87501 0.356664 2.84319 0.428906 2.82553C0.501148 2.80787 0.576175 2.80471 0.649647 2.81623C0.723119 2.82775 0.793576 2.85373 0.856943 2.89266L5.62976 5.75648V0.5625C5.62976 0.413316 5.68902 0.270242 5.79451 0.164753C5.9 0.0592633 6.04307 0 6.19226 0C6.34144 0 6.48452 0.0592633 6.59 0.164753C6.69549 0.270242 6.75476 0.413316 6.75476 0.5625V5.75648L11.5276 2.89266C11.5909 2.85373 11.6614 2.82775 11.7349 2.81623C11.8083 2.80471 11.8834 2.80787 11.9556 2.82553C12.0278 2.84319 12.0959 2.87501 12.1557 2.91913C12.2156 2.96325 12.2661 3.01881 12.3044 3.08258C12.3426 3.14636 12.3679 3.21709 12.3786 3.29068C12.3894 3.36427 12.3854 3.43926 12.367 3.51131C12.3485 3.58336 12.316 3.65104 12.2713 3.71044C12.2265 3.76983 12.1704 3.81977 12.1062 3.85734L7.28562 6.75L12.1062 9.64266C12.1697 9.68063 12.225 9.73072 12.269 9.79008C12.3131 9.84944 12.345 9.9169 12.3629 9.9886C12.3809 10.0603 12.3845 10.1348 12.3737 10.2079C12.3628 10.2811 12.3376 10.3513 12.2996 10.4147Z" fill="#9b9c9b"/>
  </svg>
);

const AchievementItem = ({ text }) => (
  <li className="flex gap-3">
    <span className="text-[#9b9c9b] mt-0.5 shrink-0">
      <StarIcon />
    </span>
    <span className="text-[#F6F3F0]/60 font-inter text-sm leading-relaxed">
      {text}
    </span>
  </li>
);

const ExperienceDetails = ({ exp }) => (
  <div className="flex-1">
    <h3 className="font-instrument text-2xl font-semibold text-[#F6F3F0] mb-1">
      {exp.role}
    </h3>
    <div className="flex items-center gap-2 text-sm font-inter text-[#F6F3F0]/50 mb-2">
      <span>{exp.company}</span>
      <span className="w-1 h-1 rounded-full bg-[#F6F3F0]/30" />
      <span>{exp.location}</span>
    </div>
    <div className="text-xs font-inter text-[#F6F3F0]/40 tracking-wider uppercase mb-6">
      {exp.period}
    </div>
    <p className="text-[#F6F3F0]/60 font-inter text-sm leading-relaxed mb-6">
      {exp.description}
    </p>
    <ul className="space-y-4">
      {exp.achievements.map((achievement, i) => (
        <AchievementItem key={`${exp.id}-ach-${i}`} text={achievement} />
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const activeExp = experiences[activeTab];

  return (
    <section className="deccan-section" id="experience" ref={sectionRef}>
      <div className="container-section">
        <div className="mb-6">
          <span className="slash-heading">// Work Experience</span>
        </div>

        <SplitWordHeading className="font-instrument text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold text-[#F6F3F0] leading-[1.1] tracking-[-0.02em] mb-1">
          Design. Build. Deploy.
        </SplitWordHeading>
        <SplitWordHeading className="font-instrument text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold text-[#F6F3F0]/40 leading-[1.1] tracking-[-0.02em] mb-8">
          From ideation to production-ready AI solutions.
        </SplitWordHeading>

        {/* Tab Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-0 bg-white/[0.03] border border-white/[0.05] rounded-[3px] p-1 w-fit mb-8"
        >
          {experiences.map((exp, i) => (
            <React.Fragment key={exp.id}>
              {i > 0 && <div className="w-px h-6 bg-white/[0.08]" />}
              <button
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 text-sm font-inter font-medium transition-all duration-300 rounded-sm ${
                  activeTab === i
                    ? 'bg-white/[0.08] text-[#F6F3F0]'
                    : 'text-[#F6F3F0]/50 hover:text-[#F6F3F0]/70'
                }`}
              >
                <span className="hidden md:inline">{exp.role} @ </span>{exp.company}
              </button>
            </React.Fragment>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 40, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -40, filter: 'blur(4px)' }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row gap-8"
          >
            <ExperienceDetails exp={activeExp} />

            <div className="lg:w-[45%] shrink-0">
              <div className="deccan-card overflow-hidden">
                <img
                  src={activeExp.image}
                  alt={activeExp.company}
                  loading="lazy"
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
