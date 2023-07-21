import '../../reset.css';
import '../../layout.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="navBar container">
        <div className="row">
            <div className="column">
                <h1>Home Main</h1>

            </div>
            <div className="column link-list">
              <Link className="class" to="/">Home</Link>
              <Link hre="#">About Me</Link>
              <Link hre="#">Projects</Link>
              <Link hre="#">Contact Me</Link>
            </div>
        </div>
    </div>
  )
}