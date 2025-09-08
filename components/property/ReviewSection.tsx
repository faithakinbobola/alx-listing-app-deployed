import { Review } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";

const ReviewSection: React.FC<{ propertyId: string }> = ({ propertyId }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoding] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${propertyId}/reviews`);
                setReviews(response.data as Review[]);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoding(false);
            }
        }

        fetchReviews();
    }, [propertyId]);

    if (loading) {
        return <p>Loading Reviews...</p>;
    }

    return (
        <div className="mt-8">
            <span className="flex text-lg gap-2 font-bold">
                <img src="/assets/Star 2.svg" alt="Star rating" />
                4.76 <span className="text-[#929292]">( 345 reviews )</span>
            </span>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    reviews.map((review) => (
                        <div key={review.id} className="pb-4 mb-4">
                            <div className="items-center">
                                <div className="flex pb-2">
                                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <p className="font-bold">
                                            {review.name}
                                        </p>
                                        <p className="text-tertiary">
                                            {review.years} stars
                                        </p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <p className="font-bold">
                                        {review.date}
                                    </p>
                                    <p className="font-extrabold">.</p>
                                    <p className="text-tertiary">
                                        {review.occasion}
                                    </p>
                                </div>

                                <p>{review.comment}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ReviewSection;