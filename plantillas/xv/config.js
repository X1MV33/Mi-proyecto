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
  marcaDeAgua: "TU MARCA · @tu_usuario",
  // ---- Datos de la invitación (secciones tras tocar la portada) — DATOS DE EJEMPLO, edítalos ----
  evento: {
    fechaISO: "2027-03-14T19:00:00",          // para la cuenta regresiva
    fechaTexto: "Sábado 14 de marzo de 2027",
    mensaje: "Hay momentos que se vuelven inolvidables cuando se comparten con quienes más queremos. Con la bendición de Dios y el amor de mis padres, te invito a celebrar mis quince años.",
    padres: ["Ricardo Morales", "Gabriela Rivera"],
    padrinos: ["Andrés Fernández", "Lucía Fernández"],
    ceremonia: { titulo: "Misa", lugar: "Parroquia de San Juan Bautista", direccion: "Calle Principal 123, Centro", hora: "19:00 h",
                 mapa: "https://maps.google.com/?q=Parroquia+San+Juan+Bautista" },
    recepcion: { titulo: "Recepción", lugar: "Hacienda Los Arcos", direccion: "Camino Real km 4", hora: "20:30 h",
                 mapa: "https://maps.google.com/?q=Hacienda+Los+Arcos" },
    itinerario: [["19:00", "Misa"], ["20:30", "Recepción"], ["21:15", "Vals"], ["22:00", "Cena"], ["23:00", "¡A bailar!"]],
    vestimenta: "Formal",
    vestimentaNota: "El color rosa está reservado para la quinceañera.",
    regalos: "Tu presencia es mi mejor regalo. Si deseas obsequiarme algo, tendremos lluvia de sobres.",
    rsvpWhatsapp: "5210000000000",            // número con lada, sin + ni espacios
    rsvpFecha: "1 de marzo de 2027",
    cierre: "¡Te espero!"
  },
  assetsPath: "../../assets/",
  // Fotos de la quinceañera (galería 3D, portada interna y cierre). Reemplázalas por las reales.
  fotos: ["fotos/foto1.jpg", "fotos/foto2.jpg", "fotos/foto3.jpg", "fotos/foto4.jpg", "fotos/foto5.jpg"],
  fotoPortada: 0,                 // índice de la foto en arco al abrir la invitación
  fotoCierre: 4,                  // índice de la foto de fondo del cierre
  // Música: pon la ruta a tu canción (p. ej. "musica.mp3" dentro de /xv). Vacío = vals de caja musical generado en vivo.
  musica: "",
  duracion: 20,                   // duración del loop (s); toda la secuencia se escala
  numEstrellas: 12,
  numParticulas: 22,
  numMariposas: 3,
  numDestellos: 7
};
