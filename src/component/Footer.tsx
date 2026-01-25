import linkedinIcon from "../assets/linkedin.svg"; 
import youtubeIcon from "../assets/youtube.svg";

export default function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-6 py-6 lg:py-0 bg-white min-h-[8rem] lg:h-32 font-quicksand font-regular relative z-20 gap-6 lg:gap-0">
            {/* Section Mentions légales */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 text-sm lg:text-base lg:ml-20 text-center lg:text-left">
                <p className="hover:text-[#FCC010] cursor-pointer transition-colors">Mention légales</p>
                <p className="hover:text-[#FCC010] cursor-pointer transition-colors">Politique de cookies</p>
                <p className="hover:text-[#FCC010] cursor-pointer transition-colors">Cookies</p>
            </div>

            {/* Section Réseaux sociaux */}
            <div className="flex flex-col items-center justify-center lg:mr-6">
                <p className="text-sm lg:text-base mb-2">Suivez nous sur nos réseaux sociaux</p>
                <div className="flex items-center justify-center gap-3">
                    <a href="#" className="hover:opacity-70 transition-opacity">
                        <img src={youtubeIcon} alt="Icon Youtube" className="w-8 h-8 lg:w-10 lg:h-10" />
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity">
                        <img src={linkedinIcon} alt="Icon Linkedin" className="w-8 h-8 lg:w-10 lg:h-10" />
                    </a>
                </div>
            </div>
        </footer>
    );
}