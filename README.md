# web — Página personal de Claudio Cárdenas

Landing page personal y de contacto profesional de **Claudio Cárdenas Díaz** — Tech Lead & Engineering Lead (IA Aplicada, Big Data & Cloud AWS).

🌐 **Sitio en vivo:** [ccardenas.github.io/web](https://ccardenas.github.io/web/)

## ¿Qué es?

Una página de una sola vista (*one-pager*) que sirve como carta de presentación en línea: quién soy, qué hago y cómo contactarme, con el CV y la carta de presentación descargables en PDF.

## Estructura

```
.
├── index.html              # Página principal (solo marcado)
├── README.md
└── assets/
    ├── css/
    │   └── styles.css      # Estilos: tema claro/oscuro, animaciones, responsive
    ├── js/
    │   └── main.js         # Interacciones: scroll, parallax, animaciones de entrada
    ├── img/
    │   ├── foto_hero.webp  # Foto del hero en escala de grises (se tiñe con el fondo vía mix-blend-mode)
    │   └── foto.jpg        # Foto cuadrada optimizada, usada para vista previa en redes (Open Graph)
    └── docs/
        ├── CV_Claudio_Cardenas.pdf                  # Curriculum Vitae descargable
        └── Carta_Presentacion_Claudio_Cardenas.pdf  # Carta de presentación descargable
```

## Características

- **Sitio 100% estático** — sin frameworks, sin build, sin backend. HTML, CSS y JS planos.
- **Tema claro/oscuro automático** según la preferencia del sistema (`prefers-color-scheme`).
- **Tipografía** [Rethink Sans](https://fonts.google.com/specimen/Rethink+Sans) (Google Fonts), con acentos en monoespaciada.
- **Foto en duotono** integrada al fondo del hero con `mix-blend-mode: luminosity`, para que funcione en ambos temas con una sola imagen.
- **Animaciones sutiles**: entrada con *drift*, parallax en el hero, encabezado que se contrae al hacer scroll y subrayados deslizantes en los enlaces. Respetan `prefers-reduced-motion`.
- **Responsive** — diseñado para verse bien de móvil a escritorio.
- **Liviano**: ~240 KB en total, incluyendo los dos PDF.

## Desarrollo local

No requiere instalación. Basta con abrir `index.html` en el navegador, o servirlo localmente:

```bash
python3 -m http.server 8000
```

y visitar `http://localhost:8000`.

## Publicación

El sitio se publica con **GitHub Pages** desde la rama `main` (carpeta raíz). Cada push a `main` actualiza el sitio automáticamente en 1–2 minutos.

## Contacto

- ✉️ [ccardenasd@gmail.com](mailto:ccardenasd@gmail.com)
- 💼 [linkedin.com/in/claudiocardenasdiaz](https://linkedin.com/in/claudiocardenasdiaz)
- 🐙 [github.com/ccardenas](https://github.com/ccardenas)

---

© Claudio Cárdenas Díaz — Puerto Montt, Chile
