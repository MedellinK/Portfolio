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
              <Link className="class" to="/"><h3>Home</h3></Link>
                <Link hre="#"><h3>About</h3></Link>
                <Link hre="#"><h3>Projects</h3></Link>
            </div>
        </div>
    </div>
  )
}