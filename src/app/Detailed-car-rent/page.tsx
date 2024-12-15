import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function CarDetailsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Section */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow space-y-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          {/* Category Filter */}
          <div>
            <h3 className="font-medium mb-2">Category</h3>
            <div className="space-y-2">
              {['Sport', 'SUV', 'Sedan', 'Truck', 'Hatchback'].map((category) => (
                <div key={category} className="flex items-center gap-2">
                  <input type="checkbox" id={category} />
                  <label htmlFor={category} className="text-sm">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* Person Filter */}
          <div>
            <h3 className="font-medium mb-2">Person</h3>
            <div className="space-y-2">
              {['2 Person', '4 Person', '6+ Person'].map((option) => (
                <div key={option} className="flex items-center gap-2">
                  <input type="checkbox" id={option} />
                  <label htmlFor={option} className="text-sm">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-2">Price Range</h3>
            <input
              type="range"
              min="50"
              max="500"
              className="w-full"
            />
            <p className="text-sm text-gray-500">Min: $50.00 - Max: $500.00</p>
          </div>
        </div>

        {/* Car Details Section */}
        <div className="col-span-3 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            {/* Car Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="md:w-1/3">
                <Image
                  src="/images/image 7.png"
                  alt="Car"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-2 flex-1">
                <h1 className="text-2xl font-bold">Nissan GT-R</h1>
                <p className="text-gray-600">
                  Sports car with the best design and acceleration. Experience
                  the thrill of driving the Nissan GT-R.
                </p>
                <p className="font-semibold text-lg">$80.00 / Day</p>
              </div>
              <Link href={'/payment'}><button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Rent Now
              </button></Link>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Reviews</h2>
            <div className="space-y-4">
              {['Alex Stanton', 'Alex stanton'].map((name, index) => (
                <div key={index} className="flex gap-4">
                  <Image
                    src="/images/Profil.png"
                    alt="Reviewer"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-gray-500 text-sm">"Amazing car and service!"</p>
                  </div>
                  <p className="text-yellow-500">4.8 ★</p>
                </div>
              ))}
            </div>
          </div>

          {/* Similar Cars */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Similar Cars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Car 1', 'Car 2', 'Car 3'].map((car, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
                >
                  <Image
                    src={`/images/image 8.png`}
                    alt={car}
                    width={200}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                  <h3 className="text-center mt-4 font-semibold">{car}</h3>
                  <p className="text-center text-gray-600">$60.00 / Day</p>
                  <Link href={'/payment'}><button className="block bg-blue-600 text-white w-full py-2 rounded-lg mt-4">
                    Rent Now
                  </button></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

