// import React from "react";



// import Footer from "./Footer";

// const Contact = () => {
 
//  return (
//  <>
//  <div className="max-w-screen-l container mx-auto md:px-10 px-4 md:flex-row">
//  <div className="py-5 items-center justify-center text-center">
//  <h1 className="pt-12 text-4xl font-bold">Contact Us</h1>
 
 
//  <form action="#" method="POST">
 
//   <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required /><br />
//   <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required /><br /><br />

//  <div className="flex flex-col mb-4">
//  <label htmlFor="message" className="mb-2 font-bold text-lg  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//  Message
//  </label>
//  <textarea
//  id="message"
//  placeholder="Enter your Message"
//  className="textarea textarea-bordered textarea-lg w-full max-w-2xl  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//  ></textarea>
//  </div>

//  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

//  </form>


// </div>
//  </div>
//  <Footer/>
//  </>
//  );
// };
// export default Contact;

import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="max-w-screen-md container mx-auto px-4 md:px-10 ">
        <div className="py-5 flex flex-col items-center justify-center text-center">
          <h1 className="pt-12 text-4xl font-bold text-white">Contact Us</h1>
          
          <form action="#" method="POST" className="w-full max-w-2xl mt-8">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
            
              <textarea
                id="message"
                placeholder="Enter your message"
                className="textarea textarea-bordered textarea-lg w-full max-w-2xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
