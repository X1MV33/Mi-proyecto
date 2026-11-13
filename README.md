# Portada animada · Invitación de boda

Abre `index.html` (boda) o `xv/index.html` (XV años) en un navegador. Las dos versiones comparten la misma coreografía (loop de 20 s, basado en el video de ejemplo) y, al tocar la pantalla, abren la invitación completa: mensaje, familias, cuenta regresiva, ceremonia y recepción con mapa, itinerario, vestimenta, regalos, confirmación por WhatsApp y cierre. Todos los datos están en `CONFIG` (`CONFIG.evento` para las secciones) y son de ejemplo.

- Edita los datos en el objeto `CONFIG` dentro de `index.html` (novios, iniciales, texto superior, marca de agua).
- Sustituye los PNG de `assets/` por tus ilustraciones finales con los mismos nombres (los actuales son placeholders).
- `index.html?reel=1` oculta la UI y corre la secuencia en pantalla completa para grabar el Reel (ventana 1080x1920).
- Sin `?reel=1`, al tocar la pantalla se abre `#invitacion`, un contenedor vacío para la siguiente sección (se lanza el evento `invitacion:abrir`).
- Para depurar: `portada.seek(16)` en consola salta a ese segundo.

Nota: los archivos deben servirse por HTTP (p. ej. `npx serve .`) o abrirse localmente; GSAP y las fuentes se cargan por CDN.

## Versión XV años

`xv/index.html` usa las imágenes de `assets/` y sigue la coreografía del video de ejemplo. El loop dura 20 s y se ajusta con `CONFIG.duracion`:

1. El monograma (tiara con "XV" en serif didone) se dibuja sobre la escena 1.
2. La ventana en arco abre desde el centro con el monograma encima. Las flores, la cenefa y las estrellas de la escena 1 quedan por delante del arco y luego se abren hacia los lados.
3. La escena 2 entra con una bruma blanca y un ligero zoom out. Después entra el marco floral.
4. Aparece "Mis XV Años", el nombre se escribe a mano, sale la frase y brillan los destellos. Las mariposas cruzan durante el hold.
5. La escena 1 vuelve a subir como cortina y el loop reinicia.

Sus datos se editan en el `CONFIG` de ese archivo: `quinceanera`, `iniciales`, `textoSuperior`, `frase`, `fecha` y `marcaDeAgua`. Para grabar el Reel se usa `xv/index.html?reel=1`.

### Extras de la invitación XV

- **Apertura:** al tocar la portada se abren unas puertas de palacio en 3D con un sello "XV". En ese momento empieza la música y, en iPhone, se pide permiso para usar el giroscopio.
- **Fotos** (`xv/fotos/`, lista en `CONFIG.fotos`):
  - La foto en arco con marco dorado (`fotoPortada`) se inclina en 3D al mover el dedo o el teléfono.
  - La galería es un carrusel 3D en anillo: se gira arrastrando, gira sola, y al tocar una foto se abre un visor con deslizar, flechas y teclado.
  - La foto de fondo del cierre se elige con `fotoCierre`.
- **Música:**
  - Botón flotante para pausar o reanudar.
  - Si `CONFIG.musica` tiene la ruta a tu canción (por ejemplo `"musica.mp3"` dentro de `xv/`), suena en loop.
  - Si está vacío, suena un vals de caja musical original generado en vivo, sin archivo.
- **Más interacciones:**
  - Pétalos que caen en 3D.
  - Destellos dorados al tocar la pantalla.
  - Las secciones aparecen con un giro 3D al bajar.
  - La cuenta regresiva cambia los números con un giro tipo reloj de cartel.
  - Botones para "Google Calendar" y para descargar un `.ics` (iPhone/Outlook).
  - Formulario de confirmación (nombre, número de personas y mensaje) que abre WhatsApp con el texto ya armado.
