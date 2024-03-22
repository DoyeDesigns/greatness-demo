import React from "react";
import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black flex justify-center items-center w-full py-2 px-3 z-10 text-white/50">
      Made with love <Heart fill="#ff0000" color="#ff0000" className="px-1" />
      from Greatnes team
    </footer>
  );
}

export default Footer;
