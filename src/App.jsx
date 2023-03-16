import { Routes, Route } from "react-router-dom";
import About from './pages/about/About';
import Accommodation from './pages/accommodation/Accommodation';
import Home from './pages/home/Home';
import Error from './pages/error/Error';


function App() {
  return (
  <div>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/accommodation/:id" element={<Accommodation/>} />
      <Route path="/*" element={<Error/>} />
    </Routes>
    
  </div>
  );
}
export default App;