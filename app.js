const elements = {
  space: {
    index: "Elemento 1 de 5", title: "Espacio", subtitle: "El escenario del aprendizaje", accent: "#e85d3f",
    lead: "El espacio no es un fondo neutro: es el lugar físico donde docentes y estudiantes construyen la experiencia de aprender.",
    ideas: [
      ["Lee el contexto", "Un aula rural y una urbana ofrecen recursos y relaciones distintas. Observar el entorno permite aprovechar lo disponible y vincular actores locales."],
      ["Mueve para conectar", "La disposición no tiene que permanecer estática. Organizar grupos heterogéneos favorece la colaboración y reduce barreras de aprendizaje."]
    ],
    question: "Buscas que un grupo contraste ideas. ¿Qué disposición favorece mejor ese propósito?",
    options: ["Filas mirando al tablero", "Equipos donde puedan verse", "Puestos separados al azar"], correct: 1,
    feedback: "Al poder mirarse, las y los estudiantes intercambian razones, construyen sobre otras voces y asumen un rol activo.",
    reflection: "¿La distribución física de tus pupitres facilita hoy que tus estudiantes se miren para debatir o fomenta la pasividad?"
  },
  time: {
    index: "Elemento 2 de 5", title: "Tiempo", subtitle: "El recurso más valioso y finito", accent: "#f2b134",
    lead: "Cada minuto del aula es una oportunidad que no vuelve. Gestionarlo es proteger el tiempo dedicado a pensar, crear e indagar.",
    ideas: [
      ["Maximiza el aprendizaje", "La mayor parte de la jornada debe dedicarse al aprendizaje activo, la indagación y la reflexión sobre lo aprendido."],
      ["Reduce la fricción", "Rutinas de inicio, desarrollo y cierre, junto con instrucciones ECOS claras y secuenciales, convierten transiciones de minutos en segundos."]
    ],
    question: "Una transición se repite cada día y toma demasiado. ¿Qué acción cuida mejor el tiempo?",
    options: ["Hablar más fuerte cada vez", "Improvisar una instrucción distinta", "Instalar una rutina breve y predecible"], correct: 2,
    feedback: "Una rutina conocida reduce instrucciones repetidas y libera más minutos para el aprendizaje efectivo.",
    reflection: "Si sumaras hoy los minutos de instrucciones repetitivas y organización, ¿cuánto aprendizaje efectivo se está perdiendo?"
  },
  subject: {
    index: "Elemento 3 de 5", title: "Área enseñada", subtitle: "El vehículo del propósito", accent: "#5c67d8",
    lead: "Va más allá del plan de estudios: integra recursos, materiales y didácticas para conectar el conocimiento con el mundo real.",
    ideas: [
      ["Usa el saber con propósito", "En inglés, el idioma se usa de forma activa y auténtica. En STEM, se indagan fenómenos y problemas reales del contexto."],
      ["Diseña resultados", "Planificar no es acumular actividades. El aprendizaje cobra sentido cuando los conceptos se convierten en habilidades aplicables."]
    ],
    question: "¿Cuál evidencia muestra mejor que el aprendizaje sucedió?",
    options: ["Un cuaderno completamente lleno", "Una solución argumentada a un problema local", "Muchas actividades terminadas"], correct: 1,
    feedback: "Una aplicación situada hace visible la comprensión y conecta el saber conceptual con una habilidad para la vida.",
    reflection: "¿Tu planeación busca rellenar cuadernos o que tus estudiantes usen lo aprendido para transformar su comunidad?"
  },
  students: {
    index: "Elemento 4 de 5", title: "Estudiantes", subtitle: "Las y los protagonistas del aula", accent: "#20a680",
    lead: "Sin su voz, participación y sentido de posibilidad, la labor docente pierde su propósito. El aprendizaje se lidera con ellas y ellos.",
    ideas: [
      ["Diseña para la diversidad", "Ritmos, talentos y necesidades son diferentes. Un aula inclusiva ofrece rutas para que todas las personas participen equitativamente."],
      ["Haz seguro el error", "Equivocarse es un paso natural del aprendizaje. La confianza elimina el miedo al castigo o a la burla y abre espacio al liderazgo."]
    ],
    question: "Una estudiante dice: “No entendí”. ¿Qué respuesta construye seguridad?",
    options: ["Ya lo expliqué dos veces", "Gracias por decirlo; probemos otra ruta", "Pregunta a alguien después"], correct: 1,
    feedback: "Agradecer la voz y ofrecer otra ruta normaliza la dificultad, sostiene expectativas altas y cuida la confianza.",
    reflection: "¿Tus estudiantes se sienten seguros al decir “no entendí” o guardan silencio para evitar ser expuestos?"
  },
  eco: {
    index: "Elemento 5 de 5", title: "Rol de Eco", subtitle: "El liderazgo que habilita el cambio", accent: "#1976b9",
    lead: "Tu rol articula el sistema: lideras y tomas decisiones pedagógicas sobre el espacio, el tiempo y las interacciones para facilitar el aprendizaje.",
    ideas: [
      ["Aprende mientras enseñas", "Observarte de manera crítica, reconocer tus emociones con herramientas de autorregulación como RULER y ajustar estrategias al contexto también es parte de liderar."],
      ["Modela liderazgo colectivo", "Tu presencia, entonación, lenguaje corporal y empatía construyen seguridad. Las altas expectativas muestran a tus estudiantes cuán capaces son."]
    ],
    question: "El grupo propone una ruta distinta para resolver el reto. ¿Qué hace un liderazgo que habilita?",
    options: ["La descarta para mantener el control", "Escucha, pregunta y acuerda criterios", "Entrega toda la responsabilidad sin guía"], correct: 1,
    feedback: "Facilitar no es desaparecer ni controlar: es sostener el propósito, escuchar y abrir condiciones para el liderazgo estudiantil.",
    reflection: "¿Te posicionas como la única fuente de conocimiento o como guía que empodera a sus estudiantes para liderar su desarrollo?"
  }
};

