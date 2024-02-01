// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "gratitude",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2013",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2012",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2014",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2013",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA",
        stage: "2011",
      },
      {
        title: "Computer Science - Technical Institute",
        stage: "2009",
      },
      {
        title: "Graphic Designer - ABC Institute, LA",
        stage: "2006",
      },
    ],
  },
];

export const aboutDataSR = [
  {
    title: "veštine",
    info: [
      {
        title: "srWeb Development",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "srUI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "priznanja",
    info: [
      {
        title: "srWebby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "srAdobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "iskustvo",
    info: [
      {
        title: "srUX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "srWeb Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "srIntern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "kredencijali",
    info: [
      {
        title: "srWeb Development - ABC University, LA",
        stage: "2011",
      },
      {
        title: "srComputer Science - Technical Institute",
        stage: "2009",
      },
      {
        title: "srGraphic Designer - ABC Institute, LA",
        stage: "2006",
      },
    ],
  },
];

export const aboutDataText =
{
  title1: 'Studio Rakita.',
  title2: 'Each visual tells story.',
  description: 'Our organization`s journey has been shaped over many years of project involvement filled with satisfaction. It`s a pleasure for you, as you get precisely what you desire, and for us, it`s a joy to engage in what we love. This inspiration led to the formation of a team of individuals enthusiastic about actively working in capturing the most enthralling videos from your event.',
  years: {
    text: 'Years of expirience'
  },
  clients: {
    text: 'Satisfied clients'
  },
  projects: {
    text: 'Finished projects'
  },
  gratitude: {
    text: 'Winning gratitudes'
  },
};

export const aboutDataTextSR =
{
  title1: 'Studio Rakita.',
  title2: 'Svaki kadar ima priču.',
  description: 'Razvijali smo se kroz mnogo godina rada na različitim projektima, uživajući u svakom trenutku. Vi uživate jer dobijate prelepe kadrove omiljenih trenutaka, a za nas je radost baviti se onim što volimo. Ova inspiracija dovela je do formiranja tima pojedinaca koji su entuzijastični za aktivno učešće u snimanju najzanimljivijih video zapisa sa vašeg događaja.',
  years: {
    text: 'Godina iskustva'
  },
  clients: {
    text: 'Zadovoljnih klijenata'
  },
  projects: {
    text: 'Završenih projekata'
  },
  gratitude: {
    text: 'Dobijenih nagrada'
  },
};

export const years = 20;
export const clients = 250;
export const projects = 650;
export const gratitude = 35;