# Portada animada · Invitación de boda

Abre `index.html` en un navegador.

- Edita los datos en el objeto `CONFIG` dentro de `index.html` (novios, iniciales, texto superior, marca de agua).
- Sustituye los PNG de `assets/` por tus ilustraciones finales con los mismos nombres (los actuales son placeholders).
- `index.html?reel=1` oculta la UI y corre la secuencia en pantalla completa para grabar el Reel (ventana 1080x1920).
- Sin `?reel=1`, al tocar la pantalla se abre `#invitacion`, un contenedor vacío para la siguiente sección (se lanza el evento `invitacion:abrir`).
- Para depurar: `portada.seek(16)` en consola salta a ese segundo.

Nota: los archivos deben servirse por HTTP (p. ej. `npx serve .`) o abrirse localmente; GSAP y las fuentes se cargan por CDN.

## Versión XV años

`xv/index.html` es la misma animación adaptada a unos XV años y usa las imágenes de `assets/`. Cambia lo siguiente:

- Monograma: tiara con las letras "XV" entrelazadas.
- Escena 2: "Mis XV Años", el nombre de la quinceañera escrito a mano, una frase, una fecha opcional y destellos dorados.

Sus datos se editan en el `CONFIG` de ese archivo: `quinceanera`, `iniciales`, `textoSuperior`, `frase`, `fecha` y `marcaDeAgua`. Para grabar el Reel se usa `xv/index.html?reel=1`.
