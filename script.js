const malla = [
  {
    cuatri: "1ER CUATRIMESTRE",
    materias: [
      "Criminología I", "Criminalística", "Probabilidad y Estadística I",
      "Fund de la Redacción", "Fuentes Digitales"
    ]
  },
  {
    cuatri: "2DO CUATRIMESTRE",
    materias: [
      "Criminología II", "Introducción al Derecho", "Probabilidad y Estadística II",
      "Bases Biológ de la Conducta", "Análisis Soc de la Violencia"
    ]
  },
  {
    cuatri: "3ER CUATRIMESTRE",
    materias: [
      "Derechos Humanos", "Derecho Penal I", "Técnicas de Interrogación",
      "Sociología", "Comunicación"
    ]
  },
  {
    cuatri: "4TO CUATRIMESTRE",
    materias: [
      "Medicina Forense", "Derecho Penal II", "Psicología Criminal",
      "Investigación Criminológica", "Política Criminal"
    ]
  },
  {
    cuatri: "5TO CUATRIMESTRE",
    materias: [
      "Perfiles Criminales", "Resolución de un Crimen",
      "Psicología Criminal II", "Justicia Restaurativa", "Fund de Balística General"
    ]
  },
  {
    cuatri: "6TO CUATRIMESTRE",
    materias: [
      "Modelos Act Política Crimi", "Comunicación Humana Detect Engaño",
      "Speaking I", "Criminología Personalidad", "Reintegración Social"
    ]
  },
  {
    cuatri: "7MO CUATRIMESTRE",
    materias: [
      "Criminalidad Femenina", "Deontología Criminológica", "Speaking II",
      "Lógica y Argument Jurídica", "Diseño de Proyecto I"
    ]
  },
  {
    cuatri: "8VO CUATRIMESTRE",
    materias: [
      "Dactiloscopía", "Antropología Forense", "Victimología",
      "Toxicomanía", "Diseño de Proyecto II"
    ]
  },
  {
    cuatri: "9NO CUATRIMESTRE",
    materias: [
      "Reintegración Social", "Interv Crisis Catástrofes y Emerg",
      "Delincuencia Organizada", "Liderazgo y Toma de Decisiones",
      "Diseño de Proyectos III"
    ]
  },
];

const grid = document.querySelector('.grid');
malla.forEach(({ cuatri, materias }) => {
  const card = document.createElement('div');
  card.className = 'card';
  const ul = document.createElement('ul');

  materias.forEach(materia => {
    const li = document.createElement('li');
    li.textContent = materia;
    li.addEventListener('click', () => {
      li.classList.toggle('done'); // tacha al hacer clic
    });
    ul.appendChild(li);
  });

  card.innerHTML = `<h3>${cuatri}</h3>`;
  card.appendChild(ul);

  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });

  grid.appendChild(card);
});
