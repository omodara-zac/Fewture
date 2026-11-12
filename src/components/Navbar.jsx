import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchTerm.trim();

    if (!query) return;

    navigate(`/collections?search=${encodeURIComponent(query)}`);

    setMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">

        {/* Desktop links */}
        <div className="nav-links">
          <Link to="/collections">COLLECTIONS</Link>
          <Link to="/about">ABOUT</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
        </button>

        {/* Centre logo */}
        <Link to="/home" className="nav-logo">
           <img src="/images/logo/logo2.png" alt="logo" className="logo"/>
        </Link>

        {/* Desktop search and contact */}
        <div className="nav-right">
          <form className="nav-search" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="SEARCH..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button type="submit" aria-label="Search">
              ⌕
            </button>
          </form>

          <Link to="/contact" className="nav-contact">
            CONTACT
          </Link>
        </div>

        {/* Mobile search */}
        <button
          className="mobile-search"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Open search"
        >
          ⌕
        </button>
      </nav>

      {/* Mobile search field */}
      {searchOpen && (
        <form className="mobile-search-form" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="SEARCH PRODUCTS..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </form>
      )}

      {/* Mobile and tablet menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link to="/collections" onClick={closeMenu}>COLLECTIONS</Link>
        <Link to="/about" onClick={closeMenu}>ABOUT</Link>
        <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
      </div>
    </header>
  );
};

export default Navbar;
