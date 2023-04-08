import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import ChatIcon from "@mui/icons-material/Chat";

import styles from "../../styles/Sidebar.module.css";

interface SidebarControllerProps {
  isMenuCollapsed: boolean;
}

const sidebarItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: DashboardIcon,
    path: "/",
  },
  {
    id: "account",
    title: "Account",
    icon: PersonIcon,
    path: "/profile",
  },
  {
    id: "courses",
    title: "Courses",
    icon: SchoolIcon,
    path: "/courses",
  },
  {
    id: "chat",
    title: "Chat",
    icon: ChatIcon,
    path: "/chat",
  },
];

export default function Sidebar({ isMenuCollapsed }: SidebarControllerProps) {
  return (
    <div className={styles.SidebarMenuItems}>
      {sidebarItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}
