import Footer from "../component/Footer";
import Header from "../component/Header";
import WaveBackgroundBottom from "../component/WaveBackgroundBottom";
import WaveBackgroundTop from "../component/WaveBackgroundTop";
import LogoMaps from "../assets/LogoMaps.svg";
import LogoCalendrier from "../assets/LogoCalendrier.svg";
import PetaleOrangeFonce from "../assets/PetaleOrangeFonce.svg"
import PetaleJaune from "../assets/PetaleJaune.svg"
import "../styles/Home.css";

export default function HomePage() {
    return (
        <div>
            <Header />
                <div>
                    <WaveBackgroundTop />
                        <div className="flex justify-center items-center">
                            <h1 className="text-5xl font-bold text-black font-nunito tracking-tight text-center text-shadow-cyber">
                                <span className="relative inline-block">
                                    CyberDay 2026
                                    {/* La Barre Stylisée */}
                                    <div className="absolute -bottom-1 left-0 w-full flex items-center">
                                        <div className="h-[5px] bg-black rounded-l-full flex-grow" style={{ marginLeft: '0.75em' }}></div>
                                        <div className="w-3 h-3 rounded-full bg-[#FFC107] border-4 border-black -ml-1 flex-shrink-0"></div>
                                    </div>
                                </span>

                                <span> : La cybersécurité </span>

                                {/* On isole le "de" pour qu'il devienne le point de repère du pétale */}
                                <span className="relative inline-block">
                                    de
                                    <img 
                                        src={PetaleOrangeFonce} 
                                        alt="Pétale" 
                                        className="absolute -top-14 left-20 -translate-x-1/2 w-8 h-8 animate-pulse-slow"
                                    />
                                </span>

                                <br />
                                <span>demain se construit aujourd'hui</span>
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-center mt-4 text-lg text-gray-700 font-nunito max-w-2xl">
                                Rejoignez-nous pour une journée dédiée aux dernières innovations en cybersécurité, avec des experts, des conférences, stands et du networking de qualité.
                            </p>
                        </div>
                        <div className="flex justify-center space-x-12 mt-6 text-gray-700 font-nunito">
                            <div className="flex text-center">
                                <img src={LogoCalendrier} alt="Logo Calendrier" className="w-6 h-6 mr-2"/>
                                <p>11 juin 2026</p>
                            </div>
                            <div className="flex text-center">
                                <img src={LogoMaps} alt="Logo Maps" className="w-6 h-6 mr-2"/>
                                <p>Villers-lès-Nancy, France</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <button className="text-white px-6 py-3 rounded-[16px] mr-12 ml-4 bg-[#FCC010] hover:bg-[#FCC010] shadow-md">
                                Accéder à la billetterie
                            </button>
                        </div>
                    <WaveBackgroundBottom />
                </div>
            <Footer />
        </div>
    )
}; 