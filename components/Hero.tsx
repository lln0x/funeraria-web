'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full"
        />
      </div>

      <motion.div
        className="container-custom relative z-10 text-center text-light"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 font-serif"
        >
          FUNERARIA LA PAZ
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-4 text-accent">
          Servicios Funerarios con Dignidad y Respeto
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg max-w-2xl mx-auto mb-8 text-gray-300"
        >
          Con más de 25 años de experiencia, ofrecemos asesoramiento profesional
          y apoyo integral en los momentos más difíciles.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacto" className="btn-primary">
            Contactar Ahora
          </a>
          <a href="#servicios" className="btn-secondary">
            Ver Servicios
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-accent" />
      </motion.div>
    </section>
  );
};

export default Hero;
