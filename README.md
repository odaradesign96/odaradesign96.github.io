# Aqualav Web — GitHub Pages

Sitio estático responsive basado en la maqueta de Aqualav y preparado para publicarse directamente con **GitHub Pages**.

## Archivos

- `index.html`: estructura y contenidos.
- `styles.css`: diseño responsive, colores y componentes.
- `script.js`: menú mobile, animaciones y demo del formulario.
- `assets/logo-aqualav.svg`: logo de demostración editable. Reemplázalo por el logo oficial.
- `assets/hero-operations.svg`: visual de demostración para el hero.
- `assets/process-illustration.svg`: ilustración de demostración del proceso.
- `.nojekyll`: evita procesamiento innecesario por Jekyll.

## 1. Subir a GitHub

1. Crea un repositorio, por ejemplo `aqualav-web`.
2. Sube todos los archivos manteniendo la estructura de carpetas.
3. Haz commit en la rama `main`.

## 2. Publicar con GitHub Pages

1. En el repositorio abre **Settings**.
2. Entra a **Pages**.
3. En **Build and deployment**, selecciona `Deploy from a branch`.
4. Rama: `main`.
5. Carpeta: `/ (root)`.
6. Guarda.

GitHub entregará una URL similar a:

`https://TU-USUARIO.github.io/aqualav-web/`

## 3. Cambios que debes hacer antes de publicar

### Logo
Reemplaza `assets/logo-aqualav.svg` por el logo oficial. Si usas PNG o WebP, actualiza la ruta en `index.html`.

### Fotografías
Los SVG incluidos son demostrativos. Conviene reemplazarlos por fotografías reales de:

- planta;
- operación;
- equipo;
- vehículos;
- prendas industriales;
- faenas.

### Datos de contacto
Busca y reemplaza:

- `contacto@aqualav.cl`
- `+56 9 0000 0000`
- `56900000000`

### Formulario
GitHub Pages es hosting estático, por lo que no procesa formularios por sí solo.

Puedes conectarlo a:

- Formspree;
- HubSpot Forms;
- Brevo;
- Mailchimp;
- un backend propio.

Para Formspree, por ejemplo, cambia en `index.html`:

```html
<form action="https://formspree.io/f/TU_ID" method="POST">
```

Luego elimina o adapta el bloque de JavaScript que hace `event.preventDefault()` en `script.js`.

## 4. Dominio propio

Si Aqualav tiene un dominio, puedes conectarlo desde **Settings > Pages > Custom domain**. El proveedor del dominio debe apuntar sus DNS a GitHub Pages.

## 5. Colores

Los colores principales se controlan al inicio de `styles.css`:

```css
:root {
  --blue: #0798e8;
  --cyan: #34b8df;
  --green: #95d34f;
  --ink: #07131b;
}
```

Puedes reemplazarlos por los códigos oficiales del manual de marca.

## Nota de contenido

La sección de Sustentabilidad está redactada en torno a prácticas concretas: tecnología Hydrofinity, productos biodegradables certificados, eficiencia de recursos y reparación de prendas. Evita convertir esa redacción en una afirmación general de que toda la operación es "sustentable" si no existe respaldo corporativo más amplio.
