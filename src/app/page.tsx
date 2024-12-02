import { About, Contact, Mystack, Projects } from "@/components/components";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Mystack />
      <Projects />
      <Contact />
    </div>
  );
}
