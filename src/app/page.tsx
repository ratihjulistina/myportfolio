import { About, Contact, Mystack, Projects } from "@/components/components";
import { Navbar } from "@/components/Navbar";

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
