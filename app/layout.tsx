import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FUNERARIA LA PAZ | Servicios Funerarios de Confianza',
  description: 'Funeraria La Paz: Servicios funerarios profesionales y respetuosos. Asesoramiento, trámites, velatorio, cremación e inhumación.',
  keywords: 'funeraria, servicios funerarios, cremación, inhumación, velatorio, traslado',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://funerarialapaz.com',
    title: 'FUNERARIA LA PAZ',
    description: 'Servicios funerarios de confianza',
    siteName: 'Funeraria La Paz',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css' rel='stylesheet' />
      </head>
      <body className="bg-light text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
