import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import HeroBackground from '../canvas/HeroBackground';
import Loader from '../layout/Loader';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* 3D Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas>
          <Suspense fallback={<Loader />}>
            <HeroBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="absolute inset-0 max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 pt-32">
        {/* Neon Gradient Line Indicator */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] glow-neon" />
          <div className="w-1 sm:h-80 h-40 violet-gradient neon-gradient" />
        </div>

        {/* Text Content */}
        <div>
          <motion.h1
            className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Hi, I'm <span className="text-[#915EFF] glow-neon">Muhammed Falah</span>
          </motion.h1>
          <motion.p
            className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            UI Engineer • Backend Developer • DevOps Engineer
            <br className="sm:block hidden" />
            3D Animation Champion • Motion Graphics Creator
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary neon-border flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 glow-neon"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;