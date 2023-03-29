import React, { useEffect, useState } from "react";
import { menu } from "../../Api/Navigation";
import { Link } from "react-router-dom";
import "./scss/Header.css";
const Header = () => {
  const [affix, setAffix] = useState(false);
  //sticky header
  useEffect(() => {
    const handleAffix = () => {
      setAffix(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleAffix);
    return () => window.removeEventListener("scroll", handleAffix);
  });
  
  return (
    <header className={`headerwrapper ${affix ? "affix" : ""}`}>
      <div className="container">
        <div className="headerpart">
          <div className="logopart">
            <Link to="/">
              <span>React JS</span>
            </Link>
          </div>
          <nav className="menuwrap">
            <ul>
              {menu.map((menus) => {
                return (
                  <li key={menus.id}>
                    <Link to={menus.linkto}>{menus.menuname}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
