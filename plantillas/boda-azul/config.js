/* =====================================================================
   DATOS DE ESTA INVITACIÓN: es el único archivo que necesitas editar.
   Cambia textos, fechas, lugares, fotos y número de WhatsApp aquí.
   ===================================================================== */
window.CONFIG = {
  novia: "Daniela",
  novio: "Alejandro",
  iniciales: ["D", "A"],              // monograma y sello de cera
  marcaDeAgua: "@perlainvitaciones",

  // Intro: video animado. Al terminar sube al cielo, salen los nombres,
  // fuegos artificiales, y se hace zoom a una estrella para abrir la invitación.
  video: "intro.mp4",
  poster: "poster.jpg",
  textoCielo: "Nuestra boda",           // texto pequeño sobre los nombres en el cielo

  // Fotos (carrete). Reemplázalas por las de la pareja.
  fotos: ["fotos/foto1.jpg", "fotos/foto2.jpg", "fotos/foto3.jpg", "fotos/foto4.jpg"],
  fotoPortada: 0,                      // foto de la portada
  fotoCeremonia: 1,                    // polaroid de ceremonia
  fotoRecepcion: 2,                    // polaroid de recepción
  fotoCierre: 3,                       // foto del cierre
  fotoSobre: 2,                        // foto que sale del sobre
  fotoRecorte: "fotos/novios-recorte.webp", // novios recortados con borde blanco (carrete)
  // marcos del carrete: [número de foto, encuadre]
  carrete: [[0, "50% 30%"], [3, "55% 45%"], [1, "50% 40%"], [2, "45% 45%"], [3, "30% 60%"], [0, "60% 55%"]],
  musica: "cancion.mp3",               // su canción (se repite sola); vacío = vals de caja musical
  cancion: "Young and Beautiful",      // nombre de la canción (referencia)

  // ---- Datos de la invitación: DATOS DE EJEMPLO, edítalos ----
  evento: {
    fechaISO: "2027-06-19T17:00:00",
    fechaTexto: "Sábado 19 de junio de 2027",
    ciudad: "Guadalajara, Jalisco",
    frase: "Y en medio de todo, te encontré a ti.",
    mensajeTarjeta: "Dos almas, un mismo destino. Acompáñanos a celebrar uno de los días más especiales de nuestras vidas.",
    saludo: "Queridos familiares y amigos",
    cita: { texto: "Ponme como un sello sobre tu corazón", ref: "Cantares 8:6" },   // o null
    mensaje: "Con la bendición de Dios y de nuestros padres, tenemos el honor de invitarte a celebrar el día en que uniremos nuestras vidas. Será un momento muy especial y queremos compartirlo contigo.",
    familias: [
      { titulo: "Padres de la novia", nombres: ["Jorge Salinas", "Elena Ortiz"] },
      { titulo: "Padres del novio",   nombres: ["Manuel Castillo", "Patricia Luna"] },
      { titulo: "Padrinos",           nombres: ["Andrés y Lucía Fernández"] }
    ],
    ceremonia: { titulo: "Ceremonia", lugar: "Parroquia de San Juan Bautista", direccion: "Calle Principal 123, Centro", hora: "17:00 h",
                 mapa: "https://maps.google.com/?q=Parroquia+San+Juan+Bautista" },
    recepcion: { titulo: "Recepción", lugar: "Jardín Los Arcos", direccion: "Camino Real km 4", hora: "19:00 h",
                 mapa: "https://maps.google.com/?q=Jardin+Los+Arcos" },
    // [hora, actividad, ícono opcional: ceremonia | coctel | brindis | baile | cena | fiesta | cafe | pastel | anillos]
    itinerario: [["17:00", "Ceremonia religiosa"], ["18:30", "Cóctel de bienvenida"], ["19:30", "Brindis"],
                 ["20:00", "Primer baile"], ["21:00", "Cena"], ["22:00", "¡A bailar!", "fiesta"], ["00:30", "¿Un café?"]],
    vestimenta: "Formal de noche",
    vestimentaNota: "Caballeros de traje oscuro; damas de vestido largo. Nos encantará verte en tonos azules.",
    // al tocar un color, el dibujo se pinta de ese color; si agregas  diseno: "disenos/archivo.jpg"  se muestra esa imagen
    paleta: [
      { color: "#14213D", nombre: "Azul marino" },
      { color: "#2C4A7E", nombre: "Azul rey" },
      { color: "#6F8DB8", nombre: "Azul acero" },
      { color: "#A9BCD6", nombre: "Azul cielo" }
    ],
    reservado: { color: "#FAF8F2", nombre: "Blanco: reservado para la novia" },
    regalos: {
      texto: "Tu compañía es lo más importante. Si deseas hacernos un obsequio, lo recibiremos con mucho cariño.",
      mesa: [{ nombre: "Mesa de regalos", url: "https://www.liverpool.com.mx/" }],   // deja [] si no hay
      cuenta: { banco: "BBVA", titular: "Daniela Salinas", clabe: "012 345 678 901 234 567" } // o null
    },
    historia: "Desde que estamos juntos, todo tiene otro color. Cada foto guarda un recuerdo, una risa, un momento que no queremos olvidar. Gracias por acompañarnos en esta historia.",
    frase2: "La vida no sería igual sin familia a la que llamar amigos, y amigos a los que llamar familia.",
    notaFinal: { titulo: "Solo adultos", texto: "Esperamos contar con tu presencia", gracias: "¡Muchas gracias!" },   // o null
    rsvpWhatsapp: "5210000000000",
    rsvpFecha: "31 de mayo de 2027",
    cierre: "Con amor"
  }
};
