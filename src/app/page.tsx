import React from "react";
import SearchBar from "@/components/SearchBar";
import TotalTraffic from "@/components/dashboard-cards/TotalTraffic";
import TopProducts from "@/components/dashboard-cards/TopProducts";
import OthersTopProducts from "@/components/dashboard-cards/OthersTopProducts";
import DashboardTable from "@/components/dashboard-cards/Table";

export default function Home() {
  return (
    <main className="px-3 py-20 h-screen overflow-auto">
      <section className="flex justify-between py-10">
        <h1>Hi Username</h1>
        <SearchBar />
      </section>
      <section className="grid grid-cols-1 gap-3 transition-all lg:grid-cols-3 mb-10">
        <TotalTraffic />
        <TopProducts />
        <OthersTopProducts />
      </section>
      <section>
        <DashboardTable />
      </section>
    </main>
  );
}
