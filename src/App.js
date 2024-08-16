// import "./App.css";
// import Create from "./components/Create";
// import Navbar from "./components/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Read from "./components/Read";
// import Update from "./components/Update";
// import React, { useState, useEffect } from 'react';
// import Disclaimer from './components/disclaimer/Disclaimer.jsx';
// import './components/disclaimer/Disclaimer.css';

// function App() {
//   const [showDisclaimer, setShowDisclaimer] = useState(true);

//   const handleProceed = () => {
//     setShowDisclaimer(false);
//   };

//   useEffect(() => {
//     // Show disclaimer on page refresh
//     setShowDisclaimer(true);
//   }, []);
//   return (
//     <div>
//        {showDisclaimer ? (
//         <Disclaimer onProceed={handleProceed} />
//       ) : (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<Create />} />
//           <Route exact path="/read" element={<Read />} />
//           <Route exact path="/edit/:id" element={<Update />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Create from './components/Create';
// import Navbar from './components/Navbar';
// import Read from './components/Read';
// import Update from './components/Update';
// import Disclaimer from './components/disclaimer/Disclaimer.jsx';
// import './components/disclaimer/Disclaimer.css';
// import { ThemeProvider, useTheme } from "./components/Theme/ThemeContext.jsx";
// import './themes.css';




// function App() {
//   const [showDisclaimer, setShowDisclaimer] = useState(true);

//   const handleProceed = () => {
//     setShowDisclaimer(false);
//   };

//   useEffect(() => {
//     // Show disclaimer on page refresh
//     setShowDisclaimer(true);
//   }, []);

//   return (
//     <ThemeProvider>
//       <ThemedApp
//         showDisclaimer={showDisclaimer}
//         handleProceed={handleProceed}
//       />
//     </ThemeProvider>
//   );
// }

// const ThemedApp = ({ showDisclaimer, handleProceed }) => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className="App">
//       {showDisclaimer ? (
//         <Disclaimer onProceed={handleProceed} />
//       ) : (
//         <>
//           <BrowserRouter>
//             <Navbar />
//             <button onClick={toggleTheme} className="theme-toggle-btn">
//               Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
//             </button>
//             <Routes>
//               <Route exact path="/" element={<Create />} />
//               <Route exact path="/read" element={<Read />} />
//               <Route exact path="/edit/:id" element={<Update />} />
//             </Routes>
//           </BrowserRouter>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;


import "./App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Read from './components/Read';
import Update from './components/Update';
import Disclaimer from './components/disclaimer/Disclaimer.jsx';
import './components/disclaimer/Disclaimer.css';
import { ThemeProvider } from "./components/Theme/ThemeContext.jsx"; // ThemeProvider for context
// import ThemeToggle from "./components/Theme/ThemeToggle"; // Import the ThemeToggle component
import './components/Theme/themes.css' 

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handleProceed = () => {
    setShowDisclaimer(false);
  };

  useEffect(() => {
    // Show disclaimer on page refresh
    setShowDisclaimer(true);
  }, []);

  return (
    <ThemeProvider>
      <ThemedApp showDisclaimer={showDisclaimer} handleProceed={handleProceed} />
    </ThemeProvider>
  );
}

const ThemedApp = ({ showDisclaimer, handleProceed }) => {
  return (
    <div className="App">
      {showDisclaimer ? (
        <Disclaimer onProceed={handleProceed} />
      ) : (
        <BrowserRouter>
          <Navbar />
          
          
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
            <Route exact path="/edit/:id" element={<Update />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
