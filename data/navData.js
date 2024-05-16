// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import { ImBlog } from "react-icons/im";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  { name: "blog", path: "/blog", icon: <ImBlog /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

export const navDataSR = [
  { name: "početna", path: "/", icon: <HiHome /> },
  { name: "o nama", path: "/about", icon: <HiUser /> },
  { name: "naše usluge", path: "/services", icon: <HiRectangleGroup /> },
  { name: "naši radovi", path: "/work", icon: <HiViewColumns /> },
  { name: "blog", path: "/blog", icon: <ImBlog /> },
  {
    name: "preporuke",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "kontakt",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];