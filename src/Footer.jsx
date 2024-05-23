// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//  return (

//  <div>
//  <hr />
//  <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
//  <nav className="grid grid-flow-col gap-4">
//  <Link to="/contact" className="link link-hover">
//  Contact
//  </Link>
//  <Link to="/about" className="link link-hover">
//  About us
//  </Link>
//  <button
//  onClick={() =>
//  (window.location = "mailto:shashankchourasia7@gmail.com")
//  }
//  >
//  <Link className="link link-hover">Mail</Link>
//  </button>
//  </nav>
//  <nav>
//  <div className="grid grid-flow-col gap-4">
//  <a href="https://linkedin.com/in/shashank-chaurasia-7b39431a4">
//  <svg
//  xmlns="http://www.w3.org/2000/svg"
//  viewBox="0 0 50 50"
//  width="24px"
//  height="24px"
//  className="fill-current"
//  >
//  {" "}
//  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
//  </svg>
//  </a>
//  <a href="https://github.com/ShashankOO7">
//  <svg
//  xmlns="http://www.w3.org/2000/svg"
//  viewBox="0 0 50 50"
//  width="24px"
//  height="24px"
//  className="fill-current"
//  >
//  {" "}
//  <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
//  </svg>
//  </a>
//  <a href="https://shashankoo7.github.io/">
//  <svg
//  xmlns="http://www.w3.org/2000/svg"
//  viewBox="0 0 50 50"
//  width="24px"
//  height="24px"
//  className="fill-current"
//  >
//  <path d="M 20 3 C 18.355469 3 17 4.355469 17 6 L 17 9 L 3 9 C 1.347656 9 0 10.347656 0 12 L 0 25 C 0 26.652344 1.347656 28 3 28 L 47 28 C 48.652344 28 50 26.652344 50 25 L 50 12 C 50 10.347656 48.652344 9 47 9 L 33 9 L 33 6 C 33 4.355469 31.644531 3 30 3 Z M 20 5 L 30 5 C 30.5625 5 31 5.4375 31 6 L 31 9 L 19 9 L 19 6 C 19 5.4375 19.4375 5 20 5 Z M 25 22 C 26.105469 22 27 22.894531 27 24 C 27 25.105469 26.105469 26 25 26 C 23.894531 26 23 25.105469 23 24 C 23 22.894531 23.894531 22 25 22 Z M 0 27 L 0 44 C 0 45.652344 1.347656 47 3 47 L 47 47 C 48.652344 47 50 45.652344 50 44 L 50 27 C 50 28.652344 48.652344 30 47 30 L 3 30 C 1.347656 30 0 28.652344 0 27 Z" />
//  </svg>
//  </a>
//  </div>
//  </nav>
//  <aside>
//  <a
//  href="https://github.com/ShashankOO7/"
//  className="cursor-pointer"
//  >
//  <p>
//  Copyright © 2024 - All right reserved
//  <br /> Shashank Chaurasia
//  </p>
//  </a>
//  </aside>
//  </footer>
//  </div>
 
//  );
// };
// export default Footer;


// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <>
//       <div>
//         <hr />
//         <footer className="footer p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
//           <nav className="flex justify-between items-center">
//             <div className="flex space-x-4">
//               <Link to="/contact" className="link link-hover">
//                 Contact
//               </Link>
//               <Link to="/about" className="link link-hover">
//                 About us
//               </Link>
//               <button
//                 onClick={() =>
//                   (window.location = "mailto:saurabhshinde03354@gmail.com")
//                 }
//               >
//                 <span className="link link-hover">Mail</span>
//               </button>
//             </div>
//             <div className="flex space-x-4">
//               <a href="https://www.linkedin.com/in/saurabh-shinde-78a500225/">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 50 50"
//                   width="24px"
//                   height="24px"
//                   className="fill-current"
//                 >
//                   <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
//                 </svg>
//               </a>
//               <a href="https://github.com/SAURABHSHINDE03354">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 50 50"
//                   width="24px"
//                   height="24px"
//                   className="fill-current"
//                 >
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        <hr />
        <footer className="footer p-4 md:p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
          <nav className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex space-x-4">
              <Link to="/contact" className="link link-hover">
                Contact
              </Link>
              <Link to="/about" className="link link-hover">
                About us
              </Link>
              <button
                onClick={() =>
                  (window.location = "mailto:saurabhshinde03354@gmail.com")
                }
              >
                <span className="link link-hover">Mail</span>
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/saurabh-shinde-78a500225/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="24px"
                  height="24px"
                  className="fill-current"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c(0,0,7.19,2.73,7.19,8.26)V39z" />
                </svg>
              </a>
              <a href="https://github.com/SAURABHSHINDE03354">
                <svg
                  xmlns="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                  // xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="24px"
                  height="24px"
                  className="fill-current"
                >

                  <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2 c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
                </svg>
              </a>
              <a href="https://github.com/SAURABHSHINDE03354">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="24px"
                  height="24px"
                  className="fill-current"
                >
                  <path d="M 20 3 C 18.355469 3 17 4.355469 17 6 L 17 9 L 3 9 C 1.347656 9 0 10.347656 0 12 L 0 25 C 0 26.652344 1.347656 28 3 28 L 47 28 C 48.652344 28 50 26.652344 50 25 L 50 12 C 50 10.347656 48.652344 9 47 9 L 33 9 L 33 6 C 33 4.355469 31.644531 3 30 3 Z M 20 5 L 30 5 C 30.5625 5 31 5.4375 31 6 L 31 9 L 19 9 L 19 6 C 19 5.4375 19.4375 5 20 5 Z M 25 22 C 26.105469 22 27 22.894531 27 24 C 27 25.105469 26.105469 26 25 26 C 23.894531 26 23 25.105469 23 24 C 23 22.894531 23.894531 22 25 22 Z M 0 27 L 0 44 C 0 45.652344 1.347656 47 3 47 L 47 47 C 48.652344 47 50 45.652344 50 44 L 50 27 C 50 28.652344 48.652344 30 47 30 L 3 30 C 1.347656 30 0 28.652344 0 27 Z" />
                </svg>
              </a>
              <aside className="">
              {/* <aside className="flex justify-center mt-4"> */}
            {/* <a href="https://github.com/ShashankOO7/" className="cursor-pointer"> */}
              <p>
                Copyright © 
               
              </p>
            {/* </a> */}
          </aside>

            </div>
          </nav>
          
        </footer>
      </div>
    </>
  );
};

export default Footer;
