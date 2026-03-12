interface CurvedArrowProps {
  className?: string;
}

const CurvedArrow = ({ className = "" }: CurvedArrowProps) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3,18A13.17,13.17,0,0,1,15.49,9H21" />
    <polyline points="18 12 21 9 18 6" />
  </svg>
);

export default CurvedArrow;