// Ages are deliberately stored per milestone. The full birth date is not published.
export const events = [
  {
    id: "graduation",
    date: "2027-07",
    age: 19,
    category: "education",
    icon: "cap",
    future: true,
    en: {
      date: "JUL 2027 · EXPECTED",
      title: "The next qualification",
      place: "ESTGA · Águeda, Aveiro",
      summary:
        "Expected completion of my Higher Professional Technical Course in Information Systems Programming.",
      details:
        "A new foundation for a career in AI, web development, databases, and software development.",
      badge: "Expected graduation",
    },
    pt: {
      date: "JUL 2027 · PREVISTO",
      title: "A próxima qualificação",
      place: "ESTGA · Águeda, Aveiro",
      summary:
        "Conclusão prevista do CTeSP em Programação de Sistemas de Informação.",
      details:
        "Uma nova base para uma carreira em IA, desenvolvimento web, bases de dados e desenvolvimento de software.",
      badge: "Conclusão prevista",
    },
    tags: ["CTeSP", "ESTGA"],
  },
  {
    id: "estga",
    date: "2025-09",
    age: 17,
    category: "education",
    icon: "cap",
    en: {
      date: "SEP 2025 — JUL 2027 (EXPECTED)",
      title: "A deeper dive into software",
      place: "ESTGA · Águeda, Aveiro",
      summary:
        "Higher Professional Technical Course in Information Systems Programming.",
      details:
        "Studying at Escola Superior de Tecnologia e Gestão de Águeda. Developing my skills in programming, web development, databases, and computer networks.",
      badge: "In progress",
    },
    pt: {
      date: "SET 2025 — JUL 2027 (PREVISTO)",
      title: "Aprofundar o mundo do software",
      place: "ESTGA · Águeda, Aveiro",
      summary:
        "Curso Técnico Superior Profissional em Programação de Sistemas de Informação.",
      details:
        "A estudar na Escola Superior de Tecnologia e Gestão de Águeda. A desenvolver competências em programação, desenvolvimento web, bases de dados e redes de computadores.",
      badge: "Em curso",
    },
    tags: ["CTeSP", "Java", "PostgreSQL", "Web"],
  },
  {
    id: "esproser-finish",
    date: "2025-07",
    age: 17,
    category: "education",
    icon: "cap",
    en: {
      date: "JUL 2025",
      title: "From electronics to possibilities",
      place: "ESPROSER · Sernancelhe, Viseu",
      summary:
        "Completed the vocational course in Electronics, Automation and Computers.",
      details:
        "Three years of hands-on learning, four professional internships, and a final project that brought together electronics, software, and 3D fabrication.",
    },
    pt: {
      date: "JUL 2025",
      title: "Da eletrónica às possibilidades",
      place: "ESPROSER · Sernancelhe, Viseu",
      summary:
        "Conclusão do curso profissional de Eletrónica, Automação e Computadores.",
      details:
        "Três anos de aprendizagem prática, quatro estágios profissionais e um projeto final que juntou eletrónica, software e fabrico 3D.",
    },
    tags: ["Electronics", "Automation"],
  },
  {
    id: "falkata",
    date: "2025-06",
    age: 17,
    category: "work",
    icon: "code",
    image: "assets/falkata.jpg",
    url: "https://falkatasemi.com",
    project: true,
    en: {
      date: "JUN — JUL 2025 · 2 MONTHS",
      title: "Building for the real world",
      place: "Falkata Semi · Viseu, Portugal",
      summary:
        "Independently redesigned an analog design company’s website and developed Python scripts for market analysis.",
      details:
        "A professional internship combining a school placement with freelance web work. I rebuilt the website with JavaScript, CSS, and HTML, and wrote automation, web-scraping, and data-analysis scripts for market and stock analysis.",
      badge: "Internship + freelance",
      imageAlt: "Falkata Semi website: analog design homepage",
      projectTitle: "Falkata Semi",
      projectSummary:
        "A new web presence for an analog design company. Independently redesigned and developed.",
    },
    pt: {
      date: "JUN — JUL 2025 · 2 MESES",
      title: "Construir para o mundo real",
      place: "Falkata Semi · Viseu, Portugal",
      summary:
        "Redesenhei de forma independente o website de uma empresa de design analógico e desenvolvi scripts Python para análise de mercados.",
      details:
        "Um estágio profissional que combinou formação escolar com trabalho freelance em desenvolvimento web. Reconstruí o website com JavaScript, CSS e HTML, e desenvolvi scripts de automação, web scraping e análise de dados para mercados e ações.",
      badge: "Estágio + freelance",
      imageAlt: "Website da Falkata Semi: página inicial de design analógico",
      projectTitle: "Falkata Semi",
      projectSummary:
        "Uma nova presença online para uma empresa de design analógico. Redesenhado e desenvolvido de forma independente.",
    },
    tags: ["JavaScript", "CSS", "HTML", "Python"],
  },
  {
    id: "erasmus",
    date: "2025-05",
    age: 17,
    category: "work",
    icon: "globe",
    en: {
      date: "MAY 2025 · 1 MONTH",
      title: "A different country. A wider perspective.",
      place: "PC AS PONTES · Ourense, Spain",
      summary:
        "Hardware and software repair internship through the Erasmus+ programme.",
      details:
        "Worked in a computer store, repairing hardware and software while gaining professional experience abroad.",
      badge: "Erasmus+",
    },
    pt: {
      date: "MAI 2025 · 1 MÊS",
      title: "Outro país. Uma perspetiva mais ampla.",
      place: "PC AS PONTES · Ourense, Espanha",
      summary:
        "Estágio em reparação de hardware e software através do programa Erasmus+.",
      details:
        "Trabalhei numa loja de informática, a reparar hardware e software e a ganhar experiência profissional no estrangeiro.",
      badge: "Erasmus+",
    },
    tags: ["Hardware", "Software", "Erasmus+"],
  },
  {
    id: "pap",
    date: "2025-04",
    age: 17,
    category: "projects",
    icon: "chip",
    project: true,
    url: "https://github.com/klangkuenstler/PAP",
    image: "assets/carplay.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    en: {
      date: "APR 2025",
      title: "A dashboard, built from scratch",
      place: "Final vocational project · ESPROSER",
      summary:
        "A working CarPlay unit powered by Raspberry Pi and Android (LineageOS). Final grade: 18/20.",
      details:
        "My Prova de Aptidão Profissional combined electronics, software, 3D modelling, and 3D printing. I developed the system independently, with help from my friend and classmate Gonçalo for the 3D printing.",
      badge: "18/20 · Final grade",
      projectTitle: "Raspberry Pi CarPlay",
      imageAlt:
        "My Raspberry Pi CarPlay unit displaying navigation and music in its custom enclosure.",
      projectSummary:
        "From electronics to a custom enclosure: a working CarPlay unit running LineageOS. Graded 18/20.",
    },
    pt: {
      date: "ABR 2025",
      title: "Um sistema multimédia feito de raiz",
      place: "Prova de Aptidão Profissional · ESPROSER",
      summary:
        "Uma unidade CarPlay funcional com Raspberry Pi e Android (LineageOS). Nota final: 18/20.",
      details:
        "A minha Prova de Aptidão Profissional juntou eletrónica, software, modelação 3D e impressão 3D. Desenvolvi o sistema de forma independente, com a ajuda do meu amigo e colega Gonçalo na impressão 3D.",
      badge: "18/20 · Nota final",
      projectTitle: "CarPlay com Raspberry Pi",
      imageAlt:
        "A minha unidade CarPlay com Raspberry Pi, a mostrar navegação e música na caixa personalizada.",
      projectSummary:
        "Da eletrónica à caixa personalizada: uma unidade CarPlay funcional com LineageOS. Avaliada com 18/20.",
    },
    tags: ["Raspberry Pi", "LineageOS", "3D"],
  },
  {
    id: "megactec",
    date: "2024-02",
    age: 16,
    category: "work",
    icon: "code",
    project: true,
    image: "assets/megactec.jpg",
    url: "https://megactec.pt",
    en: {
      date: "FEB 2024 · 1 MONTH",
      title: "My first website for a business",
      place: "Megactec · Moimenta da Beira, Viseu",
      summary:
        "Independently built a website for a home-appliance sales and repair company.",
      details:
        "A professional internship and freelance project that turned classroom learning into a live website. Built using HTML, CSS, PHP, JavaScript, SCSS, and SQL.",
      badge: "Internship + freelance",
      imageAlt: "Megactec website: appliance sales and repair homepage",
      projectTitle: "Megactec",
      projectSummary:
        "A practical website for a local appliance company. Independently built and deployed.",
    },
    pt: {
      date: "FEV 2024 · 1 MÊS",
      title: "O meu primeiro website para uma empresa",
      place: "Megactec · Moimenta da Beira, Viseu",
      summary:
        "Criei de forma independente um website para uma empresa de venda e reparação de eletrodomésticos.",
      details:
        "Um estágio profissional e projeto freelance que transformou a aprendizagem em sala de aula num website real. Desenvolvido com HTML, CSS, PHP, JavaScript, SCSS e SQL.",
      badge: "Estágio + freelance",
      imageAlt:
        "Website da Megactec: página inicial de venda e reparação de eletrodomésticos",
      projectTitle: "Megactec",
      projectSummary:
        "Um website prático para uma empresa local de eletrodomésticos. Desenvolvido e publicado de forma independente.",
    },
    tags: ["HTML", "CSS", "PHP", "JavaScript", "SQL"],
  },
  {
    id: "downhill",
    gallery: [
      {
        type: "image",
        src: "assets/downhill/downhill-jump.jpg",
        width: 1500,
        height: 2000,
        en: "Taking a jump on the urban downhill course.",
        pt: "Um salto no percurso de downhill urbano.",
      },
      {
        type: "image",
        src: "assets/downhill/downhill-medal.jpg",
        width: 1500,
        height: 2000,
        en: "My first-place medal from Castro Daire.",
        pt: "A minha medalha de primeiro lugar em Castro Daire.",
      },
    ],
    date: "2023-10-01",
    age: 15,
    category: "life",
    icon: "trophy",
    image: "assets/downhill-poster.jpg",
    en: {
      date: "01 OCT 2023",
      title: "First race. First place.",
      place: "Downhill Urbano · Castro Daire, Viseu",
      summary:
        "Won the Open category at my first downhill race. A day I won’t forget.",
      details:
        "My first downhill race was at Downhill Urbano de Castro Daire. I finished 1st in the Open category, aged 15.",
      badge: "1st · Open category",
      imageAlt:
        "Downhill Urbano de Castro Daire event poster, new date 1 October 2023",
    },
    pt: {
      date: "01 OUT 2023",
      title: "Primeira corrida. Primeiro lugar.",
      place: "Downhill Urbano · Castro Daire, Viseu",
      summary:
        "Venci a categoria Open na minha primeira corrida de downhill. Um dia inesquecível.",
      details:
        "A minha primeira corrida de downhill foi no Downhill Urbano de Castro Daire. Terminei em 1.º lugar na categoria Open, com 15 anos.",
      badge: "1.º · Categoria Open",
      imageAlt:
        "Cartaz do Downhill Urbano de Castro Daire, nova data 1 de outubro de 2023",
    },
    tags: ["Downhill", "Open"],
  },
  {
    id: "maxipc",
    date: "2023-05",
    age: 15,
    category: "work",
    icon: "layers",
    en: {
      date: "MAY 2023 · 2 WEEKS",
      title: "Getting hands-on",
      place: "MaxiPC · Moimenta da Beira, Viseu",
      summary:
        "My first professional internship, exploring advertising and digital fabrication.",
      details:
        "Worked with vinyl application, laser printers, 3D modelling, and 3D printing at an advertising company.",
    },
    pt: {
      date: "MAI 2023 · 2 SEMANAS",
      title: "Pôr as mãos na massa",
      place: "MaxiPC · Moimenta da Beira, Viseu",
      summary:
        "O meu primeiro estágio profissional, a explorar publicidade e fabrico digital.",
      details:
        "Trabalhei com aplicação de vinil, impressoras laser, modelação 3D e impressão 3D numa empresa de publicidade.",
    },
    tags: ["3D", "Vinyl", "Print"],
  },
  {
    id: "esproser",
    date: "2022-09",
    age: 14,
    category: "education",
    icon: "cap",
    en: {
      date: "SEP 2022",
      title: "Where the technical journey began",
      place: "ESPROSER · Sernancelhe, Viseu",
      summary:
        "Started the vocational course in Electronics, Automation and Computers.",
      details:
        "The beginning of three years exploring how hardware and software work together. Completed in July 2025.",
    },
    pt: {
      date: "SET 2022",
      title: "O início do percurso técnico",
      place: "ESPROSER · Sernancelhe, Viseu",
      summary:
        "Início do curso profissional de Eletrónica, Automação e Computadores.",
      details:
        "O início de três anos a explorar como o hardware e o software trabalham em conjunto. Concluído em julho de 2025.",
    },
    tags: ["ESPROSER"],
  },
  {
    id: "karting",
    gallery: [
      {
        type: "image",
        src: "assets/karting/karting-track.jpg",
        width: 1600,
        height: 1600,
        en: "Out on the karting track.",
        pt: "Na pista de karting.",
      },
      {
        type: "video",
        src: "assets/karting/karting-session-01.mp4",
        poster: "assets/karting/karting-session-01.jpg",
        width: 1280,
        height: 720,
        en: "Karting session · Clip 01",
        pt: "Sessão de karting · Vídeo 01",
      },
      {
        type: "video",
        src: "assets/karting/karting-session-02.mp4",
        poster: "assets/karting/karting-session-02.jpg",
        width: 832,
        height: 464,
        en: "Karting session · Clip 02",
        pt: "Sessão de karting · Vídeo 02",
      },
    ],
    date: "2018-11",
    age: 11,
    category: "life",
    icon: "flag",
    en: {
      date: "NOV 2018",
      title: "The need for a little speed",
      place: "Portugal",
      summary:
        "Started karting at 11. The love of adrenaline has stayed with me ever since.",
      details:
        "Karting is still one of my favourite ways to switch off, focus, and enjoy a challenge.",
    },
    pt: {
      date: "NOV 2018",
      title: "O gosto pela velocidade",
      place: "Portugal",
      summary:
        "Comecei no karting aos 11 anos. O gosto pela adrenalina ficou desde então.",
      details:
        "O karting continua a ser uma das minhas formas favoritas de desligar, focar e desfrutar de um desafio.",
    },
    tags: ["Karting"],
  },
  {
    id: "beginning",
    date: "2007",
    age: 0,
    category: "life",
    icon: "spark",
    en: {
      date: "2007",
      title: "Every story has a beginning",
      place: "Portugal",
      summary: "Hello, world. The first chapter.",
      details: "Born in 2007. A curious mind, with a whole journey ahead.",
    },
    pt: {
      date: "2007",
      title: "Todas as histórias têm um início",
      place: "Portugal",
      summary: "Olá, mundo. O primeiro capítulo.",
      details:
        "Nasci em 2007. Uma mente curiosa, com todo um percurso pela frente.",
    },
    tags: [],
  },
];

