import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="fixed w-full top-0 left-0 z-10 bg-transparent backdrop-blur-2xl shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          <div className="text-white text-2xl font-bold">ARTHMÓS</div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-white uppercase text-sm">
              Home
            </Link>
            <Link to="/about" className="text-white uppercase text-sm">
              About
            </Link>
            <Link to="/core" className="text-white uppercase text-sm">
              Core
            </Link>
            <Link to="/events" className="text-white uppercase text-sm">
              Events
            </Link>
            <Link to="/contact" className="text-white uppercase text-sm">
              Contact
            </Link>
          </nav>
          <button className="px-4 py-2 text-white bg-purple-600 rounded-full text-sm uppercase">
            Download EB
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
