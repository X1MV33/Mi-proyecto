/* =====================================================================
   DATOS DE ESTA INVITACIÓN: es el único archivo que necesitas editar.
   Cambia textos, fecha, lugar, regalos y número de WhatsApp aquí.
   ===================================================================== */
window.CONFIG = {
  bebe: "Mateo",                         // nombre del bebé (o de la mamá)
  textoSuperior: "Baby Shower",
  kicker: "Celebremos la llegada de",
  frase: "Volando hacia nuestros brazos",
  subtitulo: "¡Ya viene en camino!",
  padres: "Ana & Luis",
  marcaDeAgua: "@perlainvitaciones",
  musica: "",                            // ruta a su canción (p. ej. "cancion.mp3"); vacío = canción de cuna de caja musical
  assetsArte: "arte/",
  // Fotos de las polaroids (opcional). Vacío = ilustración del osito.
  fotos: { papas: "fotos/pareja-campo.jpg", eco: "fotos/espera-1.jpg" },
  // Sección «Te estamos esperando»: video (sin sonido, se repite) y tiras de fotos. Vacíos = no se muestra.
  // Clip que se reproduce solo, sin sonido y en bucle (después de la portada). Vacío = no se muestra.
  pelicula: "fotos/pelicula.mp4",
  peliculaPoster: "fotos/pelicula.jpg",
  peliculaTitulo: "Nuestra pequeña película",
  esperaTitulo: "Te estamos esperando",
  video: "fotos/espera.mp4",
  videoPoster: "fotos/espera.jpg",
  // Collage tipo álbum del celular (5 fotos) + pareja recortada con borde blanco
  album: ["fotos/pareja-beso.jpg", "fotos/pareja-corren.jpg", "fotos/pareja-manos.jpg", "fotos/pareja-abrazo.jpg", "fotos/pareja-sepia.jpg"],
  fotoRecorte: "fotos/pareja-recorte.webp",
  fondoRecorte: "fotos/pareja-mar.jpg",     // foto detrás del recorte (se usa solo su parte de arriba: cielo)
  fotoMapa: "fotos/pareja-mar.jpg",      // fondo de la sección «¿Cómo llegar?» (vacío = no se muestra)

  // ---- Datos del evento: DATOS DE EJEMPLO, edítalos ----
  evento: {
    fechaISO: "2027-04-17T16:00:00",
    fechaTexto: "Sábado 17 de abril de 2027",
    hora: "16:00 h",
    lugar: "Jardín Las Nubes",
    direccion: "Av. de los Globos 245, Col. Del Valle",
    mapa: "https://maps.google.com/?q=Jardin+Las+Nubes",
    mensaje: "Con mucha ilusión esperamos la llegada de nuestro bebé y queremos compartir contigo este momento tan especial. ¡Acompáñanos a celebrar!",
    itinerario: [["16:00", "Bienvenida"], ["16:45", "Juegos"], ["17:30", "Merienda"], ["18:30", "Apertura de regalos"]],
    vestimenta: "Casual · tonos pastel",
    rifa: { titulo: "Rifa de pañales", texto: "Trae un paquete de pañales de cualquier etapa y participa en la rifa de un regalo sorpresa." },   // o null
    cuentos: { titulo: "Cuentos para el bebé", texto: "En lugar de tarjeta, regálale un cuento con una dedicatoria para empezar su librero." },  // o null
    regalos: {
      texto: "Tu presencia es nuestro mejor regalo. Si deseas consentir a nuestro bebé, aquí tienes algunas opciones.",
      mesa: [{ nombre: "Mesa de regalos", url: "https://www.amazon.com.mx/baby-reg/homepage" }],   // deja [] si no hay
      sugerencia: "Pañales etapa 2 y 3 · Lluvia de sobres"                                    // o ""
    },
    rsvpWhatsapp: "5210000000000",
    rsvpFecha: "10 de abril de 2027",
    cierre: "¡Te esperamos!"
  }
};
