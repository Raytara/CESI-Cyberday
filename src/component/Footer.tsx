import linkedinIcon from "../assets/linkedin.svg"; 
import youtubeIcon from "../assets/youtube.svg";

export default function Footer() {
    return (
        <footer className="flex items-center px-4 bg-white h-32 font-quicksand font-regular relative z-20">
            <div className="flex items-center justify-center gap-4 mt-6 ml-20">
                <p>Mention légales</p>
                <p>Politique de cookies</p>
                <p>Cookies</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-10 ml-auto mr-6">
                <p>Suivez nous sur nos réseaux sociaux</p>
                <div className="flex items-center justify-center mb-4">
                    <img src={youtubeIcon} alt="Icon Youtube" />
                    <img src={linkedinIcon} alt="Icon Linkedin" />
                </div>
            </div>
        </footer>
    );
}