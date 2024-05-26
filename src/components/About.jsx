import React from "react";
import Footer from "../Footer";

const About = () => {
  return (
    <div>
    <div className="pt-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Welcome to DigitalConnect
      </h1>
      <p className="text-lg text-center mb-6 text-white">
        Your trusted partner in digital growth. We specialize in Google SEO,
        digital marketing, social profile building and boosting, and website
        creation. Our mission is to help businesses thrive online by enhancing
        their digital presence and driving measurable results.
      </p>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">Our Story</h2>
        <p className="text-base leading-relaxed text-white">
          DigitalConnect was founded in 2020 with a passion for digital
          innovation and a commitment to helping businesses succeed online.
          Starting from a small team of digital enthusiasts, we have grown into
          a full-service digital agency, achieving remarkable milestones along
          the way. Our journey is marked by a relentless pursuit of excellence
          and a dedication to our clients' success.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Our Services</h2>
        <ul className="list-disc list-inside text-base leading-relaxed text-white">
          <li>Google SEO</li>
          <li>Digital Marketing</li>
          <li>Social Profile Building and Boosting</li>
          <li>Website Creation</li>
          <br />
          <br />
          <br />
          
         
          
        </ul>
      </section>
     
    </div>
    <Footer/>
   </div>
  );
};

export default About;
