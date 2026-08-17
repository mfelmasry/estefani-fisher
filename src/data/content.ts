export type Tema =
  | "relaciones"
  | "familia"
  | "trabajo"
  | "autoestima"
  | "ansiedad"
  | "cambios"
  | "duelo"
  | "proposito";

export const TEMAS: { slug: Tema; label: string; blurb: string }[] = [
  {
    slug: "relaciones",
    label: "Relaciones",
    blurb: "Vínculos, pareja, amistad y lo que se juega entre dos.",
  },
  {
    slug: "familia",
    label: "Familia",
    blurb: "Lo que heredamos, lo que repetimos y lo que decidimos cambiar.",
  },
  {
    slug: "trabajo",
    label: "Trabajo",
    blurb: "Cansancio, sentido, límites y el peso de rendir.",
  },
  {
    slug: "autoestima",
    label: "Autoestima",
    blurb: "La voz interna y la manera en que te tratas.",
  },
  {
    slug: "ansiedad",
    label: "Ansiedad",
    blurb: "Cuando la cabeza va más rápido que el cuerpo.",
  },
  {
    slug: "cambios",
    label: "Cambios",
    blurb: "Empezar de nuevo, mudarse de vida, soltar certezas.",
  },
  {
    slug: "duelo",
    label: "Duelo",
    blurb: "Ausencias, despedidas y lo que sigue doliendo.",
  },
  {
    slug: "proposito",
    label: "Propósito",
    blurb: "Preguntas grandes sobre hacia dónde quieres ir.",
  },
];

export type Carta = {
  slug: string;
  title: string;
  tema: Tema;
  minutes: number;
  excerpt: string;
  paragraphs: string[];
};

export const CARTAS: Carta[] = [
  {
    slug: "a-quien-hoy-necesita-una-pausa",
    title: "A quien hoy necesita hacer una pausa",
    tema: "cambios",
    minutes: 3,
    excerpt: "No todo lo que pesa se resuelve hoy. A veces basta con dejar de correr un momento.",
    paragraphs: [
      "Sé que llevas días sosteniendo cosas que nadie ve. Que respondes mensajes, cumples, apareces, sonríes, y por dentro hay algo que pide silencio.",
      "Quiero decirte que puedes parar. No para siempre. Solo ahora. Solo mientras lees esto.",
      "Nadie se cae por descansar. Nos caemos por sostener demasiado tiempo sin soltar.",
      "Hoy no tienes que resolver tu vida. Hoy puedes respirar y eso ya es suficiente.",
    ],
  },
  {
    slug: "a-quien-esta-empezando-de-nuevo",
    title: "A quien está empezando de nuevo",
    tema: "cambios",
    minutes: 4,
    excerpt: "Empezar otra vez no es retroceder. Es aceptar que ya no cabías en donde estabas.",
    paragraphs: [
      "Empezar de nuevo casi nunca se siente heroico. Se siente raro. Se siente incómodo. A veces se siente como pérdida.",
      "Pero hay algo importante: no estás volviendo al principio. Estás volviendo con todo lo que aprendiste.",
      "Date permiso de hacerlo lento. Lo que se construye con calma suele sostenerse mejor.",
    ],
  },
  {
    slug: "a-quien-necesita-respirar",
    title: "A quien necesita respirar",
    tema: "ansiedad",
    minutes: 2,
    excerpt: "Una carta breve para cuando el pecho se siente apretado.",
    paragraphs: [
      "Deja el teléfono un momento. Apoya los pies en el piso. Siente el peso de tu cuerpo sostenido por algo firme.",
      "Inhala contando cuatro. Sostén dos. Exhala contando seis. Otra vez.",
      "Tu cuerpo no está en peligro ahora mismo. Está cansado, que no es lo mismo.",
      "Quédate aquí unos segundos más. Yo espero contigo.",
    ],
  },
  {
    slug: "a-quien-se-esta-despidiendo",
    title: "A quien se está despidiendo",
    tema: "duelo",
    minutes: 4,
    excerpt: "El duelo no se supera: se acomoda, se aprende, se camina.",
    paragraphs: [
      "Nadie nos enseña a despedirnos. Nos enseñan a lograr, a avanzar, a seguir. Pero no a soltar.",
      "El duelo no tiene calendario. No hay una fecha en la que “deberías” estar mejor.",
      "Extrañar también es una forma de amar. Y llorar no es retroceder.",
    ],
  },
  {
    slug: "a-quien-siempre-esta-para-todos",
    title: "A quien siempre está para todos",
    tema: "relaciones",
    minutes: 3,
    excerpt: "Sobre el cansancio de quienes cuidan y casi nunca son cuidados.",
    paragraphs: [
      "Tú eres esa persona a la que todos escriben cuando algo se rompe. Y estoy segura de que lo haces bien.",
      "Pero quiero preguntarte algo: ¿quién sostiene a quien sostiene?",
      "Poner un límite no te vuelve fría. Te vuelve honesta.",
    ],
  },
  {
    slug: "a-quien-le-cuesta-quererse",
    title: "A quien le cuesta quererse",
    tema: "autoestima",
    minutes: 4,
    excerpt: "Sobre la voz interna que exige y nunca reconoce.",
    paragraphs: [
      "Hay una voz dentro de ti que revisa todo lo que haces y casi nunca aplaude.",
      "Esa voz aprendió de algún lugar. No nació contigo.",
      "Quererte no es repetirte frases bonitas frente al espejo. Es empezar a hablarte como le hablarías a alguien que quieres.",
    ],
  },
];