export const copy = {
  en: {
    skip: "Skip to content",
    journey: "Journey",
    projects: "Projects",
    toolkit: "Toolkit",
    contact: "Contact",
    heroEyebrow: "CURIOUS MIND. HANDS-ON BUILDER.",
    role: "Information Systems Programming student",
    heroDescription:
      "From circuits to code. From the starting grid to the next big idea. I build things, chase challenges, and keep learning.",
    explore: "Explore my journey",
    download: "Download CV",
    building: "Always building.",
    learning: "Always learning.",
    based: "BASED IN PORTUGAL · OPEN TO POSSIBILITIES",
    scroll: "SCROLL TO DISCOVER",
    nextChapter: "THE NEXT CHAPTER",
    available: "Looking for a place to make an impact.",
    availabilityDetails:
      "540-hour internship · February 2027 · AI, web development, databases & software development",
    letsTalk: "Let’s talk",
    theTimeline: "THE TIMELINE",
    journeyTitle: 'A journey in the making<span class="accent">.</span>',
    journeyDescription:
      "The work, the learning, and the moments in between. Follow the line. There’s a story at every stop.",
    newest: "NEWEST FIRST ↓",
    storyContinues: "AND THE STORY CONTINUES.",
    selectedWork: "SELECTED WORK",
    projectsTitle: 'Ideas made real<span class="accent">.</span>',
    projectsDescription:
      "Real businesses. Real hardware. Projects that took me from “what if” to “it works”.",
    underTheHood: "UNDER THE HOOD",
    toolkitTitle: 'My everyday toolkit<span class="accent">.</span>',
    toolkitDescription:
      "A growing collection of tools, with curiosity as the common thread.",
    beyond: "BEYOND THE CODE",
    beyondTitle: "A little adrenaline.<br>A lot of curiosity.",
    beyondText:
      "Off-screen, you’ll find me on a downhill trail or at the karting track. Music and games fill the quieter moments. Different worlds, the same drive to get better.",
    music: "♫ Music",
    games: "⌘ Games",
    whatsNext: "WHAT’S NEXT?",
    contactTitle: "Let’s build<br>something <em>good.</em>",
    contactText:
      "Have an internship opportunity or a website in mind? I’d love to hear about it.",
    availabilityLabel: "AVAILABILITY",
    contactAvailability:
      "Internship from February 2027 · 540 hours<br>Freelance web development",
    locationLabel: "LOCATION & FORMAT",
    contactLocation:
      "Viseu & Aveiro districts, Portugal<br>On-site, hybrid or remote",
    backTop: "Back to top ↑",
    all: "Everything",
    education: "Education",
    work: "Experience",
    life: "Life",
    age: "Age",
    details: "Explore this chapter",
    close: "Close image",
    viewImage: "Enlarge image",
    visit: "Visit website",
    repository: "View repository",
    milestoneCount: "milestones shown",
    light: "Switch to light mode",
    dark: "Switch to dark mode",
    nav: "Main navigation",
    filter: "Filter timeline",
    years: "Jump to year",
    frontend: "Web & interfaces",
    backend: "Code & data",
    systems: "Systems & making",
    languages: "Human languages",
    systemsList: [
      "Deployment",
      "Computer networks",
      "Electronics",
      "3D modelling & printing",
    ],
    languagesList: [
      "Portuguese · Native",
      "English · Fluent",
      "Spanish · Basic",
    ],
    cvSummary:
      "Information Systems Programming student at ESTGA with hands-on experience in web development, electronics, automation, and data analysis. Seeking a 540-hour internship from February 2027 in AI, web development, databases, or software development. Also available for freelance web development.",
    skills: "Skills",
    profile: "Profile",
    cvTitle: "Curriculum vitae",
    expected: "Expected",
    born: "Born in 2007",
    papGraphic: "CUSTOM CARPLAY UNIT",
    papSub: "Raspberry Pi × LineageOS",
    viewProject: "Explore project",
    webDevelopment: "WEB DEVELOPMENT",
    hardwareSoftware: "HARDWARE + SOFTWARE",
    languageLabel: "Language",
    translatedTags: {
      Electronics: "Electronics",
      Automation: "Automation",
      Vinyl: "Vinyl",
      Print: "Print",
    },
  },
  pt: {
    skip: "Saltar para o conteúdo",
    journey: "Percurso",
    projects: "Projetos",
    toolkit: "Competências",
    contact: "Contacto",
    heroEyebrow: "MENTE CURIOSA. ESPÍRITO PRÁTICO.",
    role: "Estudante de Programação de Sistemas de Informação",
    heroDescription:
      "Dos circuitos ao código. Da grelha de partida à próxima grande ideia. Construo, procuro desafios e continuo a aprender.",
    explore: "Explorar o meu percurso",
    download: "Descarregar CV",
    building: "Sempre a construir.",
    learning: "Sempre a aprender.",
    based: "EM PORTUGAL · ABERTO A POSSIBILIDADES",
    scroll: "EXPLORAR MAIS",
    nextChapter: "O PRÓXIMO CAPÍTULO",
    available: "À procura de um lugar para fazer a diferença.",
    availabilityDetails:
      "Estágio de 540 horas · Fevereiro de 2027 · IA, desenvolvimento web, bases de dados e software",
    letsTalk: "Vamos falar",
    theTimeline: "A CRONOLOGIA",
    journeyTitle: 'Um percurso em construção<span class="accent">.</span>',
    journeyDescription:
      "O trabalho, a aprendizagem e os momentos pelo meio. Segue a linha. Há uma história em cada paragem.",
    newest: "MAIS RECENTE PRIMEIRO ↓",
    storyContinues: "E A HISTÓRIA CONTINUA.",
    selectedWork: "TRABALHOS SELECIONADOS",
    projectsTitle: 'Ideias tornadas reais<span class="accent">.</span>',
    projectsDescription:
      "Empresas reais. Hardware real. Projetos que passaram do «e se» ao «funciona».",
    underTheHood: "POR DENTRO",
    toolkitTitle: 'As minhas ferramentas<span class="accent">.</span>',
    toolkitDescription:
      "Uma coleção de ferramentas em crescimento, com a curiosidade como fio condutor.",
    beyond: "PARA ALÉM DO CÓDIGO",
    beyondTitle: "Um pouco de adrenalina.<br>Muita curiosidade.",
    beyondText:
      "Longe do ecrã, encontras-me numa pista de downhill ou de karting. A música e os jogos preenchem os momentos mais calmos. Mundos diferentes, a mesma vontade de melhorar.",
    music: "♫ Música",
    games: "⌘ Jogos",
    whatsNext: "E A SEGUIR?",
    contactTitle: "Vamos construir<br>algo <em>especial.</em>",
    contactText:
      "Tens uma oportunidade de estágio ou um website em mente? Gostava de saber mais.",
    availabilityLabel: "DISPONIBILIDADE",
    contactAvailability:
      "Estágio a partir de fevereiro de 2027 · 540 horas<br>Desenvolvimento web freelance",
    locationLabel: "LOCALIZAÇÃO E FORMATO",
    contactLocation:
      "Distritos de Viseu e Aveiro, Portugal<br>Presencial, híbrido ou remoto",
    backTop: "Voltar ao topo ↑",
    all: "Tudo",
    education: "Formação",
    work: "Experiência",
    life: "Vida",
    age: "Idade",
    details: "Explorar este capítulo",
    close: "Fechar imagem",
    viewImage: "Ampliar imagem",
    visit: "Visitar website",
    repository: "Ver repositório",
    milestoneCount: "marcos apresentados",
    light: "Mudar para o modo claro",
    dark: "Mudar para o modo escuro",
    nav: "Navegação principal",
    filter: "Filtrar cronologia",
    years: "Ir para o ano",
    frontend: "Web e interfaces",
    backend: "Código e dados",
    systems: "Sistemas e construção",
    languages: "Idiomas",
    systemsList: [
      "Publicação de websites",
      "Redes de computadores",
      "Eletrónica",
      "Modelação e impressão 3D",
    ],
    languagesList: [
      "Português · Língua materna",
      "Inglês · Fluente",
      "Espanhol · Básico",
    ],
    cvSummary:
      "Estudante de Programação de Sistemas de Informação na ESTGA com experiência prática em desenvolvimento web, eletrónica, automação e análise de dados. Procuro um estágio de 540 horas a partir de fevereiro de 2027 em IA, desenvolvimento web, bases de dados ou desenvolvimento de software. Disponível também para desenvolvimento web freelance.",
    skills: "Competências",
    profile: "Perfil",
    cvTitle: "Curriculum vitae",
    expected: "Previsto",
    born: "Nascido em 2007",
    papGraphic: "UNIDADE CARPLAY PERSONALIZADA",
    papSub: "Raspberry Pi × LineageOS",
    viewProject: "Explorar projeto",
    webDevelopment: "DESENVOLVIMENTO WEB",
    hardwareSoftware: "HARDWARE + SOFTWARE",
    languageLabel: "Idioma",
    translatedTags: {
      Electronics: "Eletrónica",
      Automation: "Automação",
      Vinyl: "Vinil",
      Print: "Impressão",
    },
  },
};

export const technicalSkills = {
  frontend: ["HTML", "CSS / SCSS", "JavaScript", "Vue"],
  backend: ["Python", "Django", "Java", "PHP", "PostgreSQL", "SQL", "uv"],
};