const connections = {
  "space-time": ["Espacio + tiempo", "Una disposición conocida reduce las transiciones: mover menos sin propósito deja más minutos para colaborar."],
  "space-students": ["Espacio + estudiantes", "La forma de agruparse puede ampliar voces, facilitar apoyos y hacer visible que todas las personas pertenecen."],
  "space-subject": ["Espacio + área enseñada", "La disposición debe responder a lo que se aprende: investigar, conversar, experimentar o crear requieren escenarios distintos."],
  "eco-space": ["Espacio + rol de Eco", "Quien facilita lee el contexto y transforma el mobiliario en una decisión pedagógica, no decorativa."],
  "students-time": ["Estudiantes + tiempo", "Rutinas claras aumentan autonomía: el grupo sabe cómo actuar y aprovecha más tiempo para aprender."],
  "subject-time": ["Área enseñada + tiempo", "Priorizar evidencias de aprendizaje evita llenar la clase de tareas y protege el tiempo para pensar con profundidad."],
  "eco-time": ["Rol de Eco + tiempo", "Las instrucciones claras y el modelamiento convierten el liderazgo docente en minutos efectivos de aprendizaje."],
  "students-subject": ["Estudiantes + área enseñada", "El conocimiento cobra sentido cuando dialoga con la diversidad, la voz y los problemas reales de quienes aprenden."],
  "eco-students": ["Rol de Eco + estudiantes", "La seguridad emocional y las altas expectativas permiten que la voz estudiantil se convierta en liderazgo."],
  "eco-subject": ["Rol de Eco + área enseñada", "Facilitar implica traducir el currículo en experiencias retadoras, situadas y posibles para el grupo."]
};

const visited = new Set();
let current = null;
const intro = document.querySelector("#intro");
const app = document.querySelector("#app");
const detail = document.querySelector("#detail");
const detailContent = document.querySelector("#detail-content");

document.querySelector("#enter-button").addEventListener("click", () => {
  intro.hidden = true;
  app.hidden = false;
  app.classList.add("is-entering");
  document.querySelector("#mapa").focus({ preventScroll: true });
});

document.querySelector("#help-button").addEventListener("click", (event) => {
  const tip = document.querySelector("#help-tip");
  tip.hidden = !tip.hidden;
  event.currentTarget.setAttribute("aria-expanded", String(!tip.hidden));
});

document.querySelectorAll(".hotspot").forEach(button => {
  button.addEventListener("click", () => openElement(button.dataset.element));
});

