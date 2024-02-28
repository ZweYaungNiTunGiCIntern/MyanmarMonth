import React from 'react'
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="container">
      <nav className="navbar">
      <h1>Burmese Birds</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/home">Birds</Link>
        {/* <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link> */}
      </div>
    </nav>
    </div>
    
  )
}