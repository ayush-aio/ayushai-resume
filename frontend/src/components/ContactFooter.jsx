import React, { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { education, certifications, personalInfo } from '../data/mockData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import SplitWordHeading from './SplitWordHeading';

const ArrowSvg = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5595 5.37797L9.93453 2.75297C9.85244 2.67088 9.7411 2.62476 9.625 2.62476C9.5089 2.62476 9.39756 2.67088 9.31547 2.75297C9.23338 2.83506 9.18726 2.9464 9.18726 3.0625C9.18726 3.1786 9.23338 3.28994 9.31547 3.37203L11.194 5.25H7C5.49207 5.25159 4.04636 5.85132 2.98009 6.91759C1.91382 7.98386 1.31409 9.42957 1.3125 10.9375C1.3125 11.0535 1.35859 11.1648 1.44064 11.2469C1.52269 11.3289 1.63397 11.375 1.75 11.375C1.86603 11.375 1.97731 11.3289 2.05936 11.2469C2.14141 11.1648 2.1875 11.0535 2.1875 10.9375C2.18895 9.66159 2.69644 8.43835 3.59865 7.53615C4.50085 6.63394 5.72409 6.12645 7 6.125H11.194L9.31547 8.00297C9.23338 8.08506 9.18726 8.1964 9.18726 8.3125C9.18726 8.4286 9.23338 8.53994 9.31547 8.62203C9.39756 8.70412 9.5089 8.75024 9.625 8.75024C9.7411 8.75024 9.85244 8.70412 9.93453 8.62203L12.5595 5.99703C12.6002 5.9564 12.6325 5.90815 12.6545 5.85504C12.6765 5.80193 12.6878 5.74499 12.6878 5.6875C12.6878 5.63001 12.6765 5.57308 12.6545 5.51996C12.6325 5.46685 12.6002 5.4186 12.5595 5.37797Z" fill="#121314"/>
  </svg>
);

/* ============================
   EDUCATION CARD
   ============================ */
const EducationCard = () => (
  <div className="deccan-card p-8">
    <span className="slash-heading text-[10px] mb-4 block">// Education</span>
    <h3 className="font-instrument text-xl font-semibold text-[#F6F3F0] mb-2">
      {education.degree}
    </h3>
    <p className="font-inter text-sm text-[#F6F3F0]/60 mb-1">
      {education.institution}
    </p>
    <div className="flex items-center gap-2 text-xs font-inter text-[#F6F3F0]/40">
      <span>{education.location}</span>
      <span className="w-1 h-1 rounded-full bg-[#F6F3F0]/20" />
      <span>{education.period}</span>
    </div>
    <div className="mt-4 inline-block px-3 py-1.5 text-xs font-inter font-medium text-[#F6F3F0]/60 border border-white/[0.06] rounded-sm bg-white/[0.02]">
      CGPA: {education.gpa}
    </div>
  </div>
);

/* ============================
   CERTIFICATIONS CARD
   ============================ */
const CertificationsCard = () => (
  <div className="deccan-card p-8">
    <span className="slash-heading text-[10px] mb-4 block">// Certifications</span>
    {certifications.map((cert) => (
      <div key={cert.title}>
        <h3 className="font-instrument text-xl font-semibold text-[#F6F3F0] mb-2">
          {cert.title}
        </h3>
        <p className="font-inter text-sm text-[#F6F3F0]/60 mb-1">
          {cert.issuer}
        </p>
        <p className="font-inter text-xs text-[#F6F3F0]/40 leading-relaxed">
          {cert.description}
        </p>
      </div>
    ))}
  </div>
);

/* ============================
   EDUCATION & CERTIFICATIONS
   ============================ */
const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="deccan-section" id="education">
      <div className="container-section">
        <SplitWordHeading className="font-instrument text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold text-[#F6F3F0] leading-[1.1] tracking-[-0.02em] mb-8">
          Education & Certifications
        </SplitWordHeading>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <EducationCard />
          <CertificationsCard />
        </motion.div>
      </div>
    </section>
  );
};

/* ============================
   CONTACT CTA
   ============================ */
const ContactCTA = () => (
  <section className="deccan-section section-alt-bg" id="contact">
    <div className="container-section text-center py-16 md:py-24">
      <p className="font-inter text-sm text-[#F6F3F0]/50 mb-4">
        This doesn&apos;t have to end here
      </p>
      <SplitWordHeading className="font-instrument text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold text-[#F6F3F0] leading-[1.05] tracking-[-0.02em] mb-7">
        Let's Build Intelligence Together
      </SplitWordHeading>

      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center"
      >
        <a href={`mailto:${personalInfo.email}`} className="deccan-btn">
          Get in Touch
          <ArrowSvg />
        </a>
      </motion.div>
    </div>
  </section>
);

/* ============================
   FOOTER LINKS COLUMN
   ============================ */
const FooterColumn = ({ title, children }) => (
  <div>
    <div className="slash-heading text-[10px] mb-4">{title}</div>
    <div className="flex flex-col gap-2.5">{children}</div>
  </div>
);

/* ============================
   FOOTER
   ============================ */
const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <footer className="bg-[#060708] border-t border-white/[0.04]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
        animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-8 md:px-12 py-12"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          <div>
            <span className="font-dm-sans text-sm text-[#F6F3F0]/50">
              {personalInfo.name}
            </span>
            <br />
            <span className="font-dm-sans text-sm text-[#F6F3F0]/30">
              AI Engineer · India
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="deccan-btn text-xs"
              style={{ fontStyle: 'italic' }}
            >
              Contact Me
              <ArrowSvg />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-inter text-[#F6F3F0]/60 hover:text-[#F6F3F0] border border-white/[0.08] rounded-sm transition-colors duration-300 bg-white/[0.02]"
            >
              <ArrowUp size={12} />
              Back to Top
            </button>
          </div>
        </div>

        {/* Middle Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <FooterColumn title="// Navigation">
            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-sm font-inter text-[#F6F3F0]/40 hover:text-[#F6F3F0]/70 transition-colors"
              >
                {item}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn title="// Expertise">
            {['GenAI & LLMs', 'RAG Pipelines', 'Agentic AI', 'ML Engineering'].map((item) => (
              <span key={item} className="text-sm font-inter text-[#F6F3F0]/40">
                {item}
              </span>
            ))}
          </FooterColumn>

          <FooterColumn title="// Connect">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-inter text-[#F6F3F0]/40 hover:text-[#F6F3F0]/70 transition-colors flex items-center gap-2"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-inter text-[#F6F3F0]/40 hover:text-[#F6F3F0]/70 transition-colors flex items-center gap-2"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm font-inter text-[#F6F3F0]/40 hover:text-[#F6F3F0]/70 transition-colors flex items-center gap-2"
            >
              <Mail size={14} /> Email
            </a>
          </FooterColumn>

          <FooterColumn title="// Contact">
            <span className="text-sm font-inter text-[#F6F3F0]/40">{personalInfo.email}</span>
            <span className="text-sm font-inter text-[#F6F3F0]/40">{personalInfo.phone}</span>
          </FooterColumn>
        </div>

        {/* Bottom Divider */}
        <div className="flex items-center justify-between pt-6 border-t border-white/[0.04]">
          <span className="font-dm-sans text-xs text-[#F6F3F0]/25">
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </span>
        </div>
      </motion.div>
    </footer>
  );
};

/* ============================
   COMBINED EXPORT
   ============================ */
const ContactFooter = () => (
  <>
    <EducationSection />
    <ContactCTA />
    <Footer />
  </>
);

export default ContactFooter;
