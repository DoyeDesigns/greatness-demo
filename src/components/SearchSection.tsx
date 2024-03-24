import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { Search } from "lucide-react";

interface SearchBarProps {
  header: string;
}

function SearchSection(prop: SearchBarProps) {
  return (
    <section className="flex justify-between items-center py-10">
      <h1 className="text-3xl font-bold">{prop.header}</h1>

      <form className="relative">
        <Input type="search" placeholder="Search" />
        <Button
          type="submit"
          className="bg-[transparent] absolute right-2 top-5 p-0 h-0"
        >
          <Search className="text-black" />
        </Button>
      </form>
    </section>
  );
}

export default SearchSection;
