import { NavLink } from "react-router-dom";
import Logo from "../assets/LogoCyberday.svg";

export default function Header() {
    return (
        <header className="flex items-center px-4 bg-white shadow-md h-20 rounded-[12px]">
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-48 w-48 ml-6" />
            </div>

            <nav className="flex-1 flex items-center justify-center gap-24">
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

            <div>
                <button className="text-white font-nunito font-extrabold px-6 py-3 rounded-[16px] mr-12 bg-[#FCC010] hover:bg-[#FCC010] shadow-md">
                    Accéder à la billeterie
                </button>
            </div>
        </header>
    );
}
