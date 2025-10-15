# Portfolio Personal - Cptquacks

Un sitio web de portfolio personal moderno y responsivo, diseñado para ser alojado en GitHub Pages.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Secciones Completas**:
  - Hero/Inicio con presentación personal
  - Sobre mí con habilidades técnicas
  - Portfolio de proyectos
  - Blog personal
  - Formulario de contacto
- **Interactividad**: JavaScript vanilla para navegación suave y efectos
- **GitHub Pages Ready**: Configurado para despliegue automático

## 📁 Estructura del Proyecto

```
/
├── index.html              # Página principal
├── src/                    # Código fuente
│   ├── css/               # Estilos CSS
│   │   ├── main.css       # Estilos principales
│   │   └── components.css # Componentes específicos
│   └── js/                # JavaScript
│       └── main.js        # Funcionalidad principal
├── img/                   # Imágenes del sitio
└── README.md              # Documentación
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: 
  - Variables CSS personalizadas
  - Grid y Flexbox para layouts
  - Animaciones y transiciones
  - Diseño responsivo
- **JavaScript ES6+**: 
  - Funcionalidad interactiva
  - Navegación suave
  - Formulario de contacto
  - Animaciones de scroll
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografía (Inter)

## 🚀 Despliegue en GitHub Pages

### Opción 1: Crear repositorio nuevo
1. Crea un nuevo repositorio en GitHub llamado `tu-usuario.github.io`
2. Clona el repositorio localmente
3. Copia todos los archivos de este proyecto al repositorio
4. Haz commit y push de los cambios

### Opción 2: Usar repositorio existente
1. Crea un repositorio con cualquier nombre
2. Sube los archivos del proyecto
3. Ve a Settings > Pages
4. Selecciona la rama `main` como source
5. Tu sitio estará disponible en `https://tu-usuario.github.io/nombre-repositorio`

## 📝 Personalización

### Información Personal
Edita el archivo `index.html` para actualizar:
- Nombre y título profesional
- Descripción personal
- Habilidades técnicas
- Información de contacto

### Estilos
Modifica las variables CSS en `src/css/main.css`:
```css
:root {
    --primary-color: #6366f1;    /* Color principal */
    --secondary-color: #f59e0b;  /* Color secundario */
    --text-primary: #1f2937;     /* Color de texto */
    /* ... más variables */
}
```

### Contenido
- **Proyectos**: Actualiza la sección `#projects` con tus proyectos reales
- **Blog**: Agrega tus posts en la sección `#blog`
- **Imágenes**: Reemplaza las imágenes placeholder en la carpeta `img/`

## 📱 Características Responsivas

- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Navegación móvil**: Menú hamburguesa funcional
- **Imágenes adaptables**: Se ajustan automáticamente al tamaño de pantalla

## ✨ Funcionalidades JavaScript

- **Navegación suave**: Scroll animado entre secciones
- **Menú móvil**: Hamburger menu responsivo
- **Animaciones de scroll**: Elementos aparecen al hacer scroll
- **Formulario de contacto**: Validación y feedback visual
- **Navbar dinámico**: Cambia de estilo al hacer scroll
- **Imágenes placeholder**: Generación automática de placeholders

## 🎨 Personalización Avanzada

### Agregar nuevas secciones
1. Añade la sección HTML en `index.html`
2. Agrega los estilos correspondientes en CSS
3. Actualiza la navegación si es necesario

### Integrar con servicios externos
- **Formulario de contacto**: Integra con Netlify Forms, Formspree, o EmailJS
- **Blog**: Conecta con un CMS headless como Strapi o Contentful
- **Analytics**: Añade Google Analytics o similar

## 📞 Contacto

- **GitHub**: [Cptquacks](https://github.com/Cptquacks)
- **Email**: zgenshinzgenshin@gmail.com

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo según tus necesidades.

---

¡Hecho con ❤️ por Cptquacks!
