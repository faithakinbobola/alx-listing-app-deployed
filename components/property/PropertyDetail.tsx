import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import { useState } from "react";
import ReviewSection from "./ReviewSection";
import BookingSection from "./BookingSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
    const tabs = [
        {
            label: "Description",
            content: property.description
        },
        {
            label: "What we offer",
            content: ""
        },
        {
            label: "Reviews",
            content: ""
        },
        {
            label: "About Host",
            content: ""
        }

    ]

    const [activeTab, setActiveTab] = useState<any>(0)

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between mb-5 md:hidden">
                <div><a className="text-secondary" href="#"><img src="/assets/Arrow Left.svg" alt="" className="inline w-3 mr-1" />Return</a></div>
                <div className="flex justify-between w-[15%]">
                    <button><img src="/assets/Heart.svg" alt="" width={15} height={15}/></button>
                    <button><img src="/assets/share-icon.svg" alt="" width={13} height={15}/></button>
                </div>
            </div>
            <div className="col-span-full md:col-span-2 row-span-2 md:hidden"><img src={property.image.image3} alt={property.name} className="col-span-2 w-full h-full object-cover rounded-xl md:rounded-tl-xl md:rounded-bl-xl" /></div>
            <h1 className="text-lg md:text-4xl font-bold">{property.name}</h1>
            <div className="flex justify-between gap-4">
                <div>

                    <div className="flex gap-3">
                        <span className="flex text-sm md:text-lg gap-2">
                            <img src="/assets/Star 2.svg" alt="Star rating" width={15} />
                            {property.rating} <span className="text-[#929292]">( 345 reviews )</span>
                        </span>
                        <span className="flex text-sm md:text-lg gap-1 text-[#929292]">
                            <img src="/assets/Map Point.svg" alt="" />
                            {property.address.city}, {property.address.state}, {property.address.country}
                        </span>
                    </div>
                </div>
                <div className="hidden md:flex gap-2">
                    <button className="btn-categories flex items-center"><img src="/assets/Heart.svg" alt="" width={15} height={15} className="pr-1" />Save</button>
                    <button className="btn-categories flex items-center"><img src="/assets/share-icon.svg" alt="" width={15} height={15} className="pr-1" /> Share</button>
                </div>
            </div>
            {/* Image Grid */}
            <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 md:gap-2 mt-4">
                <div className="col-span-2 row-span-2"><img src={property.image.image3} alt={property.name} className="col-span-2 w-full h-full object-cover rounded-tl-xl rounded-bl-xl" /></div>
                <div className="col-span-2"><img src={property.image.image1} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-tr-xl" /></div>
                <div><img src={property.image.image2} alt={property.name} className="col-span-2 w-full h-96 object-cover" /></div>
                <div><img src={property.image.image4} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-br-xl" /></div>
                {/* Add more images */}
            </div>

            <div className="flex gap-2 my-3">
                <div className='btn-categories flex items-center gap-1'>
                    <Image
                        src="/assets/bed 1.svg"
                        width={15}
                        height={15}
                        alt='bed'
                    />
                    {property.offers.bed} Bedrooms
                </div>
                <div className='btn-categories flex items-center gap-1'>
                    <Image
                        src="/assets/bathtub 1.svg"
                        width={15}
                        height={15}
                        alt='bathtub'
                    />
                    {property.offers.shower} Bathroom
                </div>
                <div className='btn-categories flex items-center gap-1'>
                    <Image
                        src="/assets/people 1.svg"
                        width={15}
                        height={15}
                        alt='people'
                    />
                    {property.offers.occupants} guests
                </div>
            </div>

            <hr className="hidden md:visible"/>
            <div className="grid md:grid-cols-2 md:gap-10 lg:grid-cols-3">
                <div className="md:col-span-1 lg:col-span-2">
                    <div className="my-4">
                        <div className="flex gap-4">
                            {
                                tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        className={`pb-2 font-medium ${activeTab === index
                                            ? "text-primary border-b-2 border-primary"
                                            : "text-tertiary hover:text-primary"
                                            }`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {tab.label}
                                    </button>
                                ))
                            }
                            <div className="hidden lg:text-tertiary lg:visible">
                                Published July 01, 2024
                            </div>
                        </div>
                        <hr />

                        {/* Description */}
                        <div className="mt-4 text-gray-800">
                            {tabs[activeTab].content}
                        </div>

                        <div className="mt-4">
                            <a className="text-primary" href="#">Read more <img src="/assets/Arrow Right.png" alt="" className="inline w-3" /></a>
                        </div>
                    </div>
                    <hr />
                    {/* Amenities */}
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold mb-1">What this place offer</h2>
                        <p className="">Each home is fully equipped to meet your needs, with ample space and privacy.</p>
                        <div className="flex justify-between my-3">
                            <div>
                                <ul>
                                    {
                                        property.offerOne.map((amenity, index) => (
                                            <li key={index} className="py-2"><img src={amenity.offerImage} alt="" className="inline w-4 mr-1" />{amenity.offerText}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="hidden md:visible">
                                <ul>
                                    {
                                        property.offerTwo.map((amenity, index) => (
                                            <li key={index} className="py-2"><img src={amenity.offerImage} alt="" className="inline w-4 mr-1" /> {amenity.offerText}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <button className="border border-[#AEAEAE] rounded-lg px-4 py-2 w-full md:hidden">Show all amenities</button>
                    </div>
                    <hr />
                    <div>
                        <ReviewSection reviews={property.reviews} />
                    </div>
                </div>
                <div>
                    <BookingSection price={property.price} />
                </div>
            </div>
        </div>
    )
}

export default PropertyDetail;