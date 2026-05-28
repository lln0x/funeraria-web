'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Users, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: '25 Años de Experiencia',
      description: 'Trayectoria probada en el sector funerario',
    },
    {
      icon: Heart,
      title: 'Atención Personalizada',
      description: 'Trato respetuoso y empático con cada familia',
    },
    {
      icon: Users,
      title: 'Equipo Profesional',
      description: 'Personal capacitado y comprometido',
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Siempre aquí cuando nos necesitas',
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Sobre Nosotros</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            En Funeraria La Paz, entendemos que cada familia merece un trato especial
            y un servicio de calidad durante los momentos más delicados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg card-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-block p-4 bg-accent rounded-full mb-4"
                >
                  <Icon size={32} className="text-primary" />
                </motion.div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-secondary text-light p-12 rounded-lg"
        >
          <h3 className="text-3xl font-bold mb-4">Nuestra Misión</h3>
          <p className="text-lg leading-relaxed mb-6">
            Proporcionar servicios funerarios de excelencia con el máximo respeto,
            profesionalismo y apoyo emocional. Creemos que en los momentos más difíciles,
            las familias merecen un servicio que combine calidad, dignidad y comprensión.
          </p>
          <p className="text-lg leading-relaxed">
            Nuestro compromiso es facilitar los trámites administrativos y ofrecer
            asesoramiento integral para que puedas enfocarte en lo más importante:
            despedir a tus seres queridos con la dignidad que merecen.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
