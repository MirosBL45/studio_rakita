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
export const navDataSR = [
  { name: "početna", path: "/", icon: <HiHome /> },
  { name: "o nama", path: "/o_nama", icon: <HiUser /> },
  { name: "naše usluge", path: "/usluge", icon: <HiRectangleGroup /> },
  { name: "naši radovi", path: "/radovi", icon: <HiViewColumns /> },
  { name: "blog", path: "/blog", icon: <ImBlog /> },
  // {
  //   name: "Klijenti o nama",
  //   path: "/klijenti_o_nama",
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: "kontakt",
    path: "/kontakt",
    icon: <HiEnvelope />,
  },
];