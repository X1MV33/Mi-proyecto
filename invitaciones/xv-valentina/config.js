/* =====================================================================
   DATOS DE ESTA INVITACIÓN — es el único archivo que necesitas editar.
   Cambia textos, fechas, lugares, fotos y número de WhatsApp aquí.
   ===================================================================== */
window.CONFIG = {
  quinceanera: "Valentina",
  iniciales: ["X", "V"],          // letras del monograma (bajo la tiara)
  textoSuperior: "Mis XV Años",
  frase: "Te invito a celebrar conmigo",
  fecha: "14 · Marzo · 2027",     // opcional, p. ej. "14 · Marzo · 2027" (vacío = no se muestra)
  marcaDeAgua: "@perlainvitaciones",
  // ---- Datos de la invitación (secciones tras tocar la portada) — DATOS DE EJEMPLO, edítalos ----
  evento: {
    fechaISO: "2027-03-14T19:00:00",          // para la cuenta regresiva
    fechaTexto: "Sábado 14 de marzo de 2027",
    mensaje: "Hay momentos que se vuelven inolvidables cuando se comparten con quienes más queremos. Con la bendición de Dios y el amor de mis padres, te invito a celebrar mis quince años.",
    historiaTitulo: "Mi historia",
    historia: [
      "Quince años de risas, aprendizajes y sueños que hoy se convierten en un día inolvidable.",
      "Gracias a Dios y a mi familia por acompañarme en cada paso, y a ti por ser parte de mi vida.",
      "Me encantaría que me acompañes a celebrar el inicio de esta nueva etapa."
    ],
    padres: ["Ricardo Morales", "Gabriela Rivera"],
    padrinos: ["Andrés Fernández", "Lucía Fernández"],
    ceremonia: { titulo: "Misa", lugar: "Parroquia de San Juan Bautista", direccion: "Calle Principal 123, Centro", hora: "19:00 h",
                 mapa: "https://maps.google.com/?q=Parroquia+San+Juan+Bautista" },
    recepcion: { titulo: "Recepción", lugar: "Hacienda Los Arcos", direccion: "Camino Real km 4", hora: "20:30 h",
                 mapa: "https://maps.google.com/?q=Hacienda+Los+Arcos" },
    itinerario: [["19:00", "Misa"], ["20:30", "Recepción"], ["21:15", "Vals"], ["22:00", "Cena"], ["23:00", "¡A bailar!"]],
    vestimenta: "Formal",
    vestimentaNota: "Te sugerimos tonos neutros para acompañarme; yo llevaré verde olivo.",
    // Colores sugeridos para los invitados (se tocan y tiñen el atuendo de ejemplo)
    paleta: [
      { color: "#F3EEE2", nombre: "Marfil" },
      { color: "#E4D7BF", nombre: "Champaña" },
      { color: "#CDBA98", nombre: "Arena" },
      { color: "#A99682", nombre: "Taupe" },
      { color: "#C9C7C0", nombre: "Gris perla" }
    ],
    reservado: { color: "#5E6B32", nombre: "Verde olivo: reservado para la quinceañera" },
    regalos: "Tu presencia es mi mejor regalo. Si deseas obsequiarme algo, tendremos lluvia de sobres.",
    rsvpWhatsapp: "5210000000000",            // número con lada, sin + ni espacios
    rsvpFecha: "1 de marzo de 2027",
    cierre: "¡Te espero!",
    despedida: "Los espero",
    despedidaTexto: "con mucho cariño para celebrar juntos"
  },
  assetsPath: "../../assets/",
  // Fotos de la quinceañera (galería 3D, portada interna y cierre). Reemplázalas por las reales.
  fotos: ["fotos/foto1.jpg", "fotos/foto2.jpg", "fotos/foto3.jpg", "fotos/foto4.jpg", "fotos/foto5.jpg"],
  fotoPortada: 0,                 // índice de la foto en arco al abrir la invitación
  fotoOvalo: 1,                   // índice de la foto en el marco ovalado
  // Música: «Risk It All» – Bruno Mars, en dos pedazos.
  musicaPortada: "musica-inicio.mp3",  // intro y primera estrofa: suena al tocar la portada y abrir el sobre
  musica: "musica.mp3",                // desde el coro: entra al abrirse la invitación y se repite
  puertas: false,                 // true = después del sobre se abren las puertas de palacio en 3D
  duracion: 20,                   // duración del loop (s); toda la secuencia se escala
  numEstrellas: 12,
  numParticulas: 22,
  numMariposas: 3,
  numDestellos: 7
};
