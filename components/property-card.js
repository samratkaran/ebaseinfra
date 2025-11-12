import Image from "next/image"
import Link from "next/link"
import { MapPin, Building, Home, Ruler, Bath } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" >
      <div className="relative">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.name}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-4 left-4 bg-[#FFD700] text-black px-2 py-1 rounded-full text-sm font-semibold">
          {property.badge}
        </span>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 flex items-center">
            <MapPin className="w-4 h-4 mr-1" /> {property.location}
          </span>
          <span className="text-sm text-gray-500 flex items-center">
            <Building className="w-4 h-4 mr-1" /> {property.builder}
          </span>
        </div>
        <h3 className="text-xl text-black  font-semibold mb-2">{property.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-[#FFD700]">{property.price}</span>
          <Button asChild>
            <Link href={`/property/${property.id}`}>View Details</Link>
          </Button>
        </div>
        <div className="border-t pt-4 flex justify-between items-center">
          <div className="flex items-center">
            <Home className="w-4 h-4 mr-1 text-yellow-600" />
            <span className="text-sm text-black ">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1 text-yellow-600" />
            <span className="text-sm text-black ">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Ruler className="w-4 h-4 mr-1 text-yellow-600" />
            <span className="text-sm text-black ">{property.area} sqft</span>
          </div>
        </div>
      </div>
    </div>
  )
}

