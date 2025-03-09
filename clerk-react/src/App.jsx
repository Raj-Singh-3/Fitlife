
//ye sirf sign-in ka hai....................
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

// export default function App() {
//   return (
//     <header>
//       <SignedOut>
//         <SignInButton />
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
//     </header>
//   );
// }



import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Website from './Website'; // Import your Website component

export default function App() {
  return (
    <Router>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          
        </SignedIn>
      </header>
      <Routes>
        <Route path="/" element={
          <SignedIn>
            <Navigate to="/website" />
          </SignedIn>
        } />
        <Route path="/website/*" element={<Website />} /> {/* Use /* to allow nested routes */}
      </Routes>
    </Router>
  );
}