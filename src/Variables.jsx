export const colors = {
  primaryColor: "#111111",
  secondaryColor: "#202020",
  accentColor: "#fff",
  headerColor: "#303030",
  lightGray: "#ccc",
  whiteSmok: "#d6d6d6ef",
  whiteColor: "#fdfdfdfd",
  pointsXP: "#63B6C2",
};

export const fontSize = {
  1: "4rem",
  2: "3.5rem",
  3: "3rem",
  4: "2.5rem",
  5: "2rem",
  6: "1.5rem",
  7: "1rem",
  8: "0.9rem",
  9: "0.8rem",
  10: "0.7rem",
  11: "0.6rem",
  12: "0.5rem",
};

export const skills = [
  { title: "HTML + CSS", value: 90, description: "" },
  { title: "JavaScript", value: 80, description: "" },
  { title: "Node.js", value: 50, description: "" },
  { title: "React", value: 80, description: "" },
  { title: "Next.js", value: 65, description: "" },
  { title: "PHP", value: 75, description: "" },
  { title: "WordPress", value: 90, description: "" },
  { title: "Mysql", value: 70, description: "" },
  { title: "Three.js", value: 30, description: "" },
];
export const nullSkills = [
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
];

export const upgrade = [
  {
    title: "Documentação",
    value: 2,
    icon: "./images/buff/paper.png",
    description: "O projeto ter uma boa documentação ajuda bastante",
  },
  {
    title: "Stack Overflow",
    value: 3,
    icon: "./images/buff/stack-overflow.png",
    description: "Melhor meio de solucionar meus bugs",
  },
  {
    title: "Cooperação",
    value: 2,
    icon: "./images/buff/meeting.png",
    description: "Um time com uma boa comunicação",
  },
  {
    title: "Café",
    value: 3,
    icon: "./images/buff/coffee-cup.png",
    description: "Um belo café para ajudar e pensar melhor",
  },
  {
    title: "Salário",
    value: 5,
    icon: "./images/buff/save-money.png",
    description: "Show me the money!!",
  },
  {
    title: "Tempo",
    value: 5,
    icon: "./images/buff/clock.png",
    description: "",
  },
];
export const fakeUpgrade = [
  {
    title: "Documentação",
    value: 0,
    icon: "./images/buff/paper.png",
    description: "",
  },
  {
    title: "Stack Overflow",
    value: 0,
    icon: "./images/buff/stack-overflow.png",
    description: "",
  },
  {
    title: "Cooperação",
    value: 0,
    icon: "./images/buff/meeting.png",
    description: "",
  },
  {
    title: "Café",
    value: 0,
    icon: "./images/buff/coffee-cup.png",
    description: "",
  },
  {
    title: "Salário",
    value: 0,
    icon: "./images/buff/save-money.png",
    description: "",
  },
  {
    title: "Tempo",
    value: 0,
    icon: "./images/buff/clock.png",
    description: "",
  },
];

export const downgrade = [
  {
    isDowngrade: true,
    title: "Simples",
    value: 1,
    icon: "./images/buff/neutral.png",
    description: "Falar que é simples de fazer",
  },
  {
    isDowngrade: true,
    title: "Café",
    value: 2,
    icon: "./images/buff/no-coffee.png",
    description: "Não ter café",
  },
  {
    isDowngrade: true,
    title: "Deploy",
    value: 4,
    icon: "./images/buff/rocket.png",
    description: "Fazer deploy numa linda sexta-feira",
  },
  {
    isDowngrade: true,
    title: "Database",
    value: 5,
    icon: "./images/buff/database.png",
    description: "Nada melhor que fazer um delete sem where para acordar",
  },
];

export const logos = [
  {
    alt: "HTML",
    icon: "./images/icons/html.png",
  },
  {
    alt: "CSS",
    icon: "./images/icons/css.png",
  },
  {
    alt: "JavaScript",
    icon: "./images/icons/js.png",
  },
  {
    alt: "Node.js",
    icon: "./images/icons/node.png",
  },
  {
    alt: "React",
    icon: "./images/icons/react.png",
  },
  {
    alt: "Next",
    icon: "./images/icons/nextjs.png",
  },
  {
    alt: "Angular",
    icon: "./images/icons/angular.png",
  },
  {
    alt: "Vue",
    icon: "./images/icons/vue.png",
  },
  {
    alt: "PHP",
    icon: "./images/icons/php.png",
  },
  {
    alt: "Laravel",
    icon: "./images/icons/laravel.png",
  },
  {
    alt: "MySql",
    icon: "./images/icons/mysql.png",
  },
  {
    alt: "Wordpress",
    icon: "./images/icons/wp.png",
  },
  {
    alt: "Bootstrap",
    icon: "./images/icons/bootstrap.png",
  },
  {
    alt: "Styled Components",
    icon: "./images/icons/styled-components.png",
  },
  {
    alt: "Three",
    icon: "./images/icons/three.png",
  },
];

export const projetosGit = [
  {
    title: "Portfolio",
    description: "Meu portfolio, um projeto para demonstrar minha habilidade",
    languages: ["React", "Three.js"],
    image: "./images/projetos/portfolio.jpg",
    link: "https://github.com/lucastgama/portfolio",
  },
  {
    title: "Candy Crush",
    description:
      "Uma forma de melhorar meu conhecimento em React com um jogo que eu gosto",
    languages: ["React"],
    image: "./images/projetos/candy.png",
    link: "https://github.com/lucastgama/candy-crush",
  },
  {
    title: "React 3D",
    description: "Primeiro projeto para conhecer e melhorar o Three.js",
    languages: ["React", "Three.js"],
    image: "./images/projetos/react3d.jpg",
    link: "https://github.com/lucastgama/react3D",
  },
  {
    title: "Jogo da memoria",
    description: "Jogo para melhorar meus conhecimentos em HTML e JS",
    languages: ["HTML", "CSS", "JavaScript"],
    image: "./images/projetos/memory.png",
    link: "https://github.com/lucastgama/memory-game",
  },
  {
    title: "PokeNext",
    description:
      "Projeto baseado no curso do professor Matheus Battisti do canal Hora de Codar",
    languages: ["React", "Next"],
    image: "./images/projetos/pokenext.jpg",
    link: "https://github.com/lucastgama/pokenext",
  },
  {
    title: "Pedra, papel e tesoura",
    description: "Jogo de pedra, papel e tesoura",
    languages: ["HTML", "CSS", "JavaScript"],
    image: "./images/projetos/rock-paper-scissors.jpg",
    link: "https://github.com/lucastgama/portfolio",
  },
];
