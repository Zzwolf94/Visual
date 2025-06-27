import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src="/public/vite.svg" alt="Logo" />
      </div>
      <ul className="navbar_links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}   

export default Navbar;