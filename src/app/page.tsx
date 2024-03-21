import React from 'react';
import SearchBar from '@/components/SearchBar';
import TotalTraffic from '@/components/cards/TotalTraffic';

export default function Home() {
  return (
    <main className='px-3 pt-20 h-screen'>
      <div className='flex justify-between pt-10'>
        <h1>Hi Username</h1>
        <SearchBar />
      </div>
      <TotalTraffic />
    </main>
  );
}
