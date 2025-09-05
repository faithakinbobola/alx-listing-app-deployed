import { PropertyProps } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
    return (
        <div className="mt-8">
            <span className="flex text-lg gap-2 font-bold">
                <img src="/assets/Star 2.svg" alt="Star rating" />
                4.76 <span className="text-[#929292]">( 345 reviews )</span>
            </span>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    reviews.map((review, index) => (
                        <div key={index} className="pb-4 mb-4">
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