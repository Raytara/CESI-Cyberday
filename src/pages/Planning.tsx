import Header from "../component/Header";
import WaveBackgroundBottom from "../component/WaveBackgroundBottom";
import WaveBackgroundTop from "../component/WaveBackgroundTop";
import Prediction from "../assets/prediction.svg"
import CalendrierLogo from "../assets/LogoCalendrier.svg"
import Horloge from "../assets/Horloge.svg"; 
import PetaleOrangeFonce from "../assets/PetaleOrangeFonce.svg";
import PetaleJaune from "../assets/PetaleJaune.svg";
import PetaleOrangeClair from "../assets/PetaleOrangeClair.svg";
import "../styles/Planning.css";

export default function Planning() {
    return (
        <div className="h-screen overflow-hidden">
            <Header />
            <div className="h-full overflow-hidden flex flex-col">
                <WaveBackgroundTop />
                <div>
                    <div className="flex -mt-20 justify-center items-center gap-4 bg-[#FDCD40] px-20 py-5 rounded-full w-fit mx-auto">
                        <img src={Prediction} alt="Prévision" />
                        <div className="font-nunito font-extrabold text-4xl text-white">
                            <h2>Bientôt révélé</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-12 gap-2 font-quicksand font-medium text-2xl">
                    <div className="relative w-fit">
                        {/* Pétale orange foncé (en bas à gauche du début du texte) */}
                        <img 
                            src={PetaleOrangeClair} 
                            alt="Pétale" 
                            className="absolute -left-20 -bottom-14 w-8 h-8" 
                        />
                        
                        <span>
                            Rester connectés, les détails arrivent très{" "}
                            <span className="relative inline-block">
                                {/* Pétale Orange Clair (au-dessus de bientôt) */}
                                <img 
                                    src={PetaleOrangeFonce} 
                                    alt="" 
                                    className="absolute left-24 -top-10 w-6 h-6"
                                />
                                
                                bientôt
                                
                                {/* Pétale Jaune (en-dessous de bientôt) */}
                                <img 
                                    src={PetaleJaune} 
                                    alt="" 
                                    className="absolute left-40 w-12 h-12"
                                />
                            </span>
                        </span>
                    </div>

                    <div className="flex justify-center items-center gap-2 mt-4">
                        <img src={CalendrierLogo} alt="Calendrier" />
                        <div className="font-quicksand font-semibold">
                            <p>11 Juin 2026</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center font-nunito items-center my-10 text-6xl font-black text-shadow-cyber">
                    <div className="relative inline-block">
                        <span>PROGRAMME À VENIR</span>
                        {/* La Barre Stylisée */}
                        <div className="absolute left-0 right-0 flex items-center">
                            <div className="h-[5px] bg-black rounded-l-full flex-grow"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FFC107] border-4 border-black -ml-1 flex-shrink-0"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 flex-grow">
                    <img src={Horloge} alt="Horloge" />
                    <div className="font-nunito font-black text-4xl text-[#FCC010] text-shadow-cyber-dark">
                        <h1>BIENTÔT DISPONIBLE !</h1>
                    </div>
                </div>
                <WaveBackgroundBottom />
            </div>
        </div>
    );
}

