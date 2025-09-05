import BookingSection from "@/components/property/BookingSection";
import PropertyDetail from "@/components/property/PropertyDetail";
import ReviewSection from "@/components/property/ReviewSection";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { Router, useRouter } from "next/router";

export default function PropertyPage() {
    const router = useRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

    if (!property) return <p>Property not found</p>;

    return (
        <div>
            <PropertyDetail property={property} />
        </div>
    )
}