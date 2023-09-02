"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Contentsection from "./components/Contentsection";
import { useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [sidebarElement, setSideBarElement] = useState(false);
  const handleChange = (value) => {
    setSideBarElement(value);
  };
  return (
    <main className="w-full h-full flex">
      {sidebarElement && <Sidebar changeFn={handleChange} />}
      <div className={sidebarElement ? `w-[80%]` : `w-[100%]`}>
        <Navbar changeFn={handleChange} sideValue={sidebarElement} />
        {/* <Sidebar /> */}
        <div className="px-8 py-6">
          <Hero />
          <Contentsection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
