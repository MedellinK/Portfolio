import '../../reset.css';
import '../../layout.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="navBar">
      <h1>Home Main</h1>
      <Link to="/">Home</Link>
      <Link hre="#">About Me</Link>
      <Link hre="#">Projects</Link>
      <Link hre="#">Contact Me</Link>
    </div>
  )
}