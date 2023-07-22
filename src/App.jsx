import './css/reset.css'
import './css/layout.css';
import './css/App.css';

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./Home.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
        <div className="page-wrapper">
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}
export default App
