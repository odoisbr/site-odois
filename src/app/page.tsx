import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Services,
  Cases,
  About,
  Testimonials,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Cases />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
