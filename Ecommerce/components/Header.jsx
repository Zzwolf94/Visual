import "./Header.css";
import { useState } from "react";

function Header({carCount}) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <header>
      <div>
        <h1>E-Commerce</h1>
      </div>
      <div>
        <input type="text" placeholder="Search"/>
        <button onClick={()=>setIsClicked(!isClicked)}>buscar</button>
      </div>
      <div>
        <button>Carrito{carCount}</button>
      </div>
    </header>
  );
}

export default Header;

