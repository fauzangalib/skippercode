import React from "react";
import { Link, useLocation } from 'react-router-dom';

function SidebarComp () {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h3>Popular Tutorials</h3>
      <ul>
        <li>
        <Link to="/html" className={location.pathname === '/html' ? 'active' : ''}>HTML</Link>
        </li>
        <li>
          <a href="#">CSS Tutorial</a>
        </li>
        <li>
          <a href="#">JavaScript Tutorial</a>
        </li>
        <li>
          <a href="#">SQL Tutorial</a>
        </li>
        <li>
          <a href="#">Python Tutorial</a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarComp;
