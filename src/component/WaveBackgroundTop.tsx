export default function WaveBackgroundTop() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '266px' }}>
            {/* Jaune clair - en dessous */}
            <svg style={{ position: 'absolute', top: 0, left: 0 }} width="484" height="266" viewBox="0 0 484 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H483.602C483.602 0 472 27.5002 392.5 32.5002C268.5 40.299 193.698 183.192 177 205.5C113 291 0 260 0 260V0Z" fill="#FCC010"/>
            </svg>
            {/* Jaune foncé - au dessus */}
            <svg style={{ position: 'absolute', top: 0, left: 0 }} width="312" height="125" viewBox="0 0 312 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M312 0H0V124.063C0 124.063 96.0812 133.956 142.01 89.4412C186.883 61.0014 203.897 74.1965 266.071 64.7109C312 57.7038 312 0 312 0Z" fill="#F59D19"/>
            </svg>
        </div>
    );
};                  