import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, heroWords, techMarquee } from '../data/mockData';

/* ==================
   WORD SWAP ANIMATION
   ================== */
const WordSwap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextWord = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroWords.length);
      setIsAnimating(false);
    }, 400);
  }, []); // heroWords is a stable module-level constant

  useEffect(() => {
    const interval = setInterval(nextWord, 3000);
    return () => clearInterval(interval);
  }, [nextWord]);

  const word = heroWords[currentIndex];

  return (
    <span className="inline-block relative">
      <span
        className={`inline-block font-instrument italic transition-all duration-400 ${
          isAnimating
            ? 'opacity-0 blur-[8px] translate-y-1'
            : 'opacity-100 blur-0 translate-y-0'
        }`}
        style={{ transitionProperty: 'opacity, filter, transform' }}
      >
        {word.split('').map((char, charIdx) => (
          <span
            key={`${word}-char-${charIdx}`}
            className="inline-block"
            style={{ transitionDelay: `${charIdx * 25}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};

/* ==================
   TECH MARQUEE
   ================== */
const TechMarquee = () => {
  const doubled = [...techMarquee, ...techMarquee];
  return (
    <div className="marquee-wrapper py-5">
      <div className="marquee-track">
        {doubled.map((tech, idx) => (
          <span
            key={`marquee-${tech}-${idx}`}
            className="inline-flex items-center gap-3 px-6 text-[#F6F3F0]/25 text-[13px] font-inter font-medium whitespace-nowrap tracking-wide"
          >
            <span className="w-[3px] h-[3px] rounded-full bg-[#F6F3F0]/15" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ==================
   HERO BACKGROUND
   ================== */
const HeroBackground = () => (
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 hero-bg-base" />

    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      style={{ opacity: 1 }}
      src="https://customer-assets-wrfwihn1.emergentagent.net/job_ai-engineer-ayush/artifacts/1twr68rh_bg-video.mp4"
    />

    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(to bottom, rgba(10,11,13,0.15) 0%, rgba(10,11,13,0.10) 40%, rgba(10,11,13,0.15) 70%, rgba(10,11,13,0.60) 100%)',
      }}
    />

    <div className="absolute inset-0 hero-glow-primary" />
    <div className="absolute inset-0 hero-glow-secondary" />
    <div className="absolute inset-0 hero-grid-pattern" />

    <div
      className="absolute"
      style={{
        top: '20%',
        left: '5%',
        width: '55%',
        height: '45%',
        background: 'radial-gradient(ellipse at center, rgba(12, 13, 14, 0.5) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }}
    />
  </div>
);

/* ==================
   ARROW SVG ICON
   ================== */
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5595 5.37797L9.93453 2.75297C9.85244 2.67088 9.7411 2.62476 9.625 2.62476C9.5089 2.62476 9.39756 2.67088 9.31547 2.75297C9.23338 2.83506 9.18726 2.9464 9.18726 3.0625C9.18726 3.1786 9.23338 3.28994 9.31547 3.37203L11.194 5.25H7C5.49207 5.25159 4.04636 5.85132 2.98009 6.91759C1.91382 7.98386 1.31409 9.42957 1.3125 10.9375C1.3125 11.0535 1.35859 11.1648 1.44064 11.2469C1.52269 11.3289 1.63397 11.375 1.75 11.375C1.86603 11.375 1.97731 11.3289 2.05936 11.2469C2.14141 11.1648 2.1875 11.0535 2.1875 10.9375C2.18895 9.66159 2.69644 8.43835 3.59865 7.53615C4.50085 6.63394 5.72409 6.12645 7 6.125H11.194L9.31547 8.00297C9.23338 8.08506 9.18726 8.1964 9.18726 8.3125C9.18726 8.4286 9.23338 8.53994 9.31547 8.62203C9.39756 8.70412 9.5089 8.75024 9.625 8.75024C9.7411 8.75024 9.85244 8.70412 9.93453 8.62203L12.5595 5.99703C12.6002 5.9564 12.6325 5.90815 12.6545 5.85504C12.6765 5.80193 12.6878 5.74499 12.6878 5.6875C12.6878 5.63001 12.6765 5.57308 12.6545 5.51996C12.6325 5.46685 12.6002 5.4186 12.5595 5.37797Z" fill="#0c0d0e"/>
  </svg>
);

/* ==================
   HERO CONTENT
   ================== */
const HeroContent = () => (
  <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1200px] w-full mx-auto px-8 md:px-12 pt-[80px]">
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-5"
    >
      <span className="inline-block px-3.5 py-[7px] text-[10px] font-inter font-medium tracking-[0.16em] uppercase text-[#F6F3F0]/55 border border-white/[0.07] rounded-[2px] bg-white/[0.015]">
        // Open to Opportunities
      </span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.35 }}
      className="max-w-[820px]"
    >
      <h1
        className="font-instrument font-bold text-[#F6F3F0]"
        style={{
          fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
          lineHeight: 1.0,
          letterSpacing: '-0.025em',
        }}
      >
        Building Super{' '}
        <WordSwap />{' '}
        AI
      </h1>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="max-w-[480px] mt-5"
    >
      <p className="text-[#F6F3F0]/50 font-inter text-[15px] leading-[1.65]">
        {personalInfo.subtitle}
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-7"
    >
      <a
        href={personalInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="deccan-btn"
      >
        View GitHub
        <ArrowIcon />
      </a>
    </motion.div>
  </div>
);

/* ==================
   HERO BOTTOM STRIP
   ================== */
const HeroBottomStrip = () => (
  <div className="relative z-10">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.0 }}
      className="max-w-[1200px] mx-auto px-8 md:px-12 pb-6"
    >
      <span className="slash-heading">
        // Specializing in GenAI, LLMs & Agentic AI
      </span>
    </motion.div>
    <div className="border-t border-white/[0.04]">
      <TechMarquee />
    </div>
  </div>
);

/* ==================
   HERO SECTION
   ================== */
const Hero = () => (
  <section className="relative min-h-screen flex flex-col overflow-hidden" id="hero">
    <HeroBackground />
    <HeroContent />
    <HeroBottomStrip />
    <div className="absolute bottom-0 left-0 right-0 h-16 hero-bottom-fade z-[3] pointer-events-none" />
  </section>
);

export default Hero;
