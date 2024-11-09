import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillSets = [
  {
    title: "UI Engineering",
    icon: "💻",
    skills: [
      "HTML",
      "Cascading Style Sheet",
      "Git & GitLab",
      "JavaScript",
      "jQuery",
      "Progressive Web Apps",
      "Bootstrap",
      "SASS",
      "React"
    ]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      "Python",
      "Django",
      "Django Advanced"
    ]
  },
  {
    title: "DevOps Engineering",
    icon: "🔄",
    skills: [
      "Webhosting",
      "Nginx",
      "Apache"
    ]
  },
  {
    title: "Web Application Development",
    icon: "🌐",
    skills: [
      "API Development"
    ]
  },
  {
    title: "Mobile Application Development",
    icon: "📱",
    skills: [
      "React Native",
      "Android",
      "Flutter"
    ]
  },
  {
    title: "3D Animation",
    icon: "🏆",
    skills: [
      "Blender",
      "Cinema 4D"
    ],
    achievement: "State Champion"
  },
  {
    title: "Graphics Design",
    icon: "🎨",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    title: "2D Motion Graphics",
    icon: "🎬",
    skills: [
      "After Effects",
      "CapCut",
      "Adobe Premiere Pro"
    ]
  }
];

const SkillCard = ({ title, icon, skills, achievement, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full sm:w-[360px] p-[1px] rounded-[20px] shadow-card bg-gradient-to-b from-[#915EFF] to-transparent"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
          {achievement && (
            <span className="block text-[14px] text-[#915EFF] mt-1">
              {achievement}
            </span>
          )}
        </h3>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-secondary text-[14px] bg-tertiary px-3 py-1 rounded-full border border-[#915EFF]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen mx-auto">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-[#915EFF] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            INTRODUCTION
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Overview.
          </h2>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            I'm a skilled software developer with extensive experience in both frontend and backend development.
            My expertise spans across UI engineering, backend development, DevOps, mobile app development,
            and creative design. I'm passionate about creating efficient, scalable solutions and bringing
            creative visions to life through code and design.
          </p>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {skillSets.map((skillSet, index) => (
            <SkillCard key={index} index={index} {...skillSet} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;