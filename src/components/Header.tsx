import React, { useEffect, useState } from "react";
import { Menu, X, Briefcase, FolderGit2, BookOpen, Users, Building, PhoneCall, Sun, Moon } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
const navigation = [{
  name: "Services",
  href: "/services",
  icon: <Briefcase className="w-4 h-4" />
}, {
  name: "Portfolio",
  href: "/portfolio",
  icon: <FolderGit2 className="w-4 h-4" />
}, {
  name: "Blog",
  href: "/blog",
  icon: <BookOpen className="w-4 h-4" />
}, {
  name: "About",
  href: "/about",
  icon: <Users className="w-4 h-4" />
}, {
  name: "Careers",
  href: "/careers",
  icon: <Building className="w-4 h-4" />
}];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const {
    theme,
    toggleTheme
  } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = () => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };
  return <header className={`sticky top-0 z-[60] w-full transition-all duration-300 ${isScrolled ? "bg-white dark:bg-gray-900 shadow-md py-3" : "bg-white/95 dark:bg-gray-900/95 py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" onClick={handleNavClick} className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent">
              Tech
            </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Pro
            </span>
            <span className="text-gray-900 dark:text-white">360</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navigation.map(item => <NavLink key={item.name} to={item.href} onClick={handleNavClick} className={({
          isActive
        }) => `text-gray-800 dark:text-gray-200 hover:text-violet-700 dark:hover:text-violet-400 font-medium transition-colors flex items-center gap-1.5 text-sm ${isActive ? "text-violet-700 dark:text-violet-400" : ""}`}>
              {item.icon}
              {item.name}
            </NavLink>)}
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle theme">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <Link to="/contact" onClick={handleNavClick} className="inline-flex items-center gap-2 bg-violet-700 text-white px-4 py-2 rounded-md hover:bg-violet-800 transition-colors shadow-sm text-sm">
            <PhoneCall className="w-4 h-4" />
            Contact Us
          </Link>
        </nav>
        <button className="md:hidden text-gray-800 dark:text-gray-200 hover:text-violet-700 dark:hover:text-violet-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && <div className="md:hidden bg-white dark:bg-gray-800 absolute w-full shadow-lg z-[61]">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navigation.map(item => <NavLink key={item.name} to={item.href} className={({
          isActive
        }) => `text-gray-800 dark:text-gray-200 hover:text-violet-700 dark:hover:text-violet-400 font-medium py-2 transition-colors flex items-center gap-2 ${isActive ? "text-violet-700 dark:text-violet-400" : ""}`} onClick={handleNavClick}>
                {item.icon}
                {item.name}
              </NavLink>)}
            <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
              <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Toggle theme">
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-violet-700 text-white px-4 py-2 rounded-md hover:bg-violet-800 transition-colors shadow-sm" onClick={handleNavClick}>
                <PhoneCall className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;