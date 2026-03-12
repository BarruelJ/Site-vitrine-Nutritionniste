interface LeafBackgroundProps {
  className?: string; // Pour contrôler l'opacité et la couleur avec Tailwind
}

const LeafBackground = ({ className = "w-full h-auto opacity-10 text-primary" }: LeafBackgroundProps) => (
  <svg 
    viewBox="0 0 400 600" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
  >
    <path d="M200 600C200 600 200 400 210 200M210 200C215 100 200 50 180 20" />

  <path d="M205 500C160 520 100 480 80 440C70 420 90 380 130 360C170 340 190 360 205 380" />
  <path d="M208 400C150 420 80 380 60 320C50 290 80 250 120 230C160 210 190 230 208 260" />
  <path d="M210 300C170 320 100 280 80 240C70 210 90 170 130 150C170 130 200 150 210 180" />
  <path d="M205 150C160 160 110 130 90 90C80 70 110 40 150 30C190 20 210 30 205 60" />

  <path d="M205 520C240 540 310 500 330 460C340 440 330 400 300 380C270 360 230 380 205 400" />
  <path d="M208 420C250 440 330 400 350 360C360 340 350 300 320 280C290 260 240 280 208 300" />
  <path d="M210 320C260 340 340 300 360 250C370 230 350 190 310 170C270 150 220 170 210 200" />
  <path d="M212 220C260 230 330 200 350 160C360 140 340 100 300 90C260 80 230 100 212 130" />
  <path d="M200 80C240 80 300 50 310 20C315 -10 280 -20 240 -10C200 0 190 20 200 50" />
  
  <path d="M180 20C170 0 190 -10 210 10" />

  <g strokeWidth="0.5" opacity="0.3">
    <path d="M208 260C190 270 150 280 120 260" />
    <path d="M210 180C190 190 150 200 130 180" />
    <path d="M300 280C280 290 240 300 208 280" />
    <path d="M310 170C290 180 250 190 210 170" />
  </g>
  </svg>
);

export default LeafBackground;