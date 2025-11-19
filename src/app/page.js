import Hero from "@/Components/Hero";
import React from "react";
import Product from "@/Components/Product";
import Location from "@/Components/Location";
import Service from "@/Components/Service";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Certificate from "@/Components/Certificate";

const page = () => {
  return (
    <div>
      <Hero />
      <Certificate />
      <Product />
      <Location />
      <Service />
      <About />
      <Contact />
    </div>
  );
};

export default page;
