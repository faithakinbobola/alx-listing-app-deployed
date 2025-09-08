import { PropertyCardProps } from "@/interfaces";
import Image from "next/image";

const PropertyCard: React.FC<PropertyCardProps> = ({ key, property }) => {
  return (
          <div key={key}>
              <Image
                  src={property.images.imageSrc}
                  width={100}
                  height={100}
                  alt="Property Image"
              />
              <div>
                  {property.category.map((e, key) => (
                      <button className='btn-categories' key={key}>{e}</button>
                  ))}
              </div>
              <div>
                  <div>
                      {property.name}
                      {property.address.state}, {property.address.city}, {property.address.country}
                  </div>
                  <div>{property.rating}</div>
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
                          {property.offers.bed}
                      </div>
                      <div>
                          <Image
                              src="/assets/bathtub 1.svg"
                              width={15}
                              height={15}
                              alt='bathtub'
                          />
                          {property.offers.shower}
                      </div>
                      <div>
                          <Image
                              src="people 1.svg"
                              width={15}
                              height={15}
                              alt='people'
                          />
                          {property.offers.occupants}
                      </div>
                  </div>
                  <div>
                      {property.price}
                  </div>
              </div>
              <div>{property.discount}</div>
          </div>
      )
}

export default PropertyCard;