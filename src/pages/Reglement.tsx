import { useCallback, useState } from "react";
import Header from "../component/Header";
import WaveBackgroundBottom from "../component/WaveBackgroundBottom";
import WaveBackgroundTop from "../component/WaveBackgroundTop";
import "../styles/Home.css";

const PDF_FILENAME = "Reglement_jeu_Cyberday_2026.pdf";
const PDF_PATH = `/${PDF_FILENAME}`;
// SHA-256 hash of the original PDF — used to verify file integrity before download
const EXPECTED_SHA256 = "af313fcf69bbcad3b300b11089fd8ae01f43734e72d15c29891992404684b9d0";

/**
 * Computes the SHA-256 hash of an ArrayBuffer using the Web Crypto API.
 */
async function computeSHA256(buffer: ArrayBuffer): Promise<string> {
    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function Reglement() {
    const [downloadState, setDownloadState] = useState<"idle" | "loading" | "error">("idle");

    const handleDownload = useCallback(async () => {
        // Prevent double-click while already downloading
        if (downloadState === "loading") return;

        setDownloadState("loading");

        try {
            // Fetch the PDF file
            const response = await fetch(PDF_PATH);
            if (!response.ok) {
                throw new Error(`Erreur réseau: ${response.status}`);
            }

            // Verify Content-Type is PDF
            const contentType = response.headers.get("Content-Type");
            if (contentType && !contentType.includes("application/pdf")) {
                throw new Error("Le fichier reçu n'est pas un PDF.");
            }

            const blob = await response.blob();
            const arrayBuffer = await blob.arrayBuffer();

            // Compute SHA-256 hash and compare to expected value
            const hash = await computeSHA256(arrayBuffer);
            if (hash !== EXPECTED_SHA256) {
                throw new Error(
                    "Intégrité du fichier compromise : le hash ne correspond pas. Le téléchargement a été bloqué."
                );
            }

            // Integrity verified — trigger download from the verified blob
            const verifiedBlob = new Blob([arrayBuffer], { type: "application/pdf" });
            const url = URL.createObjectURL(verifiedBlob);
            const link = document.createElement("a");
            link.href = url;
            link.download = PDF_FILENAME;
            link.rel = "noopener noreferrer";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            setDownloadState("idle");
        } catch (err) {
            console.error("Échec du téléchargement sécurisé :", err);
            setDownloadState("error");
            // Reset error state after 4 seconds
            setTimeout(() => setDownloadState("idle"), 4000);
        }
    }, [downloadState]);

    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden lg:h-screen">
            <Header />
            <WaveBackgroundTop />

            <div className="flex flex-grow flex-col items-center justify-center gap-6 px-4 lg:px-0">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black font-nunito tracking-tight text-center text-shadow-cyber">
                    <span className="relative inline-block">
                        Règlement du jeu
                        <div className="absolute -bottom-1 left-0 w-full flex items-center">
                            <div className="h-[3px] lg:h-[5px] bg-black rounded-l-full flex-grow" style={{ marginLeft: '0.75em' }}></div>
                            <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#FFC107] border-2 lg:border-4 border-black -ml-1 flex-shrink-0"></div>
                        </div>
                    </span>
                    <br />
                    <span className="relative inline-block">CyberDay 2026</span>
                </h1>

                <p className="text-center text-base md:text-lg lg:text-xl font-quicksand font-regular max-w-2xl">
                    Téléchargez le règlement officiel du jeu concours qui a pour but de récompenser les parrainages réalisés par les participants lors
                    de l’inscription.
                </p>

                <button
                    onClick={handleDownload}
                    disabled={downloadState === "loading"}
                    id="download-reglement-btn"
                    className={`group relative mt-4 flex items-center gap-3 font-nunito font-extrabold px-8 py-4 md:px-12 md:py-5 lg:px-16 lg:py-6 rounded-[20px] shadow-lg transition-all duration-300 transform text-lg md:text-xl lg:text-2xl ${downloadState === "error"
                        ? "bg-red-500 text-white cursor-not-allowed"
                        : downloadState === "loading"
                            ? "bg-gray-400 text-white cursor-wait"
                            : "text-white bg-gradient-to-br from-[#FCC010] via-[#F9AF15] to-[#F59D19] hover:from-[#e0ad0e] hover:via-[#dfa00d] hover:to-[#d9900c] hover:shadow-xl hover:scale-105"
                        }`}
                >
                    {downloadState === "loading" ? (
                        /* Spinner */
                        <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                    ) : downloadState === "error" ? (
                        /* Error icon */
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ) : (
                        /* Download icon */
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-300 group-hover:translate-y-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                        </svg>
                    )}
                    {downloadState === "loading"
                        ? "Vérification en cours…"
                        : downloadState === "error"
                            ? "Erreur d'intégrité !"
                            : "Télécharger le règlement (PDF)"}
                </button>

                <div className="mt-2 flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2 text-sm md:text-base font-quicksand text-gray-500">
                        {/* Shield check icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>Téléchargement vérifié par empreinte SHA-256</span>
                    </div>
                    <code className="mt-1 px-3 py-1.5 bg-gray-100 rounded-lg text-[10px] md:text-xs text-gray-500 font-mono break-all max-w-md text-center select-all">
                        {EXPECTED_SHA256}
                    </code>
                </div>
            </div>

            <WaveBackgroundBottom />
        </div>
    );
}
