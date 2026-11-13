/* =====================================================================
   DATOS DE ESTA INVITACIÓN — es el único archivo que necesitas editar.
   Cambia textos, fechas, lugares, fotos y número de WhatsApp aquí.
   ===================================================================== */
window.CONFIG = {
  novia: "Mariana",
  novio: "Diego",
  iniciales: ["M", "D"],          // letras del monograma
  textoSuperior: "Nuestra Boda",
  frase: "",                      // opcional, p. ej. "¡Nos casamos!" (vacío = no se muestra)
  fecha: "",                      // opcional, p. ej. "14 · Marzo · 2027" (vacío = no se muestra)
  marcaDeAgua: "TU MARCA · @tu_usuario",
  // ---- Datos de la invitación (secciones tras tocar la portada) — DATOS DE EJEMPLO, edítalos ----
  evento: {
    fechaISO: "2027-05-22T17:00:00",          // para la cuenta regresiva
    fechaTexto: "Sábado 22 de mayo de 2027",
    mensaje: "Con la bendición de Dios y de nuestros padres, tenemos el honor de invitarte a celebrar el día en que uniremos nuestras vidas.",
    familias: [
      { titulo: "Padres de la novia", nombres: ["Jorge Salinas", "Elena Ortiz"] },
      { titulo: "Padres del novio",   nombres: ["Manuel Castillo", "Patricia Luna"] },
      { titulo: "Padrinos",           nombres: ["Andrés y Lucía Fernández"] }
    ],
    ceremonia: { titulo: "Ceremonia", lugar: "Parroquia de San Juan Bautista", direccion: "Calle Principal 123, Centro", hora: "17:00 h",
                 mapa: "https://maps.google.com/?q=Parroquia+San+Juan+Bautista" },
    recepcion: { titulo: "Recepción", lugar: "Hacienda Los Arcos", direccion: "Camino Real km 4", hora: "19:00 h",
                 mapa: "https://maps.google.com/?q=Hacienda+Los+Arcos" },
    itinerario: [["17:00", "Ceremonia"], ["18:30", "Cóctel"], ["19:30", "Recepción"], ["20:30", "Primer baile"], ["21:00", "Cena"], ["22:30", "¡Fiesta!"]],
    vestimenta: "Formal",
    vestimentaNota: "Con cariño te pedimos reservar el color blanco para la novia.",
    regalos: "Tu presencia es nuestro mejor regalo. Si deseas obsequiarnos algo, tendremos lluvia de sobres.",
    rsvpWhatsapp: "5210000000000",            // número con lada, sin + ni espacios
    rsvpFecha: "1 de mayo de 2027",
    cierre: "¡Te esperamos!"
  },

  assetsPath: "../../assets/",
  duracion: 20,                   // duración del loop (s); toda la secuencia se escala
  numEstrellas: 12,
  numParticulas: 22,
  numMariposas: 3,
  numDestellos: 7
};
