// import Calculator from "./Components/Calculator";
import Calculator from "./Components/Calculator";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from "./Components/UserDashboard";
import Hero from "./Components/Hero";


function App() {
  
  return (



    <div className="h-screen p-10 md:p-20 items-center justify-center flex" >
      {/* <Header/> */}

      <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard/:userId" element={<UserDashboard />} />
      </Routes>
    </Router>

      
    </div>
  );
}

export default App;
