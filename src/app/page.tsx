import Choice from "@/components/Choice";
import Equipment from "@/components/Equipment";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Quality from "@/components/Quality";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Choice />
      <Services />
      <Quality />
      <Equipment />
      <Footer />
    </div>
  );
}
