# FUNERARIA LA PAZ - Sitio Web Oficial

## 🌐 Descripción

Sitio web moderno y profesional para FUNERARIA LA PAZ, desarrollado con tecnologías avanzadas para ofrecer una experiencia de usuario excepcional.

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Formularios:** React Hook Form
- **Mapas:** Mapbox GL
- **Email:** EmailJS
- **Iconos:** Lucide React
- **Lenguaje:** TypeScript

## ✅ Características

✅ Diseño responsivo y moderno
✅ Animaciones fluidas con Framer Motion
✅ Formulario de contacto funcional con EmailJS
✅ Mapa interactivo con Mapbox
✅ SEO optimizado
✅ Rendimiento optimizado
✅ Dark mode ready
✅ Accesibilidad mejorada

## 📁 Estructura del Proyecto

```
funeraria-web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/lln0x/funeraria-web.git
cd funeraria-web
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` basado en `.env.local.example`:

```bash
cp .env.local.example .env.local
```

Luego edita `.env.local` con tus credenciales:

```env
# Mapbox Configuration
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Contact Information
NEXT_PUBLIC_PHONE=+34 600 123 456
NEXT_PUBLIC_EMAIL=contacto@funerarialapaz.com
NEXT_PUBLIC_ADDRESS=Calle Principal, 42 - Ciudad
```

### 4. Obtener Credenciales

#### Mapbox
1. Registrate en [mapbox.com](https://www.mapbox.com/)
2. Ve a tu Dashboard y copia el Access Token
3. Pégalo en `NEXT_PUBLIC_MAPBOX_TOKEN`

#### EmailJS
1. Registrate en [emailjs.com](https://www.emailjs.com/)
2. Crea un servicio de email
3. Copia Service ID, Template ID y Public Key
4. Pégalos en las variables correspondientes

### 5. Ejecutar en Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Build para Producción

```bash
npm run build
npm start
```

## 📄 Secciones del Sitio

### 1. **Header**
- Información de contacto en la barra superior
- Navegación principal con menú responsive
- Logo de la empresa

### 2. **Hero**
- Sección de bienvenida con animaciones
- Llamadas a la acción
- Elementos visuales animados

### 3. **Sobre Nosotros**
- Historia y misión de la empresa
- Características principales
- Tarjetas con iconos animados

### 4. **Servicios**
- Cremación
- Inhumación
- Velatorio
- Traslado nacional e internacional
- Asesoramiento y gestión de trámites
- Atención 24/7

### 5. **Testimonios**
- Reseñas de clientes
- Calificación por estrellas
- Cartas de recomendación

### 6. **Contacto**
- Formulario funcional con validación
- Información de ubicación
- Datos de contacto
- Horarios de atención

### 7. **Footer**
- Enlaces rápidos
- Redes sociales
- Información legal
- Copyright

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

```js
colors: {
  'primary': '#1a1a2e',      // Azul oscuro
  'secondary': '#16213e',    // Azul más claro
  'accent': '#d4af37',       // Oro
  'light': '#f4f1de',        // Crema
  'muted': '#8b8680',        // Gris
}
```

### Información de Contacto

Edita los siguientes componentes para actualizar la información:
- `components/Header.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

## 📱 Responsive Design

El sitio es completamente responsive y funciona en:
- 📱 Móviles (320px y más)
- 📱 Tablets (768px y más)
- 💻 Desktops (1024px y más)

## 🔐 Seguridad

- Las variables sensibles se almacenan en `.env.local` (no incluido en git)
- EmailJS maneja la privacidad de los emails
- HTTPS recomendado en producción

## 🚀 Deployment

### Vercel (Recomendado)

1. Push el código a GitHub
2. Conecta el repositorio a Vercel
3. Configura las variables de entorno en el dashboard
4. Vercel deployará automáticamente

### Otros Hosts

Puedes desplegar en cualquier plataforma que soporte Node.js:
- Netlify
- Railway
- Heroku
- DigitalOcean

## 📊 Performance

- ⚡ Next.js Image Optimization
- 🏃 Code Splitting automático
- 🔍 SEO optimizado
- 📱 Mobile-First approach
- 🎨 Animaciones optimizadas

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas:
- 📧 Email: contacto@funerarialapaz.com
- 📱 Teléfono: +34 600 123 456
- ⏰ Disponibilidad: 24/7

## 🙏 Agradecimientos

Gracias por usar FUNERARIA LA PAZ. Nos comprometemos a ofrecer los mejores servicios funerarios con dignidad y respeto.

---

**Hecho con ❤️ por FUNERARIA LA PAZ**
