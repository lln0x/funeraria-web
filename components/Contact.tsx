'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const onSubmit = async (data: any) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
          to_email: 'contacto@funerarialapaz.com',
        }
      );
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+34 600 123 456',
      href: 'tel:+34600123456',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contacto@funerarialapaz.com',
      href: 'mailto:contacto@funerarialapaz.com',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Calle Principal, 42 - Ciudad',
    },
    {
      icon: Clock,
      label: 'Horarios',
      value: 'L-V: 8:00-20:00 | S-D: 10:00-18:00',
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Contacta con Nosotros</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Estamos aquí para ayudarte. No dudes en comunicarte con nosotros
            en cualquier momento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-primary">Información de Contacto</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-primary">
                        <Icon size={24} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg text-primary hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg text-primary">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg card-shadow"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'El nombre es requerido' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  {...register('email', { required: 'El email es requerido' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  placeholder="Tu teléfono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Mensaje *
                </label>
                <textarea
                  {...register('message', { required: 'El mensaje es requerido' })}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  placeholder="Tu mensaje..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full btn-primary text-center"
              >
                Enviar Mensaje
              </motion.button>

              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-center font-semibold"
                >
                  ¡Mensaje enviado exitosamente!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
