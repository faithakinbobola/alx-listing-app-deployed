import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <div className="text-[11px]">
            <hr className="bg-primary h-[29px]" />
            <div className="bg-accent text-shimmer px-4 items-center md:px-9 py-3 lg:py-3">
                <div className="grid lg:grid-cols-2 lg:gap-7 md:px-9 md:w-11/12 lg:w-full lg:px-0 lg:pb-7">
                    <div className="py-3 lg:w-3/4">
                        <Image
                            src="/assets/Vector.svg"
                            alt="ALX Logo"
                            width={50}
                            height={50}
                            className="fill-shimmer pb-4"
                        />
                        <p className="">
                            ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
                        </p>
                    </div>
                    <div className="flex justify-between flex-wrap p-3 md:pl-0 lg:w-3/4 lg:justify-self-end">
                        <div className="w-1/2 md:w-auto">
                            <h3 className="pb-2 lg:text-sm lg:pb-3">Explore</h3>
                            <ul>
                                <li className="pb-1 lg:pb-2">
                                    <Link href="/">Apartments in Dubai</Link>
                                </li>
                                <li className="pb-1 lg:pb-2">
                                    <Link href="/">Hotels in New York</Link>
                                </li>
                                <li className="pb-1 lg:pb-2">
                                    <Link href="/">Villa in Spain</Link>
                                </li>
                                <li className="pb-1 lg:pb-2">
                                    <Link href="/">Mansion in Indonesia</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-auto">
                            <h3 className="pb-2 lg:text-sm lg:pb-3">Company</h3>
                            <ul>
                                <li className="pb-1 lg:pb-2">
                                    <Link href="/">About us</Link>
                                </li>
                                <li className="pb-1 lg:pb-2">
                                    <Link href="/">Blog</Link>
                                </li>
                                <li className="pb-1 lg:pb-2">
                                    <Link href="/">Career</Link>
                                </li>
                                <li className="pb-1 lg:pb-2">
                                    <Link href="/">Customers</Link>
                                </li>
                                <li className="pb-1">
                                    <Link href="/">Brand</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-auto">
                            <h3 className="pb-2 lg:text-sm lg:pb-3">Help</h3>
                            <ul>
                                <li className="pb-1 lg:pb-2">
                                    <Link href="/">Support</Link>
                                </li>
                                <li className="pb-1 lg:pb-2">
                                    <Link href="/">Cancel Booking</Link>
                                </li>
                                <li className="pb-1">
                                    <Link href="/">Refunds Process</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <hr className="hidden md:block lg:opacity-[9%]" />
                <div className="flex flex-col gap-5 px-4 items-center md:px-9 py-10 lg:flex-row lg:justify-between lg:px-0 lg:py-2">
                    <div className="text-center">Some hotel requires you to come more than 24 hours before check-in. Details <Link className="text-primary" href="/">here</Link> </div>
                    <ul className="flex gap-3 lg:gap-6">
                        <li>
                            <Link href="/">Terms of Service</Link>
                        </li>
                        <li>
                            <Link href="/">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/">Cookies Policy</Link>
                        </li>
                        <li className="hidden lg:block">
                            <Link href="/">Partners</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;