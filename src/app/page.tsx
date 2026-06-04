import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import ProductPillars from "@/components/ProductPillars";
import SmartFactory from "@/components/SmartFactory";
import GlobalFootprint from "@/components/GlobalFootprint";
import CompanyProfile from "@/components/CompanyProfile";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <ProductPillars />
        <SmartFactory />
        <GlobalFootprint />
        <CompanyProfile id="company" />
      </main>
      <Footer />
    </>
  );
}
