import { HEADERIMAGES } from "@/constants";
import { ImagesProps } from "@/interfaces";
import Image from "next/image";

const Header: React.FC = () => {
    const headerImageTen = HEADERIMAGES.slice(0, 11);
    const headerImageFive = headerImageTen.slice(0, 6);

    return (
        <div>
            <div className="flex justify-center items-center bg-[#34967C] gap-3 py-2 ">
                <Image
                    src="/assets/Case Minimalistic.png"
                    alt="Header logo"
                    width={20}
                    height={20}
                />
                <h3 className="w-[60%] sm:w-auto text-white md:text-base">Overseas trip? Get the latest information on travel guides</h3>
                <button className="font-medium md:font-semibold md:text-[12px] py-1 px-3 border border-black rounded-3xl text-white bg-black">More Info</button>
            </div>
            <div className="bg-[#FFFFFF] grid grid-cols-[7fr_1fr] px-4 gap-4 md:gap-0 md:grid-cols-[1fr_1.5fr_1fr] items-center md:px-9 py-3">
                <Image
                    src="/assets/Vector.svg"
                    alt="ALX Logo"
                    width={50}
                    height={50}
                    className="text-[#262626] hidden md:block"
                />
                <div className="flex justify-center items-center border border-[#F6F6F6] rounded-full md:rounded-3xl shadow-md py-2">
                    <div className="hidden md:flex">
                        <div className="pl-4 w-full">
                            <label htmlFor="location" className="block">Location</label>
                            <input type="text" id="location" placeholder="Search for destination" className="mt-[2px] text-[10px] focus:outline-none" />
                        </div>
                        <div className="border-l pl-4 w-[18%]">
                            <label htmlFor="checkin" className="">Check in</label>
                            <input type="text" id="checkin" placeholder="Add date" className="mt-[2px] text-[10px] focus:outline-none" />
                        </div>
                        <div className="border-l pl-4 w-[18%]">
                            <label htmlFor="checkout" className="">Check out</label>
                            <input type="text" placeholder="Add date" className="mt-[2px] text-[10px] focus:outline-none" />
                        </div>
                        <div className="border-l pl-4 w-[18%]">
                            <label htmlFor="checkout" className="">People</label>
                            <input type="text" placeholder="Add guest" className="mt-[2px] text-[10px] focus:outline-none" />
                        </div>
                        <button className="pr-3 w-[15%]">
                            <Image
                                src="/assets/Frame 22.svg"
                                alt="Search Icon"
                                width={42}
                                height={42}
                            />
                        </button>
                    </div>
                    <div className="md:hidden flex w-full justify-between">
                        <div className="pl-4">
                            <label htmlFor="search" className="font-semibold">Where to</label>
                            <input
                                type="text"
                                id="search"
                                name="search"
                                placeholder="Location  •  Date  •  Add guest"
                                className="w-full text-[11px] outline-none text-sm placeholder-gray-400 bg-transparent"
                            />
                        </div>

                        <button className="mr-2">
                            <Image
                                src="/assets/Frame 22.svg"
                                alt="Search"
                                width={40}
                                height={40}
                            />
                        </button>
                    </div>
                </div>
                <div className="text-right flex items-center justify-end gap-2">
                    <div className="hidden lg:flex gap-2">
                        <button className="font-semibold text-[12px] py-1 px-3 border border-primary rounded-3xl text-white bg-primary hover:bg-shimmer hover:text-black mr-1">Sign in</button>
                        <button className="btn-shimmer text-[12px] ml-1">Sign up</button>
                    </div>
                    <div className="lg:hidden">
                        <Image
                            src="/assets/Frame 8.svg"
                            alt="Profile Icon"
                            width={46}
                            height={46}
                            className="lg:hidden"
                        />
                    </div>
                </div>
            </div>
            <hr />
            <div className="hidden gap-4 lg:grid lg:grid-cols-[repeat(auto-fit,_minmax(20px,_1fr))] pl-[25px] px-9 py-3">
                {
                    HEADERIMAGES.map(({ imageSrc, name }: ImagesProps, index) => (
                        <div key={index} className="justify-self-center">
                            <Image
                                src={imageSrc}
                                width={30}
                                height={30}
                                alt={name}
                                className="justify-self-center"
                            />
                            <p className="text-[11px] pt-1 text-center w-[100px]">{name}</p>
                        </div>
                    ))
                }
            </div>
            <div className="hidden lg:hidden gap-4 md:grid md:grid-cols-[repeat(auto-fit,_minmax(20px,_1fr))] pl-[25px] md:px-9 py-3">
                {
                    headerImageTen.map(({ imageSrc, name }: ImagesProps, index) => (
                        <div key={index} className="justify-self-center">
                            <Image
                                src={imageSrc}
                                width={30}
                                height={30}
                                alt={name}
                                className="justify-self-center"
                            />
                            <p className="text-[11px] pt-1 text-center w-[100px]">{name}</p>
                        </div>
                    ))
                }
            </div>
            <div className="hidden gap-4 max-[767px]:grid max-[767px]:grid-cols-[repeat(auto-fit,_minmax(20px,_1fr))] pl-[25px] px-4 py-3">
                {
                    headerImageFive.map(({ imageSrc, name }: ImagesProps, index) => (
                        <div key={index} className="justify-self-center">
                            <Image
                                src={imageSrc}
                                width={30}
                                height={30}
                                alt={name}
                                className="justify-self-center"
                            />
                            <p className="text-[8px] pt-1 text-center">{name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Header;