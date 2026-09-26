import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/mockData';
import SplitWordHeading from './SplitWordHeading';

const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2996 10.4147C12.2616 10.4782 12.2114 10.5336 12.1519 10.5777C12.0924 10.6218 12.0248 10.6537 11.9529 10.6716C11.881 10.6895 11.8063 10.6931 11.7331 10.682C11.6599 10.671 11.5896 10.6456 11.5262 10.6073L6.75476 7.74352V12.9375C6.75476 13.0867 6.69549 13.2298 6.59 13.3352C6.48452 13.4407 6.34144 13.5 6.19226 13.5C6.04307 13.5 5.9 13.4407 5.79451 13.3352C5.68902 13.2298 5.62976 13.0867 5.62976 12.9375V7.74352L0.856943 10.6073C0.793576 10.6463 0.723119 10.6722 0.649647 10.6838C0.576175 10.6953 0.501148 10.6921 0.428906 10.6745C0.356664 10.6568 0.288642 10.625 0.228775 10.5809C0.168908 10.5367 0.118385 10.4812 0.0801292 10.4174C0.0418731 10.3536 0.0166435 10.2829 0.00590013 10.2093C-0.00484324 10.1357 -0.000886904 10.0607 0.0175398 9.98869C0.0359666 9.91664 0.068498 9.84896 0.113252 9.78956C0.158006 9.73017 0.214094 9.68023 0.278272 9.64266L5.0989 6.75L0.278272 3.85734C0.214094 3.81977 0.158006 3.76983 0.113252 3.71044C0.068498 3.65104 0.0359666 3.58336 0.0175398 3.51131C-0.000886904 3.43926 -0.00484324 3.36427 0.00590013 3.29068C0.0166435 3.21709 0.0418731 3.14636 0.0801292 3.08258C0.118385 3.01881 0.168908 2.96325 0.228775 2.91913C0.288642 2.87501 0.356664 2.84319 0.428906 2.82553C0.501148 2.80787 0.576175 2.80471 0.649647 2.81623C0.723119 2.82775 0.793576 2.85373 0.856943 2.89266L5.62976 5.75648V0.5625C5.62976 0.413316 5.68902 0.270242 5.79451 0.164753C5.9 0.0592633 6.04307 0 6.19226 0C6.34144 0 6.48452 0.0592633 6.59 0.164753C6.69549 0.270242 6.75476 0.413316 6.75476 0.5625V5.75648L11.5276 2.89266C11.5909 2.85373 11.6614 2.82775 11.7349 2.81623C11.8083 2.80471 11.8834 2.80787 11.9556 2.82553C12.0278 2.84319 12.0959 2.87501 12.1557 2.91913C12.2156 2.96325 12.2661 3.01881 12.3044 3.08258C12.3426 3.14636 12.3679 3.21709 12.3786 3.29068C12.3894 3.36427 12.3854 3.43926 12.367 3.51131C12.3485 3.58336 12.316 3.65104 12.2713 3.71044C12.2265 3.76983 12.1704 3.81977 12.1062 3.85734L7.28562 6.75L12.1062 9.64266C12.1697 9.68063 12.225 9.73072 12.269 9.79008C12.3131 9.84944 12.345 9.9169 12.3629 9.9886C12.3809 10.0603 12.3845 10.1348 12.3737 10.2079C12.3628 10.2811 12.3376 10.3513 12.2996 10.4147Z" fill="#9b9c9b"/>
  </svg>
);

