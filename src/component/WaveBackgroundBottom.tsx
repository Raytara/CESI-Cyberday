export default function WaveBackgroundBottom() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '272px' }}>
            {/* Jaune clair - en dessous */}
            <svg style={{ position: 'absolute', bottom: 0, right: 0 }} width="737" height="272" viewBox="0 0 737 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M126 142.999C207.729 90.7974 431.665 166.146 524 136.499C594.457 113.878 645.101 4.35769 719 0.498778C740.5 -0.623918 738.5 0.499542 738.5 0.499542V272H0L18 251C18 251 92.7525 164.235 126 142.999Z" fill="url(#paint0_linear_85_111)"/>
                <defs>
                    <linearGradient id="paint0_linear_85_111" x1="389.5" y1="64" x2="390.5" y2="255" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FCC010"/>
                        <stop offset="1" stop-color="white"/>
                    </linearGradient>
                </defs>
            </svg>
            {/* Jaune foncé - au dessus */}
            <svg style={{ position: 'absolute', bottom: 0, right: 0 }} width="702" height="196" viewBox="0 0 702 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M375.741 3.11549e-09C482.395 -0.000429162 474.354 44.3381 532.631 42.1884C578.507 40.4962 611.494 10.5265 657.061 6.15204C680.117 3.93864 701.5 9.37529 701.5 9.37529V196H160.5H0C0 196 312.031 0.000256364 375.741 3.11549e-09Z" fill="url(#paint0_linear_85_122)" fill-opacity="0.7"/>
                <defs>
                    <linearGradient id="paint0_linear_85_122" x1="561" y1="24" x2="563" y2="176" gradientUnits="userSpaceOnUse">
                        <stop offset="0.850962" stop-color="#F59D19"/>
                        <stop offset="1" stop-color="white"/>
                    </linearGradient>
                </defs>
            </svg> 
        </div>
    );
}