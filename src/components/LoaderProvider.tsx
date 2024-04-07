"use client";
import React from "react";
import { Next13NProgress } from 'nextjs13-progress';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Next13NProgress
        height={4}
        color="#262D3E"
        options={{ showSpinner: false }}
        showOnShallow
      />
      {children}
    </>
  );
};

export default Providers;