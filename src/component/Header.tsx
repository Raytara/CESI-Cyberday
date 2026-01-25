import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/LogoCyberday.svg";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="relative flex items-center px-4 bg-white shadow-md h-20 rounded-[12px]">
            {/* Logo */}
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-12 w-12 ml-2 lg:h-48 lg:w-48 lg:ml-6" />
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-24">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-[16px] border-b-4 border-[#FCC010] text-black" : "text-[16px] border-b-4 border-transparent"}>
                    Accueil
                </NavLink>
                <NavLink to="/planning" className={({ isActive }) => isActive ? "text-[16px] border-b-4 border-[#FCC010] text-black" : "text-[16px] border-b-4 border-transparent"}>
                    Planning
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[16px] border-b-4 border-[#FCC010] text-black" : "text-[16px] border-b-4 border-transparent"}>
                    Contact
                </NavLink>
            </nav>

            {/* Bouton billeterie Desktop */}
            <div className="hidden lg:block">
                <button className="text-white font-nunito font-extrabold px-6 py-3 rounded-[16px] mr-12 bg-[#FCC010] hover:bg-[#e0ad0e] shadow-md transition-colors">
                    Accéder à la billeterie
                </button>
            </div>

            {/* Hamburger icon Mobile/Tablet */}
            <button
                onClick={toggleMenu}
                className="lg:hidden ml-auto mr-4 z-50 p-2"
                aria-label="Toggle menu"
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </button>

            {/* Backdrop Mobile/Tablet */}
            {isMenuOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={closeMenu}
                ></div>
            )}

            {/* Menu Mobile/Tablet - Slide depuis la droite */}
            <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col h-full py-8">
                    {/* Bouton fermer en haut */}
                    <div className="flex justify-end px-6 mb-8">
                        <button onClick={closeMenu} className="p-2" aria-label="Fermer le menu">
                            <div className="w-6 h-6 relative">
                                <span className="absolute block h-0.5 w-full bg-black rotate-45 top-1/2"></span>
                                <span className="absolute block h-0.5 w-full bg-black -rotate-45 top-1/2"></span>
                            </div>
                        </button>
                    </div>

                    {/* Liens de navigation */}
                    <NavLink 
                        to="/" 
                        onClick={closeMenu}
                        className={({ isActive }) => `px-6 py-4 text-[16px] ${isActive ? 'bg-[#FCC010] bg-opacity-10 border-l-4 border-[#FCC010] text-black font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                        Accueil
                    </NavLink>
                    <NavLink 
                        to="/planning" 
                        onClick={closeMenu}
                        className={({ isActive }) => `px-6 py-4 text-[16px] ${isActive ? 'bg-[#FCC010] bg-opacity-10 border-l-4 border-[#FCC010] text-black font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                        Planning
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        onClick={closeMenu}
                        className={({ isActive }) => `px-6 py-4 text-[16px] ${isActive ? 'bg-[#FCC010] bg-opacity-10 border-l-4 border-[#FCC010] text-black font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                        Contact
                    </NavLink>

                    {/* Bouton billeterie en bas */}
                    <div className="mt-auto px-6 pb-8">
                        <button className="w-full text-white font-nunito font-extrabold px-6 py-3 rounded-[16px] bg-[#FCC010] hover:bg-[#e0ad0e] shadow-md transition-colors">
                            Accéder à la billeterie
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
