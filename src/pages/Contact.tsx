import Header from "../component/Header";
import WaveBackgroundBottom from "../component/WaveBackgroundBottom";
import WaveBackgroundTop from "../component/WaveBackgroundTop";
import LogoEmail from "../assets/email.svg"; 
import "../styles/Home.css";

export default function Contact() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden lg:h-screen">
            <Header />
            <WaveBackgroundTop />

            <div className="flex flex-grow flex-col items-center justify-center gap-4 px-4 lg:px-0">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black font-nunito tracking-tight text-center text-shadow-cyber">
                    <span className="relative inline-block">Une question sur le CyberDay ?</span>
                    <br />
                    <span className="relative inline-block">Contactez nous par mail</span>
                </h1>

                {/* <p className="text-center text-base md:text-lg lg:text-xl font-quicksand font-regular max-w-2xl">
Pour toute question sur l&apos;événement, les intervenants, les stands, les opportunités de sponsoring ou l&apos;organisation de la journée, ou si vous souhaitez animer un stand ou proposer une présentation, vous pouvez contacter directement cette personne.
                </p> */}

                <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-12 text-black font-quicksand font-semibold text-base md:text-lg lg:text-[24px]">
                    <div className="flex items-center text-center">
                        <img src={LogoEmail} alt="Logo Email" className="w-6 h-6 lg:w-9 lg:h-9 mr-1" />
                        <p>cyberday.contact@gmail.com</p>
                    </div>
                </div>
            </div>

            <WaveBackgroundBottom />
        </div>
    );
}