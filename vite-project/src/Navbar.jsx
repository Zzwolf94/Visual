import "./Navbar.css"
import { useState } from "react";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src="/public/vite.svg" alt="Logo" />
      </div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <button onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? "Close Menu" : "Open Menu"}
          </button>
        </li>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}   
export default Navbar;