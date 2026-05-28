'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María García',
      relation: 'Familia García López',
      text: 'Gracias a Funeraria La Paz por su profesionalismo y apoyo en un momento tan difícil. Nos trataron con respeto y dignidad.',
      rating: 5,
    },
    {
      name: 'Juan Rodríguez',
      relation: 'Familia Rodríguez Martínez',
      text: 'Excelente servicio. El equipo estuvo disponible en todo momento y nos ayudó con todos los trámites de manera profesional.',
      rating: 5,
    },
    {
      name: 'Carmen López',
      relation: 'Familia López Fernández',
      text: 'Un trato humano excepcional. Gracias por facilitarnos todo durante este proceso. Recomendamos Funeraria La Paz.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-light mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            La confianza de las familias es nuestro mayor reconocimiento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg card-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.relation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
