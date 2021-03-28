import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FcIcons from "react-icons/fc";
import * as GiIcons from "react-icons/gi";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "My Style",
    path: "/Mystyle",
    icon: <IoIcons.IoIosBody />,
    cName: "nav-text"
  },
  {
    title: "My Looks",
    path: "/Mylooks",
    icon: <GiIcons.GiShirt/>,
    cName: "nav-text"
  },
  {
    title: "Profile",
    path: "/Profile",
    icon: <GiIcons.GiEgyptianProfile />,
    cName: "nav-text"
  },
  {
    title: "About me",
    path: "/About",
    icon: <FcIcons.FcAbout/>,
    cName: "nav-text"
  }
];