export const CARTA_DE_HOY = "a-quien-le-cuesta-quererse";

export const PREGUNTA_DEL_DIA = "¿Qué te haría bien soltar esta semana?";

export type Ejercicio = {
  slug: string;
  title: string;
  tema: Tema;
  minutes: number;
  blurb: string;
  prompt: string;
};

export const EJERCICIOS: Ejercicio[] = [
  {
    slug: "la-carta-que-no-vas-a-enviar",
    title: "La carta que no vas a enviar",
    tema: "relaciones",
    minutes: 15,
    blurb: "Escribir para ordenar lo que no se puede decir todavía.",
    prompt:
      "Escribe la carta que no vas a enviar. Di lo que duele, lo que extrañas y lo que ya no quieres cargar. Nadie más la va a leer.",
  },
  {
    slug: "anclaje-5-4-3-2-1",
    title: "Anclaje 5-4-3-2-1",
    tema: "ansiedad",
    minutes: 4,
    blurb: "Un ejercicio para volver al presente cuando la ansiedad crece.",
    prompt:
      "Nombra 5 cosas que ves, 4 que puedes tocar, 3 que oyes, 2 que hueles y 1 que saboreas. Luego escribe cómo está tu cuerpo ahora.",
  },
  {
    slug: "tres-cosas-que-si-sostuve-hoy",
    title: "Tres cosas que sí sostuve hoy",
    tema: "autoestima",
    minutes: 5,
    blurb: "Un ejercicio breve de reconocimiento al final del día.",
    prompt: "Escribe tres cosas, por pequeñas que sean, que sí sostuviste hoy. Incluye una que nadie más vio.",
  },
  {
    slug: "lo-que-si-depende-de-mi",
    title: "Lo que sí depende de mí",
    tema: "trabajo",
    minutes: 8,
    blurb: "Separar lo que puedo cambiar de lo que solo puedo acompañar.",
    prompt:
      "Haz dos listas: lo que sí depende de ti y lo que no. Después elige una sola acción pequeña para esta semana.",
  },
  {
    slug: "mapa-de-mi-semana-emocional",
    title: "Mapa de mi semana emocional",
    tema: "cambios",
    minutes: 10,
    blurb: "Ver de lejos lo que de cerca abruma.",
    prompt:
      "Recorre los últimos siete días. ¿Qué te pesó, qué te alivió, qué se repitió? Escríbelo como un mapa, no como un juicio.",
  },
];

export type PodcastEpisode = {
  slug: string;
  title: string;
  tema?: Tema;
  kind: "conversacion" | "reflexion";
  minutes: number;
  blurb: string;
  featured?: boolean;
};

export const PODCAST: PodcastEpisode[] = [
  {
    slug: "cuando-el-cuerpo-dice-basta",
    title: "Cuando el cuerpo dice basta",
    kind: "conversacion",
    minutes: 48,
    blurb: "Una conversación larga sobre el agotamiento que no se cura durmiendo.",
    featured: true,
  },
  {
    slug: "lo-que-no-dijimos-en-casa",
    title: "Lo que no dijimos en casa",
    tema: "familia",
    kind: "conversacion",
    minutes: 52,
    blurb: "Sobre las conversaciones pendientes con la familia y lo que heredamos sin darnos cuenta.",
  },
  {
    slug: "respira-tres-minutos",
    title: "Respira: tres minutos para volver",
    tema: "ansiedad",
    kind: "reflexion",
    minutes: 3,
    blurb: "Una reflexión breve para regresar al cuerpo cuando la cabeza va muy rápido.",
  },
  {
    slug: "no-tienes-que-ser-util",
    title: "No tienes que ser útil todo el tiempo",
    tema: "autoestima",
    kind: "reflexion",
    minutes: 5,
    blurb: "Cinco minutos sobre el descanso sin culpa.",
  },
  {
    slug: "empezar-otra-vez",
    title: "Empezar otra vez a los treinta, cuarenta, cincuenta",
    tema: "cambios",
    kind: "conversacion",
    minutes: 44,
    blurb: "Conversación sobre reinventarse fuera de tiempo.",
  },
  {
    slug: "el-duelo-tambien-tiene-dias-buenos",
    title: "El duelo también tiene días buenos",
    tema: "duelo",
    kind: "reflexion",
    minutes: 5,
    blurb: "Reflexión corta sobre permitirse estar bien mientras se extraña.",
  },
];

export const NAV = [
  { to: "/historias", label: "Historias" },
  { to: "/cartas", label: "Cartas" },
  { to: "/biblioteca", label: "Biblioteca" },
  { to: "/podcast", label: "Podcast" },
  { to: "/comunidad", label: "Comunidad" },
  { to: "/terapia", label: "Terapia" },
];

export function temaLabel(slug: Tema) {
  return TEMAS.find((t) => t.slug === slug)?.label ?? slug;
}

export function cartaBySlug(slug: string) {
  return CARTAS.find((c) => c.slug === slug);
}

export function ejerciciosByTema(tema: Tema) {
  return EJERCICIOS.filter((e) => e.tema === tema);
}

export function cartasByTema(tema: Tema) {
  return CARTAS.filter((c) => c.tema === tema);
}
