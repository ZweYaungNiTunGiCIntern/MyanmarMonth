import React from 'react'
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="container">
      <nav className="navbar">
      <h3>Myanmar Tradition</h3>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/month">Month</Link>
        {/* <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link> */}
      </div>
    </nav>
    </div>
    
  )
}