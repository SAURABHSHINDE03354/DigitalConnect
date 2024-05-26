import React from "react";

const Services = () => {
  return (
    <div className="text-white pt-20 pb-10 text-white">
      <div className="max-w-screen-2xl container mx-auto md:px-5 px-3 text-white">
        <h2 className="text-4xl font-bold text-center mb-8  ">Our Services</h2>
        <p className="text-center mb-12 ">
          DigitalConnect Digital Services is a full-fledged digital service provider
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-white">
          <div className="bg-slate-900 p-6 rounded-lg shadow-lg text-white">
            <h3 className="text-xl font-bold mb-4">SEO (Search Engine Optimization)</h3>
            <p>Do you want to strengthen your website in the eyes of Google? Are you expanding overseas? Do you want to optimize your website in other languages?</p>
          </div>
          <div className="bg-slate-900 text-black p-6 rounded-lg shadow-lg   text-white ">
            <h3 className="text-xl font-bold mb-4">Website & Apps Designs</h3>
            <p>DigitalConnect Digital Services works with you to understand the specific needs of your business to develop high-quality and preferred designs.</p>
          </div>
          <div className="bg-slate-900 text-black p-6 rounded-lg shadow-lg  text-white ">
            <h3 className="text-xl font-bold mb-4">Branding Strategy</h3>
            <p>Create an impact and convey the message of your brand through visuals and creative designs. A strong brand identity is created with an effective brand strategy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
