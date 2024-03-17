'use client'

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from '@/data/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const SideNavBar: React.FC = () => {
  const currentPathname = usePathname();
  const router = useRouter()
  const [activeLinkIndex, setActiveLinkIndex] = useState<number | null>(null);

  useEffect(() => {
    const index = navLinks.findIndex(link => link.path === currentPathname);
    if (index !== -1) {
      setActiveLinkIndex(index);
    }
  }, [currentPathname, navLinks]);

  const handleLinkClick = (index: number) => {
    setActiveLinkIndex(index);
    router.push(navLinks[index].path);
  };

  return currentPathname !== '/login' ? (
    <aside className="bg-accent-color h-screen w-[200px]">
      <nav id="sidebar" className="">
        <ul className="">
          {navLinks.map((link, index) => (
            <li key={index} className={`hover:cursor-pointer hover:bg-secondary-color ${activeLinkIndex === index ? 'active' : ''}`}>
              <a className="block flex gap-3 items-center p-3" onClick={() => handleLinkClick(index)}>
                {link.name}
                <FontAwesomeIcon className="h-5 w-5" icon={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  ) : null;
};

export default SideNavBar;
