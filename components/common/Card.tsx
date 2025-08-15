import { PropertyProps } from '@/interfaces';
import Image from 'next/image';
import React from 'react';
const Card: React.FC<PropertyProps> = ({ name, address, rating, category, price, offers, image, discount }) => {
    return (
        <div>
            <Image
                src={image}
                width={100}
                height={100}
                alt="Property Image"
            />
            <div>
                {category.map((e) => (
                    <button className='btn-categories'>{e}</button>
                ))}
            </div>
            <div>
                <div>
                    {name}
                    {address.state}, {address.city}, {address.country}
                </div>
                <div>{rating}</div>
            </div>
            <div>
                <div className='btn-categories'>
                    <div>
                        <Image
                            src="/assets/bed 1.svg"
                            width={15}
                            height={15}
                            alt='bed'
                        />
                        {offers.bed}
                    </div>
                    <div>
                        <Image
                            src="/assets/bathtub 1.svg"
                            width={15}
                            height={15}
                            alt='bathtub'
                        />
                        {offers.shower}
                    </div>
                    <div>
                        <Image
                            src="people 1.svg"
                            width={15}
                            height={15}
                            alt='people'
                        />
                        {offers.occupants}
                    </div>
                </div>
                <div>
                    {price}
                </div>
            </div>
            <div>{discount}</div>
        </div>
    )
}

export default Card;