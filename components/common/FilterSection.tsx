import { useState } from "react";
import Pill from "./Pill";

const FILTERS: string[] = ['All', 'Top Villa', 'Free Reschedule', 'Book Now, Pay later', 'Self Contain', 'Instant Book'];

const FilterSection: React.FC = () => {
    const [activefilter, setActiveFilter] = useState<string[]>([]);

    const toggleFilter = (label: string) => {
        setActiveFilter((prev) =>
            prev.includes(label) ? prev.filter((f) => f !== label) : [...prev, label]
        );
    };

    return (
        FILTERS.map((label) => (                                                               
            <Pill 
                key={label}
                label={label}
                isActive={activefilter.includes(label)}
                onClick={() => toggleFilter(label)}
            />
        ))
    )
}


export default FilterSection;
