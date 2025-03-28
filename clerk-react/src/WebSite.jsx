// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom"; // Remove BrowserRouter
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Profile from "./components/Profile/UserProfile";
// import MembershipPage from "./components/MembershipPage";
// import BMICalculator from "./components/BMICalculator";
// import ProductPage from "./components/ProductPage";
// import Features from "./components/Features";
// import Testimonials from "./components/Testimonials";
// // import './Website.css';

// const Website = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="main-content">
//         <Routes>
//           {/* Separate Profile Page */}
//           <Route path="/profile" element={<Profile />} />

//           {/* Separate Products Page */}
//           <Route path="/products" element={<ProductPage />} />

//           {/* Scrollable Section for Other Pages */}
//           <Route
//             path="/"
//             element={
//               <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
//                 <section id="home" className="snap-start">
//                   <Home />
//                 </section>
//                 <section id="features" className="snap-start">
//                   <Features />
//                 </section>
//                 <section id="membership" className="snap-start">
//                   <MembershipPage />
//                 </section>
//                 <section id="bmi-calculator" className="snap-start">
//                   <BMICalculator />
//                 </section>
//                 <section id="testimonials" className="snap-start">
//                   <Testimonials />
//                 </section>
//               </div>
//             }
//           />
//           <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Website;













import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Profile from "./components/Profile/UserProfile";
import MembershipPage from "./components/MembershipPage";
import BMICalculator from "./components/BMICalculator";
import ProductPage from "./components/ProductPage";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

const Website = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
              <section id="home" className="snap-start">
                <Home />
              </section>
              <section id="features" className="snap-start">
                <Features />
              </section>
              <section id="membership" className="snap-start">
                <MembershipPage />
              </section>
              <section id="bmi-calculator" className="snap-start">
                <BMICalculator />
              </section>
              <section id="testimonials" className="snap-start">
                <Testimonials />
              </section>
            </div>
            <Footer />
          </>
        }
      />

      {/* Profile Route */}
      <Route
        path="/profile"
        element={
          <>
            <Navbar />
            <Profile />
            <Footer />
          </>
        }
      />

      {/* Products Route */}
      <Route
        path="/products"
        element={
          <>
            <Navbar />
            <ProductPage />
            <Footer />
          </>
        }
      />

      {/* Redirect unknown routes to Home */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Website;