import { Link, useLocation } from 'react-router-dom';
import { Briefcase, LogIn, UserPlus, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar glass-card">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <Briefcase className="nav-icon" />
          <span>Elevate<span className="accent">Jobs</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu">
          <Link to="/jobs" className={`nav-link ${isActive('/jobs')}`}>Browse Jobs</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact Us</Link>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="btn btn-secondary nav-btn">
            <LogIn size={18} />
            <span>Log In</span>
          </Link>
          <Link to="/register" className="btn btn-primary nav-btn">
            <UserPlus size={18} />
            <span>Sign Up</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu animate-fade-in">
          <Link to="/jobs" className={`nav-link ${isActive('/jobs')}`} onClick={toggleMenu}>Browse Jobs</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={toggleMenu}>Contact Us</Link>
          <Link to="/login" className="nav-link" onClick={toggleMenu}>Log In</Link>
          <Link to="/register" className="nav-link" onClick={toggleMenu}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
