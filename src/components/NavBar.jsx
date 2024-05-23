// import React from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <div className="bg-base-200 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 shadow-md">
//       <div className="max-w-screen-2xl container mx-auto md:px-5 px-3 flex justify-between items-center py-4">
//         <Link to="/" className="text-2xl md:text-3xl font-bold cursor-pointer">
//           DigitalConnect
//         </Link>
//         <div className="flex space-x-6 text-lg">
//           <Link to="/" className="hover:text-primary">
//             Home
//           </Link>
//           <Link to="/services" className="hover:text-primary">
//             Services
//           </Link>
//           <Link to="/about" className="hover:text-primary">
//             About
//           </Link>
//           <Link to="/contact" className="hover:text-primary">
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="bg-base-200 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 shadow-md">
//       <div className="max-w-screen-2xl container mx-auto md:px-5 px-3 flex justify-between items-center py-4">
//         <Link to="/" className="text-2xl md:text-3xl font-bold cursor-pointer">
//           DigitalConnect
//         </Link>
//         <div className="md:hidden">
//           <button className="text-lg focus:outline-none" onClick={toggleMenu}>
//             {menuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//         <div className={`md:flex md:space-x-6 text-lg ${menuOpen ? 'block' : 'hidden'}`}>
//           <Link to="/" className="hover:text-primary block py-2 md:py-0">Home</Link>
//           <Link to="/services" className="hover:text-primary block py-2 md:py-0">Services</Link>
//           <Link to="/about" className="hover:text-primary block py-2 md:py-0">About</Link>
//           <Link to="/contact" className="hover:text-primary block py-2 md:py-0">Contact Us</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="bg-base-200 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 shadow-md">
//       <div className="max-w-screen-2xl container mx-auto md:px-5 px-3 flex justify-between items-center py-4">
//         <Link to="/" className="text-2xl md:text-3xl font-bold cursor-pointer">
//           DigitalConnect
//         </Link>
//         <div className="md:hidden">
//           <button className="text-lg focus:outline-none" onClick={toggleMenu}>
//             {menuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//         <div className="hidden md:flex md:space-x-6 text-lg">
//           <Link to="/" className="hover:text-primary">
//             Home
//           </Link>
//           <Link to="/services" className="hover:text-primary">
//             Services
//           </Link>
//           <Link to="/about" className="hover:text-primary">
//             About
//           </Link>
//           <Link to="/contact" className="hover:text-primary">
//             Contact Us
//           </Link>
//         </div>
//       </div>
//       {menuOpen && (
//         <div className="md:hidden absolute top-16 left-0 right-0 bg-base-200 dark:bg-slate-900 shadow-lg">
//           <div className="flex flex-col text-lg p-4">
//             <Link to="/" className="hover:text-primary py-2" onClick={toggleMenu}>
//               Home
//             </Link>
//             <Link to="/services" className="hover:text-primary py-2" onClick={toggleMenu}>
//               Services
//             </Link>
//             <Link to="/about" className="hover:text-primary py-2" onClick={toggleMenu}>
//               About
//             </Link>
//             <Link to="/contact" className="hover:text-primary py-2" onClick={toggleMenu}>
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default NavBar;

           

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const NavBar= () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="bg-base-200 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 shadow-md">
//       <div className="max-w-screen-2xl container mx-auto md:px-5 px-3 flex justify-between items-center py-4">
//         <Link to="/" className="text-2xl md:text-3xl font-bold cursor-pointer">
//           DigitalConnect
//         </Link>
//         <div className="md:hidden">
//           <button className="text-lg focus:outline-none" onClick={toggleMenu}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="hidden md:flex md:space-x-6 text-lg">
//           <Link to="/" className="hover:text-primary">
//             Home
//           </Link>
//           <Link to="/services" className="hover:text-primary">
//             Services
//           </Link>
//           <Link to="/about" className="hover:text-primary">
//             About
//           </Link>
//           <Link to="/contact" className="hover:text-primary">
//             Contact Us
//           </Link>
//         </div>
//       </div>
//       {menuOpen && (
//         <div className="md:hidden absolute top-16 left-0 right-0 bg-base-200 dark:bg-slate-900 shadow-lg z-50 ">
//           <div className="flex flex-col text-lg p-4">
//             <Link to="/" className="hover:text-primary py-2" onClick={toggleMenu}>
//               Home
//             </Link>
//             <Link to="/services" className="hover:text-primary py-2" onClick={toggleMenu}>
//               Services
//             </Link>
//             <Link to="/about" className="hover:text-primary py-2" onClick={toggleMenu}>
//               About
//             </Link>
//             <Link to="/contact" className="hover:text-primary py-2" onClick={toggleMenu}>
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavBar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-base-200 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-screen-2xl container mx-auto md:px-5 px-3 flex justify-between items-center py-4">
        <Link to="/" className="text-2xl md:text-3xl font-bold cursor-pointer">
          DigitalConnect
        </Link>
        <div className="md:hidden">
          <button className="text-lg focus:outline-none m-2" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:space-x-6 text-lg">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <Link to="/services" className="hover:text-primary">
            Services
          </Link>
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact Us
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-slate-900 shadow-lg z-50">
          <div className="flex flex-col text-lg p-4">
            <Link to="/" className="hover:text-primary py-2" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/services" className="hover:text-primary py-2" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/about" className="hover:text-primary py-2" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" className="hover:text-primary py-2" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
