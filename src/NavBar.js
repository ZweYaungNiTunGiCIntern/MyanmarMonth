import React from 'react'
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="container">
      <nav className="navbar">
      <h1>Myanmar Tradition</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/month">Months</Link>
        {/* <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link> */}
      </div>
    </nav>
    </div>
    
  )
}