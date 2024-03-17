import { faHouse, faGlobe, faFolderOpen, faSquarePollVertical, faGear, faBullseye } from '@fortawesome/free-solid-svg-icons';

export const navLinks = [
    {
        name: "Home",
        path: "/",
        icon: faHouse,
        isActive: false,
      },
      {
        name: "Domains",
        path: "/domains",
        icon: faGlobe,
        isActive: false,
      },
      {
        name: "Projects",
        path: "/projects",
        icon: faFolderOpen,
        isActive: false,
      },
      {
        name: "Campaign",
        path: "/campaign",
        icon: faBullseye,
        isActive: false,
      },
      {
        name: "Results tab",
        path: "/results-tab",
        icon: faSquarePollVertical,
        isActive: false,
      },
      {
        name: "Settings",
        path: "/settings",
        icon: faGear,
        isActive: false,
      },
  ];