# AhorraFácil – Landing Page Profesional

Landing page desarrollada como prueba técnica para la vacante de UI Web Designer en Porvenir. Presenta el concepto de **AhorraFácil**, una app de ahorro inteligente que automatiza tus finanzas y premia tu progreso. Este proyecto está diseñado con foco en accesibilidad, rendimiento y confianza visual.

---

## Objetivos del Proyecto

- Diseño **Mobile-First** responsive con estructura semántica
- Interface clara y jerárquica con enfoque UX/UI
- Código optimizado sin frameworks externos
- Accesibilidad nivel AA (WCAG 2.1)
- Buenas prácticas de SEO técnico

---

## Decisiones de Diseño

### Paleta de Colores
```css
--primary-color: #0057A3;  // Confianza y estabilidad financiera
--bg-main: #F5F1E4;        // Calidez visual
--text-primary: #1C1C1C;   // Legibilidad prolongada
```

### Tipografía
- Fuente: **Poppins**, escalas fluidas de 0.875rem a 4rem
- Pesos usados: 400–700
- Óptima para pantallas y números claros

### Componentes Clave
- **Botones CTA** redondeados: amigables y accesibles
- **Formularios modernos** con floating labels
- **Hover states** sutiles con sombras para feedback visual

### Estructura Visual
- Hero limpio con CTA principal
- Beneficios organizados en columnas con íconos SVG
- Sección de contacto destacada para mejor conversión

---

## Tecnologías Utilizadas

- **HTML5 Semántico**
- **CSS3 personalizado** (con variables y responsive utilities)
- **JavaScript vanilla** (interacciones, validaciones)
- Sin dependencias externas (solo Google Fonts)

---

## Accesibilidad

- Navegación completa con teclado
- Atributos ARIA para roles y estados
- Contraste de color AAA (7:1)
- Formularios con validación accesible y feedback inmediato
- Soporte para preferencias de usuario (movimiento reducido)

---

## SEO y Performance

- Meta tags optimizados (`title`, `description`, `keywords`)
- Estructura de encabezados jerárquica (H1–H3)
- Open Graph y canonical tag
- HTML semántico + `lang="es"` + `rel="noopener"`
- Imágenes optimizadas con `alt` descriptivos
- Font-display: swap + preconnect de Google Fonts
- Animaciones suaves con CSS transitions

---

## Estructura del Proyecto

```
porvenir-landing/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    ├── header.jpg
    └── beneficios.jpg
```

---

## Arquitectura CSS

- **BEM modificado** para nomenclatura de clases
- Variables CSS para colores y espaciado
- Utilidades responsive (Mobile-First)
- Organización por secciones

---

## Breakpoints

| Dispositivo | Rango       | Layout                         |
|-------------|-------------|--------------------------------|
| Mobile      | 320–767px   | Layout vertical, menú colapsado |
| Tablet      | 768–1023px  | 2 columnas, navegación visible |
| Desktop     | 1024px+     | Layout amplio, hover activo    |

---

## Testing y Compatibilidad

- Validadores W3C (HTML/CSS)
- Chrome DevTools para responsive
- Navegadores modernos:
  - Chrome, Firefox, Safari, Edge
  - iOS Safari, Chrome Android

---

**Desarrollado por**: ISABEL CRISTINA MORENO CONTRERAS  
**Fecha**: 25 julio 2025  
**Posición**: UI Web Designer - Porvenir

---