import Ad from "@/components/Ad";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Support from "@/components/Support";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category/>
      <Support/>
      <Products/>
      <Ad/>
      <Testimonial/>
      <Footer/>
    </>
  );
}