const ProjectCard = ({ project, index, isMain = false }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group"
    >
      <div className="deccan-card overflow-hidden h-full">
        <div className="relative h-[220px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-[#08090b]/30 to-transparent" />
          <div className="absolute bottom-4 left-5">
            <span className="slash-heading text-[10px]">
              // {project.date}
            </span>
          </div>
        </div>
        <div className="p-5 pt-4">
          <h3 className="font-instrument text-lg font-semibold text-[#F6F3F0] mb-2 group-hover:text-[#F6F3F0]/90 transition-colors">
            {project.title}
            <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg width="15" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2806 4.71937L14.7806 0.219375C14.6399 0.0786438 14.449 -0.000417709 14.25 -0.000417709C14.051 -0.000417709 13.8601 0.0786438 13.7194 0.219375C13.5786 0.360106 13.4996 0.550977 13.4996 0.75C13.4996 0.949023 13.5786 1.13989 13.7194 1.28063L16.9397 4.5H9.75C7.16498 4.50273 4.68661 5.53084 2.85872 7.35872C1.03084 9.18661 0.00272983 11.665 0 14.25C0 14.4489 0.0790176 14.6397 0.21967 14.7803C0.360322 14.921 0.551088 15 0.75 15C0.948912 15 1.13968 14.921 1.28033 14.7803C1.42098 14.6397 1.5 14.4489 1.5 14.25C1.50248 12.0627 2.37247 9.96575 3.91911 8.41911C5.46575 6.87247 7.56273 6.00248 9.75 6H16.9397L13.7194 9.21937C13.5786 9.36011 13.4996 9.55098 13.4996 9.75C13.4996 9.94902 13.5786 10.1399 13.7194 10.2806C13.8601 10.4214 14.051 10.5004 14.25 10.5004C14.449 10.5004 14.6399 10.4214 14.7806 10.2806L19.2806 5.78063C19.3504 5.71097 19.4057 5.62825 19.4434 5.5372C19.4812 5.44616 19.5006 5.34856 19.5006 5.25C19.5006 5.15144 19.4812 5.05384 19.4434 4.9628C19.4057 4.87175 19.3504 4.78903 19.2806 4.71937Z" fill="#F6F3F0"/>
              </svg>
            </span>
          </h3>
          <p className="text-xs font-inter text-[#F6F3F0]/40 mb-3 font-medium">
            {project.tech}
          </p>
          <p className="text-[#F6F3F0]/55 font-inter text-sm leading-relaxed">
            {project.description}
          </p>
          {isMain && project.highlights && (
            <ul className="mt-4 space-y-2">
              {project.highlights.map((h, i) => (
                <li key={`${project.title}-hl-${i}`} className="flex gap-2">
                  <span className="text-[#9b9c9b] mt-0.5 shrink-0">
                    <StarIcon />
                  </span>
                  <span className="text-[#F6F3F0]/50 font-inter text-xs leading-relaxed">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const gridRef = useRef(null);

  return (
    <section className="deccan-section section-alt-bg" id="projects">
      <div className="container-section">
        <div className="mb-6">
          <span className="slash-heading">// Projects</span>
        </div>

        <SplitWordHeading className="font-instrument text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold text-[#F6F3F0] leading-[1.1] tracking-[-0.02em] mb-4">
          Building real-world AI systems from the ground up
        </SplitWordHeading>

        <div className="flex items-center justify-between mb-8">
          <p className="text-[#F6F3F0]/50 font-inter text-sm max-w-xl leading-relaxed">
            From RAG pipelines and crypto analysis agents to automated document processing — production-grade AI solutions built with modern frameworks.
          </p>
          <a
            href="https://github.com/ayush-aio"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-[#F6F3F0]/50 hover:text-[#F6F3F0] text-sm font-inter transition-colors"
          >
            <img
              loading="lazy"
              src="data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='%239b9c9b' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='7' stroke='%239b9c9b' stroke-width='0.5' fill='none'/%3E%3Cpath d='M4 8L7 11L12 5' stroke='%239b9c9b' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E"
              alt=""
              className="w-4 h-4"
            />
            View All on GitHub
          </a>
        </div>

        <div className="mb-8">
          <svg height="1" viewBox="0 0 1216 1" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
            <path opacity="0.2" d="M0 0.5H1216" stroke="#F6F3F0" strokeDasharray="4 8" />
          </svg>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isMain />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
