import React from 'react'
import { Link } from "react-router-dom";
import './index.css'
export default function NavBar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ background: "" }}>
      <div className="container mx-3 d-flex align-items-center">
        <h3 className="mr-auto mx-3 pr-3 ">Myanmar Tradition</h3> {/* Align to the left */}
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/month">Months</Link>
        </div>
      </div>
    </nav>
  )
}