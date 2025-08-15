import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ onClick, isActive, label }) => {
    return (
        <button
            className={`btn-shimmer transition-colors duration-200 ${
                isActive
                ? 'bg-primary text-shimmer border-primary'
                : 'border-[#ECECEC] text-black bg-shimmer hover:text-primary hover:border-primary'
                }`}
        >
            {label}
        </button>
    )   
}

export default Pill;