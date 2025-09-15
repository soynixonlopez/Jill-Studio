# Jill Studio - Sitio Web de Fotografía Profesional

Un sitio web moderno y profesional para servicios de fotografía, construido con Next.js 14, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para móviles, tablets y desktop
- **Animaciones Suaves**: Implementadas con Framer Motion
- **SEO Optimizado**: Meta tags y estructura semántica
- **Rendimiento**: Carga rápida y optimizado
- **Accesibilidad**: Cumple con estándares de accesibilidad web

## 📱 Páginas Incluidas

- **Inicio**: Hero section, preview de servicios, estadísticas y CTA
- **Servicios**: Detalles de cada tipo de fotografía con precios
- **Sobre Mí**: Información personal, trayectoria y filosofía
- **Contacto**: Formulario de contacto, información y WhatsApp

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework React con App Router
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework de CSS utilitario
- **Framer Motion**: Animaciones y transiciones
- **Lucide React**: Iconos modernos y consistentes

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone [tu-repositorio]
cd jill-studio-web
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

### Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter de ESLint

## 📝 Personalización

### Información de Contacto
Edita los siguientes archivos para personalizar tu información:

- `src/components/Footer.tsx` - Información de contacto en el footer
- `src/app/contacto/page.tsx` - Información de contacto en la página de contacto
- `src/app/sobre-mi/page.tsx` - Información personal

### Colores y Estilos
Los colores principales se pueden cambiar en `tailwind.config.js` o directamente en las clases de Tailwind CSS.

### Contenido
- Edita el texto en cada página según tus necesidades
- Actualiza los precios en `src/app/servicios/page.tsx`
- Modifica las estadísticas en las páginas correspondientes

## 📱 Características Responsivas

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navegación Móvil**: Menú hamburguesa en dispositivos pequeños
- **Imágenes Adaptativas**: Optimizadas para diferentes tamaños de pantalla

## 🎨 Diseño

- **Paleta de Colores**: Púrpura y rosa como colores principales
- **Tipografía**: Inter font para mejor legibilidad
- **Espaciado**: Sistema de espaciado consistente con Tailwind
- **Componentes**: Reutilizables y modulares

## 📧 Integración de Contacto

### WhatsApp
- Enlace directo a WhatsApp en el footer y página de contacto
- Reemplaza el número de teléfono con tu número real

### Email
- Formulario de contacto funcional
- Enlaces de email en footer y página de contacto
- Reemplaza las direcciones de email con las tuyas

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `out` (si usas export estático)

### Otros Proveedores
El sitio es compatible con cualquier proveedor que soporte Next.js.

## 📈 SEO y Rendimiento

- **Meta Tags**: Optimizados para redes sociales
- **Imágenes**: Optimizadas con Next.js Image
- **Lazy Loading**: Carga diferida de componentes
- **Core Web Vitals**: Optimizado para métricas de rendimiento

## 🔧 Mantenimiento

### Actualizaciones Regulares
- Mantén las dependencias actualizadas
- Revisa el rendimiento periódicamente
- Actualiza el contenido según sea necesario

### Backup
- Haz backup regular de tu código
- Mantén copias de seguridad de las imágenes
- Documenta cualquier personalización importante

## 📞 Soporte

Para soporte técnico o preguntas sobre el desarrollo:
- Revisa la documentación de Next.js
- Consulta la documentación de Tailwind CSS
- Revisa los issues en el repositorio

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

---

**¡Tu sitio web de fotografía profesional está listo!** 🎉

Recuerda personalizar toda la información de contacto, precios y contenido según tus necesidades específicas.