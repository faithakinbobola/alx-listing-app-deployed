import Card from '@/components/common/Card';
import FilterSection from '@/components/common/FilterSection';
import { BACKGROUNDIMAGE, PROPERTYLISTINGSAMPLE } from '@/constants';
import { PropertyProps } from '@/interfaces';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="px-4 md:px-9 py-3">
      <div
        className="relative bg-cover bg-center h-[35vh] md:h-[60vh] w-full border rounded-2xl text-shimmer m-auto"
        style={{
          backgroundImage: `url(${BACKGROUNDIMAGE.mobile.src})`,
        }}
      >
        <div
          className="hidden md:block border rounded-2xl absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BACKGROUNDIMAGE.desktop.src})`,
          }}
        />
        <div className="relative z-10 lg:w-2/4 flex flex-col items-center gap-3 m-auto justify-center text-center h-full">
          <h1 className="text-xl md:text-6xl font-semibold">Find your favorite<br />place here!</h1>
          <p className="text-[7.42px] md:text-2xl">The best prices for over 2 million properties worldwide</p>
        </div>
      </div>
      <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-2 overflow-x-auto px-4 py-2'>
        <div className='flex flex-nowrap gap-2 overflow-x-auto scrollbar-hide'>
          {/* <button className='btn-shimmer font-[10px]'>All</button>
          <button className='btn-shimmer font-[10px]'>Top Villa</button>
          <button className='btn-shimmer font-[10px]'>Free Reschedule</button>
          <button className='btn-shimmer hidden sm:inline-flex font-[10px]'>Book Now, Pay later</button>
          <button className='btn-shimmer hidden lg:inline-flex font-[10px]'>Self Contain</button>
          <button className='btn-shimmer hidden lg:inline-flex font-[10px]'>Instant Book</button> */}

          <FilterSection />
          <button className='md:btn-shimmer lg:hidden'>
            <Image
              src="/assets/Vector-arrow.svg"
              width={10}
              height={10}
              alt='Down arrow angle'
              className='hidden md:block lg:hidden'
            />
          </button>
        </div>
        <div className='flex gap-2 min-w-max'>
          <button className='btn-shimmer flex items-center gap-1 font-[10px]'>
            Filter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0013 13v5a1 1 0 01-2 0v-5a1 1 0 00-.293-.707L4.293 6.707A1 1 0 014 6V4z" />
            </svg>
          </button>
          <button className='btn-shimmer font-[10px]'><span className=''>Sort by:</span> Highest Price</button>
        </div>
      </div>
      <div>
        {PROPERTYLISTINGSAMPLE.map(({ name, address, rating, category, price, offers, image, discount }: PropertyProps, key) => (
          <Card name={name} address={address} rating={rating} category={category} price={price} offers={offers} image={image} discount={discount} key={key} />
        ))}
      </div>
    </div>
  );
}
