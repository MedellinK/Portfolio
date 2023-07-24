import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="container">
        <div className="row Navbar">
                <img className="navLogo" src={"/assets/logo.jpeg"}/>
                <Link hre="#"><h3>About</h3></Link>
                <Link hre="#"><h3>Projects</h3></Link>
              <Link className="class" to="/"><h5>Top of Page</h5></Link>
        </div>
    </div>
  )
}