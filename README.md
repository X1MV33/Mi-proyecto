# Mis invitaciones digitales

Aquí se guardan todas las invitaciones (plantillas y las que ya hiciste), con historial de cambios en GitHub.
Abre `index.html` (el catálogo) para ver la lista.

## Estructura

```
assets/                    ilustraciones compartidas (escenas, marcos, estrella, mariposa)
plantillas/
  xv/                      plantilla XV años  → index.html (motor) + config.js (datos) + fotos/
  boda/                    plantilla boda     → index.html (motor) + config.js (datos)
  boda-azul/               plantilla boda azul → index.html + config.js + intro.mp4 + fotos/
  baby-shower/             plantilla baby shower → index.html + config.js + arte/ (ilustraciones originales)
invitaciones/
  xv-valentina/            una invitación real: copia de la plantilla con sus datos y fotos
herramientas/publicar.py   prepara una invitación para publicarla como página web
index.html                 catálogo con la lista de plantillas e invitaciones
```

- **Datos:** cada invitación es una carpeta independiente. Sus datos están **solo** en `config.js`: nombres, fechas, lugares, WhatsApp, fotos, música y marca de agua.
- **Motor:** `index.html` contiene la animación y no hace falta tocarlo.
- **Independencia:** si mejoras una plantilla, las invitaciones ya entregadas no cambian.

## Crear una invitación nueva

1. Copia una plantilla dentro de `invitaciones/` con un nombre claro: `invitaciones/boda-ana-luis/`.
2. Edita `config.js` con los datos reales.
3. Pon las fotos en `fotos/` y escribe sus nombres en `CONFIG.fotos`.
4. Agrega una línea en el catálogo (`index.html` de la raíz).
5. Guarda los cambios en GitHub (commit + push).

También puedes pedírselo a Claude: «crea la invitación de XV de Sofía con estos datos…».

## Editar una invitación después

Abre su carpeta en `invitaciones/`, cambia `config.js` (o las fotos) y vuelve a publicarla. El historial de GitHub guarda cada versión, por si necesitas regresar a una anterior.

## Publicar para tus invitados

- **Como página de Claude:**
  1. Ejecuta `python3 herramientas/publicar.py invitaciones/<nombre> salida/<nombre>`, o pídeselo a Claude.
  2. Publica la carpeta de salida.
  3. Compártela desde el menú *Compartir* de la página.
  4. Al volver a publicar desde la misma conversación, el link no cambia.
- **Con GitHub Pages** (link público, sin cuenta):
  1. En GitHub, ve a *Settings → Pages*.
  2. Elige la rama principal y la carpeta `/ (root)`.
  3. Cada invitación queda en `https://<usuario>.github.io/<repo>/invitaciones/<nombre>/`.

## Funciones de la plantilla XV

- **Portada:** animada (loop de 20 s; `?reel=1` sirve para grabar el Reel).
- **Apertura:** al tocar la portada se abren puertas de palacio en 3D.
- **Fotos:**
  - Foto en arco con marco dorado que se inclina en 3D.
  - Galería 3D giratoria con visor de fotos.
- **Música:**
  - Si pones la ruta en `CONFIG.musica`, suena tu canción.
  - Si lo dejas vacío, suena un vals de caja musical original generado en vivo.
- **Efectos:** pétalos que caen en 3D, destellos al tocar y secciones que entran girando.
- **Fecha:** cuenta regresiva con números que giran, y botones para Google Calendar y Outlook.
- **Confirmación:** formulario (nombre, número de personas y mensaje) que abre WhatsApp con el texto ya escrito.

## Ilustraciones

Los PNG de `assets/` son placeholders. Para cambiarlos, reemplaza cada archivo por tu ilustración con el mismo nombre (PNG con transparencia):

- **Escena 1:** `e1_fondo`, `e1_marco_izq`, `e1_marco_der`, `e1_cenefa`, `estrella.svg`.
- **Escena 2:** `e2_cielo`, `e2_montanas`, `e2_cascadas`, `e2_hacienda`, `e2_marco_sup`, `e2_marco_inf`, `e2_marco_lat`, `mariposa`.

## Funciones de la plantilla Boda azul

- **Intro:**
  1. Sobre a pantalla completa con estampado toile azul y sello de cera. Al tocar el sello, se ilumina, se eleva y se desvanece, y las cuatro solapas se abren despacio.
  2. Detrás de las solapas ya está corriendo el video animado (`intro.mp4`), sin la interfaz de la grabación ni las letras blancas.
  3. La cámara sube al cielo: aparecen los nombres y los fuegos artificiales.
  4. Al tocar la estrella (o solos a los pocos segundos) se hace zoom a la estrella y se abre la invitación.
- **Atajo para editar:** `?invitacion=1` salta la intro.
- **Secciones:**
  - Portada con video en blanco y negro que se repite (`videoPortada` en `config.js`; si se deja vacío, usa la foto).
  - Sobre azul con forro de flores que se abre y saca la tarjeta.
  - Cuenta regresiva.
  - Padres y padrinos.
  - Ceremonia y recepción en polaroids.
  - Itinerario en tarjeta azul marino con íconos (se elige solo por la actividad o con un tercer dato: `["22:00", "Fiesta", "fiesta"]`).
  - Fondo toile azul grisáceo, tarjetas de papel rasgado, cartas antiguas, sellos de cera y etiquetas con borla dorada.
  - Carrete tipo collage: marcos de película en blanco y negro, los novios recortados con borde blanco y una etiqueta con sus nombres (`fotoRecorte` y `carrete` en `config.js`).
  - Código de vestimenta: al tocar un color, el vestido y el traje se pintan de ese color (o se muestra el diseño de `diseno` en `paleta`).
  - Regalos (mesa de regalos y CLABE para copiar).
  - Confirmación por WhatsApp.
  - Frase en bloque azul y tarjeta final «Solo adultos / ¡Muchas gracias!» (opcionales en `config.js`).
  - Cierre.

## Funciones de la plantilla Baby shower

- **Ilustraciones:** todas originales, en acuarela (globo, nubes, osito aviador, avión, estrella, moño, banderín, pueblo, papel). Están en `arte/`.
- **Inicio:**
  1. Pantalla «Toca para comenzar» (así la música suena desde el principio).
  2. Cielo con nubes en capas, globos a lo lejos y destellos dorados; se escribe el nombre en cursiva.
  3. El avión con el osito llega volando en curva, saluda y se va.
  4. Sube el globo grande con el sobre colgando.
- **Apertura:** al tocar el sobre, el globo lo suelta, el moño se desata, se abre la solapa y la carta crece hasta ser la invitación.
- **Invitación:** mensaje, cuenta regresiva en nubes, cuándo y dónde, itinerario, mesa de regalos, confirmación por WhatsApp y cierre.
- **Música:** canción de cuna original de caja musical; o su canción en `musica` de `config.js`.
- **Atajo para editar:** `?invitacion=1` salta la escena.
