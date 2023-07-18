import './reset.css'
import './layout.css';
import './App.css';

import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
        <div className="page-wrapper">
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<h1>Home</h1>}/>
            </Routes>
        </BrowserRouter>
        </div>


    </>
  )
}

export default App
