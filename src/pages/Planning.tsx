import Header from "../component/Header";
import WaveBackgroundBottom from "../component/WaveBackgroundBottom";
import WaveBackgroundTop from "../component/WaveBackgroundTop";
import LogoMaps from "../assets/LogoMaps.svg";
import CalendrierLogo from "../assets/LogoCalendrier.svg"
import Horloge from "../assets/Horloge.svg"; 
import PetaleOrangeFonce from "../assets/PetaleOrangeFonce.svg";
import PetaleJaune from "../assets/PetaleJaune.svg";
import PetaleOrangeClair from "../assets/PetaleOrangeClair.svg";
import "../styles/Planning.css";

export default function Planning() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden lg:h-screen lg:overflow-hidden">
            <Header />
            <WaveBackgroundTop />
            
            <div className="my-6 flex items-center justify-center px-4 text-center font-nunito text-3xl font-black text-shadow-cyber sm:my-8 sm:text-5xl lg:my-10 lg:text-6xl">
                <div className="relative inline-block">
                    <span>PROGRAMME À VENIR</span>
                    <div className="absolute left-0 right-0 flex items-center">
                        <div className="h-[3px] flex-grow rounded-l-full bg-black sm:h-[4px] lg:h-[5px]"></div>
                        <div className="-ml-1 h-2 w-2 flex-shrink-0 rounded-full border-2 border-black bg-[#FFC107] sm:h-3 sm:w-3 sm:border-4 lg:h-3 lg:w-3"></div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-2 px-6 text-center font-quicksand text-base font-medium sm:mt-8 sm:text-xl lg:mt-12 lg:text-2xl">
                <div className="relative w-fit max-w-[22rem] sm:max-w-2xl">
                    <img 
                        src={PetaleOrangeClair} 
                        alt="Pétale" 
                        className="absolute -bottom-14 -left-20 hidden h-8 w-8 lg:block" 
                    />
                    <span className="leading-snug">
                        Rester connectés, les détails arrivent très{" "}
                        <span className="relative inline-block">
                            <img 
                                src={PetaleOrangeFonce} 
                                alt="" 
                                className="absolute -top-10 left-24 hidden h-6 w-6 lg:block"
                            />
                            bientôt
                            <img 
                                src={PetaleJaune} 
                                alt="" 
                                className="absolute left-40 hidden h-12 w-12 lg:block"
                            />
                        </span>
                    </span>
                </div>

                <div className="mt-3 flex items-center justify-center gap-2 text-sm sm:mt-4 sm:text-lg lg:text-2xl">
                    <img src={CalendrierLogo} alt="Calendrier" className="w-5 sm:w-6 lg:w-auto" />
                    <div className="font-quicksand font-semibold">
                        <p>11 Juin 2026</p>
                    </div>
                    <div className="flex items-center text-center">
                                <img src={LogoMaps} alt="Logo Maps" className="w-6 h-6 lg:w-9 lg:h-9 mr-1"/>
                                <p>Villers-lès-Nancy, France</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-grow flex-col items-center justify-center gap-3 px-4 pb-4 sm:gap-4 sm:pb-10 lg:pb-0">
                <img src={Horloge} alt="Horloge" className="w-24 sm:w-32 lg:w-auto" />
                <div className="text-center font-nunito text-2xl font-black text-[#FCC010] text-shadow-cyber-dark sm:text-3xl lg:text-4xl">
                    <h1>BIENTÔT DISPONIBLE !</h1>
                </div>
            </div>

            <WaveBackgroundBottom />
        </div>
    );
}