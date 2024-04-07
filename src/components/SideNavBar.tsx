"use client";

import React, { useState } from "react";
import { Nav } from './Nav';
import { usePathname } from "next/navigation";

import { useWindowWidth } from "@react-hook/window-size";

import {
  LayoutDashboard,
  Globe,
  FolderOpen,
  Target,
  ListChecks,
  SlidersHorizontal,
  ChevronRight,
  ChevronLeft,
  User2,
} from "lucide-react";
import { Button } from "./ui/button";

export default function SideNavBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const currentPathName = usePathname();
  const currentWindowWidth = useWindowWidth();
  const mobileWidth = currentWindowWidth < 768;

  if (currentPathName !== "/login") {
    return (
      <div
        className={`relative pt-7 h-screen border-r z-10 ${
          isCollapsed || mobileWidth ? "" : "w-[200px]"
        }`}
      >
        {!mobileWidth && (
          <div className="absolute right-[-20px]">
            <Button
              variant="secondary"
              className="rounded-full p-2"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button>
          </div>
        )}
        <Nav
          isCollapsed={mobileWidth ? true : isCollapsed}
          links={[
            {
              title: "Dashboard",
              label: "",
              href: "/",
              icon: LayoutDashboard,
              variant: "default",
            },
            {
              title: "Domains",
              label: "",
              href: "/domains",
              icon: Globe,
              variant: "ghost",
            },
            {
              title: "Projects",
              label: "",
              href: "/projects",
              icon: FolderOpen,
              variant: "ghost",
            },
            {
              title: "Campaigns",
              label: "",
              href: "/campaign",
              icon: Target,
              variant: "ghost",
            },
            {
              title: "Results",
              label: "",
              href: "/results-tab",
              icon: ListChecks,
              variant: "ghost",
            },
            {
              title: "Profile",
              label: "",
              href: "/profile",
              icon: User2,
              variant: "ghost",
            },
            {
              title: "Settings",
              label: "",
              href: "/settings",
              icon: SlidersHorizontal,
              variant: "ghost",
            },
          ]}
        />
      </div>
    );
  }

  return null;
}
