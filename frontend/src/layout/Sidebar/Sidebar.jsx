import { useState, useContext, useEffect } from 'react';
import { navigationLinks } from '../../data/data';
import { SidebarContext } from '../../context/sidebarContext';
import { Link } from 'react-router-dom'; 
import "./Sidebar.css";

const Sidebar = () => {
  const [index, setIndex] = useState();
  const { isSidebarOpen } = useContext(SidebarContext);

  const handleClick = (id) => {
    setIndex(id);
  };


  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="user-info">
        <span className="info-name">Unknown</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <Link
                to={navigationLink.title} // Ensure each item has a valid path
                onClick={() => handleClick(navigationLink.id)}
                className={`nav-link ${navigationLink.id === index ? "active" : ""}`}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
