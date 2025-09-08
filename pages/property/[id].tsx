import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PropertyPage() {
    const router = useRouter();
    const { id } = router.query;
    const [property, setProperty] = useState<PropertyProps | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperty = async () => {
            if (!id) return;
            try {
                const response = await axios.get<PropertyProps>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`);
                setProperty(response.data);
            } catch (error) {
                console.log("Error faetching property details:", error);
            } finally {
                setLoading(false)
            }
        }

        fetchProperty();
    }, [id])

    if (loading) {
        return <p>Loading...</p>
    }

    if (!property) {
        return <p>Property not found</p>
    }

    return (
        <div>
            <PropertyDetail property={property} />
        </div>
    )
}