// icons
import { CgCamera } from "react-icons/cg";
import { GiDeliveryDrone } from "react-icons/gi";
import { SiAdobepremierepro, SiAdobephotoshop, SiFigma } from "react-icons/si";
import { TbSquareLetterV } from "react-icons/tb";
import { MdOutlinePhotoCamera } from "react-icons/md";

//  data
export const aboutDataSR = [
  {
    title: "veštine",
    info: [
      {
        title: "Video Snimanje:",
        icons: [
          {
            iconThis: <CgCamera key="camera" />,
            title: "Kamerom"
          },
          {
            iconThis: <GiDeliveryDrone key="drone" />,
            title: "Dronom"
          },
        ],
      },
      {
        title: "Video montaža:",
        icons: [
          {
            iconThis: <TbSquareLetterV key="vegas" />,
            title: "Vegas Pro"
          },
          {
            iconThis: <SiAdobepremierepro key="premierepro" />,
            title: "Adobe Premiere Pro"
          },
        ],
      },
      {
        title: "Fotografisanje:",
        icons: [
          {
            iconThis: <MdOutlinePhotoCamera key="PhotoCamera" />,
            title: "Foto-aparatom"
          },
          {
            iconThis: <GiDeliveryDrone key="drone" />,
            title: "Dronom"
          },
        ],
      },
      {
        title: "Obrada fotografija:",
        icons: [
          {
            iconThis: <SiAdobephotoshop key="Adobephotoshop" />,
            title: "Adobe Photoshop"
          },
          {
            iconThis: <SiFigma key="SiFigma" />,
            title: "Figma"
          },
        ],
      },
    ],
  },
  {
    title: "priznanja",
    info: [
      {
        title: "Dugi niz godina rada doneo nam je veliki broj priznanja počevši od sportskih klubova, pa sve do mladenaca zadovoljnih svojim divnim svadbenim snimcima.",
      },
    ],
  },
  {
    title: "iskustvo",
    info: [
      {
        title: "Ponosimo se dugogodišnjim iskustvom u snimanju i editovanju događaja - od svadbi do sportskih mečeva. Sa svakim novim zadatkom, donosimo svež pristup i kreativnost kako bismo stvorili video zapise koji ostavljaju trajan utisak.",
      },
    ],
  },
  {
    title: "Zašto Mi?",
    info: [
      {
        title: "Kvalitet se prepoznaje na prvi pogled jer naša posvećenost pružanju vrhunskog kvaliteta u svakom kadru osigurava da svaki trenutak postane nezaboravan.",
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
  description: 'Razvijali smo se kroz mnogo godina rada na različitim projektima, uživajući u svakom trenutku. Vi uživate jer dobijate prelepe kadrove omiljenih trenutaka, a za nas je radost baviti se onim što volimo. Ova inspiracija nas je podstakla da okupimo grupu ljudi koji sa žarom učestvuju u snimanju najupečatljivijih video zapisa sa vašeg događaja.',
  description2: 'Iskustvo nas je naučilo da okupimo tim koji strastveno snima vaše najlepše trenutke.',
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