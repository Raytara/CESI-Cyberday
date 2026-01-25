import Footer from "../component/Footer";
import Header from "../component/Header";
import WaveBackgroundBottom from "../component/WaveBackgroundBottom";
import WaveBackgroundTop from "../component/WaveBackgroundTop";
import CardIntervenant from "../component/CardIntervenant";
import CardEntreprise from "../component/CardEntreprise";
import CarouselSection from "../component/CarouselSection";
import { entreprises } from "../data/Entreprise";
import { intervenants } from "../data/Intervenants";
import LogoYoutube from "../assets/youtube.svg";
import LogoMaps from "../assets/LogoMaps.svg";
import LogoCalendrier from "../assets/LogoCalendrier.svg";
import PetaleOrangeFonce from "../assets/PetaleOrangeFonce.svg"
import PetaleJaune from "../assets/PetaleJaune.svg"
import PetaleOrangeClair from "../assets/PetaleOrangeClair.svg";

import "../styles/Home.css";

export default function HomePage() {
    return (
        <div>
            <Header />
                <div>
                    <WaveBackgroundTop />
                        <div className="flex justify-center items-center px-4 lg:px-0">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black font-nunito tracking-tight text-center text-shadow-cyber">
                                <span className="relative inline-block">
                                    CyberDay 2026
                                    {/* La Barre Stylisée */}
                                    <div className="absolute -bottom-1 left-0 w-full flex items-center">
                                        <div className="h-[3px] lg:h-[5px] bg-black rounded-l-full flex-grow" style={{ marginLeft: '0.75em' }}></div>
                                        <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#FFC107] border-2 lg:border-4 border-black -ml-1 flex-shrink-0"></div>
                                    </div>
                                </span>
                                <span> : La cybersécurité </span>
                                <span className="relative inline-block">
                                    de
                                    <img 
                                        src={PetaleOrangeFonce} 
                                        alt="Pétale Orange" 
                                        className="hidden lg:block absolute -top-14 left-20 -translate-x-1/2 w-8 h-8 animate-pulse-slow"
                                    />
                                </span>
                                <br />
                                {/* Nouveau bloc pour le pétale orange clair avant "demain" */}
                                <span className="relative inline-block">
                                    <img 
                                        src={PetaleOrangeClair} 
                                        alt="Pétale Orange Clair" 
                                        className="hidden lg:block absolute top-8 -left-16 w-8 h-8 animate-pulse-slow"
                                    />
                                    demain
                                </span>
                                <span> se construit </span>
                                <span className="relative inline-block">
                                    aujourd'hui
                                    <img 
                                        src={PetaleJaune} 
                                        alt="Pétale Jaune" 
                                        className="hidden lg:block absolute -bottom-4 -right-40 w-14 h-14 animate-pulse-slow"
                                    />
                                </span>
                            </h1>
                        </div>
                        <div className="flex justify-center px-4 lg:px-0">
                            <p className="text-center mt-4 lg:mt-6 text-base md:text-lg lg:text-xl font-quicksand font-regular max-w-2xl">
                                Rejoignez-nous pour une journée dédiée aux dernières innovations en cybersécurité, avec des experts, des conférences, stands et du networking de qualité.
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-12 mt-4 lg:mt-6 px-4 text-black font-quicksand font-semibold text-base md:text-lg lg:text-[24px]">
                            <div className="flex items-center text-center">
                                <img src={LogoCalendrier} alt="Logo Calendrier" className="w-6 h-6 lg:w-9 lg:h-9 mr-1"/>
                                <p>11 juin 2026</p>
                            </div>
                            <div className="flex items-center text-center">
                                <img src={LogoMaps} alt="Logo Maps" className="w-6 h-6 lg:w-9 lg:h-9 mr-1"/>
                                <p>Villers-lès-Nancy, France</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6 lg:mt-8">
                            <button className="text-white font-nunito font-extrabold px-4 py-2 lg:px-6 lg:py-3 rounded-[16px] mx-4 lg:mr-12 lg:ml-4 bg-[#FCC010] hover:bg-[#e0ad0e] shadow-md transition-colors">
                                Accéder à la billetterie
                            </button>
                        </div>
                    <WaveBackgroundBottom />
                </div>
                {/* Section Card */}
                <div className="relative z-10 -mt-8 mx-0 bg-white border-2 border-orange-200 rounded-t-[50px] min-h-[300px] shadow-sm py-12">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-black relative inline-block">
                            Les intervenants
                            <div className="absolute -bottom-3 left-0 w-full flex items-center">
                                <div className="h-[5px] bg-black rounded-l-full flex-grow"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFC107] border-4 border-black -ml-1 flex-shrink-0"></div>
                            </div>
                        </h2>
                        
                        {/* Carousel des intervenants */}
                        <CarouselSection
                            items={intervenants}
                            renderCard={(intervenant) => (
                                <CardIntervenant
                                    image={intervenant.photo}
                                    title={intervenant.name}
                                    message={intervenant.bio}
                                />
                            )}
                        />
                        
                        <h2 className="text-3xl mt-12 font-bold text-black relative inline-block">
                            Nos sponsors
                            <div className="absolute -bottom-3 left-0 w-full flex items-center">
                                <div className="h-[5px] bg-black rounded-l-full flex-grow"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFC107] border-4 border-black -ml-1 flex-shrink-0"></div>
                            </div>
                        </h2>
                        
                        {/* Carousel des entreprises */}
                        <CarouselSection
                            items={entreprises}
                            renderCard={(entreprise) => (
                                <CardEntreprise
                                    image={entreprise.image}
                                    name={entreprise.name}
                                    description={entreprise.description}
                                />
                            )}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center mt-12 lg:mt-16 mb-8 text-center text-white font-nunito bg-gradient-to-br from-[#FCC010] via-[#F9AF15] to-[#F59D19] rounded-[1.5rem] lg:rounded-[2rem] p-6 md:p-8 max-w-3xl mx-4 lg:mx-auto">
                        <div className="flex justify-center items-center font-black text-lg md:text-xl lg:text-2xl">
                            <h1>Vous ne pouvez pas être là ?</h1>
                        </div>
                        <div className="flex justify-center items-center font-quicksand font-semibold text-sm md:text-base lg:text-lg mt-2">
                            <p>Suivez-nous en direct sur notre chaîne YouTube</p>
                        </div>
                        <img src={LogoYoutube} alt="Logo YouTube" className="w-[60%] md:w-[55%] lg:w-[50%] h-auto -mb-8 lg:-mb-12 -mt-8 lg:-mt-12"/>
                    </div>
                </div>
            <Footer />
        </div>  
    )
}; 