import '../../reset.css';
import '../../layout.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="container">
        <div className="row Navbar">
            <div className="column">
                <h1>Home Main</h1>
            </div>
            <div className="column link-list">
              <Link className="class" to="/"><h2>Home</h2></Link>
                <Link hre="#"><h2>About</h2></Link>
                <Link hre="#"><h2>Projects</h2></Link>
                <Link hre="#"><h2>Contact</h2></Link>
            </div>
        </div>
    </div>
  )
}