function openElement(key) {
  current = key;
  const data = elements[key];
  visited.add(key);
  document.querySelectorAll(".hotspot").forEach(button => {
    button.classList.toggle("is-active", button.dataset.element === key);
    if (visited.has(button.dataset.element)) button.classList.add("is-visited");
  });
  document.querySelectorAll(".routes path").forEach(path => {
    path.classList.toggle("is-active", path.dataset.route === key);
    path.style.setProperty("--route-color", data.accent);
  });

  const fragment = document.querySelector("#detail-template").content.cloneNode(true);
  fragment.querySelector(".detail__count").textContent = data.index;
  fragment.querySelector(".detail__title").textContent = data.title;
  fragment.querySelector(".detail__subtitle").textContent = data.subtitle;
  fragment.querySelector(".detail__lead").textContent = data.lead;
  fragment.querySelector(".detail__ideas").innerHTML = data.ideas.map(([title, copy]) => `<article class="idea"><h4>${title}</h4><p>${copy}</p></article>`).join("");
  fragment.querySelector(".decision__question").textContent = data.question;
  const options = fragment.querySelector(".decision__options");
  data.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => answerDecision(index, data, options));
    options.append(button);
  });
  fragment.querySelector(".reflection p").textContent = data.reflection;
  fragment.querySelector(".detail__next").addEventListener("click", closeDetail);
  detailContent.replaceChildren(fragment);
  detail.style.setProperty("--accent", data.accent);
  detail.hidden = false;
  detail.scrollTop = 0;
  document.querySelector("#detail-close").focus({ preventScroll: true });
  updateProgress();
}

function answerDecision(choice, data, container) {
  [...container.children].forEach((button, index) => {
    if (choice === data.correct) button.disabled = true;
    if (index === choice) button.classList.add("is-selected");
  });
  if (choice !== data.correct) container.children[choice].disabled = true;
  const feedback = container.nextElementSibling;
  feedback.innerHTML = choice === data.correct ? `<strong>Buena decisión.</strong> ${data.feedback}` : `<strong>Mira de nuevo el propósito.</strong> ${data.feedback}`;
  feedback.hidden = false;
}

function closeDetail() {
  detail.hidden = true;
  document.querySelectorAll(".hotspot").forEach(button => button.classList.remove("is-active"));
  document.querySelectorAll(".routes path").forEach(path => path.classList.remove("is-active"));
  if (current) document.querySelector(`[data-element="${current}"]`).focus({ preventScroll: true });
}

document.querySelector("#detail-close").addEventListener("click", closeDetail);
document.addEventListener("keydown", event => {
  if (detail.hidden) return;
  if (event.key === "Escape") closeDetail();
  if (event.key === "Tab") {
    const focusable = [...detail.querySelectorAll("button:not(:disabled), [href], [tabindex]:not([tabindex='-1'])")];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

function updateProgress() {
  const count = visited.size;
  document.querySelector("#progress-count").textContent = count;
  document.querySelector("#progress-bar").style.transform = `scaleX(${count / 5})`;
  updateConnection();
  if (count === 5) {
    document.querySelector("#closing-locked").hidden = true;
    document.querySelector("#closing-content").hidden = false;
  }
}

function updateConnection() {
  if (visited.size < 2) return;
  const latest = current;
  const previous = [...visited].filter(item => item !== latest).at(-1);
  const key = [latest, previous].sort().join("-");
  const result = connections[key];
  if (!result) return;
  document.querySelector("#connection-copy").textContent = "Los elementos se potencian cuando las decisiones comparten un propósito.";
  document.querySelector("#connection-board").innerHTML = `<article class="connection-result"><div class="connection-result__tags"><span>${elements[previous].title}</span><i></i><span>${elements[latest].title}</span></div><h3>${result[0]}</h3><p>${result[1]}</p></article>`;
}

document.querySelectorAll(".thought").forEach(button => {
  button.addEventListener("click", () => {
    const prompt = document.querySelector(`#${button.dataset.thought}-prompt`);
    prompt.hidden = !prompt.hidden;
    button.setAttribute("aria-expanded", String(!prompt.hidden));
  });
});

document.querySelector("#restart-button").addEventListener("click", () => {
  document.querySelector("#mapa").scrollIntoView({ behavior: "smooth" });
});
