import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Contentsection from "./components/Contentsection";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Navbar />
      {/* <Sidebar /> */}
      <div className="px-8 py-6">
        <Hero />
        <Contentsection />
      </div>
    </main>
  );
}
