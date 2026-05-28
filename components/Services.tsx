'use client';

import { motion } from 'framer-motion';
import { Flame, Home, Handshake, Truck, FileText, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Flame,
      title: 'Cremación',
      description: 'Servicio profesional de cremación con máximo respeto y dignidad. Trámites legales incluidos.',
    },
    {
      icon: Home,
      title: 'Inhumación',
      description: 'Gestión completa de inhumación. Coordinación con cementerios y trámites administrativos.',
    },
    {
      icon: Handshake,
      title: 'Velatorio',
      description: 'Espacios acogedores y dignos para rendir homenaje a tus seres queridos.',
    },
    {
      icon: Truck,
      title: 'Traslado Nacional e Internacional',
      description: 'Servicio de traslado seguro y profesional a nivel nacional e internacional.',
    },
    {
      icon: FileText,
      title: 'Asesoramiento y Gestión de Trámites',
      description: 'Asesoría integral sobre documentación, permisos y procedimientos legales necesarios.',
    },
    {
      icon: Phone,
      title: 'Atención 24/7',
      description: 'Disponibilidad permanente para asesoramiento y apoyo cuando nos necesites.',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Ofrecemos una gama completa de servicios funerarios profesionales
            adaptados a las necesidades de cada familia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-light to-white p-8 rounded-lg card-shadow border-l-4 border-accent"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="inline-block p-3 bg-accent rounded-full mb-4"
                >
                  <Icon size={28} className="text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
