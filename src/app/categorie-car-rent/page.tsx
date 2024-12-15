// import Sidebar from "@/components/Sidebar";
// import Image from "next/image";
// import Link from "next/link";

// export default function Layout() {
//   return (
//     <div className="bg-slate-200 min-h-screen">
     
//       {/* Sidebar Component */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row">
//         {/* Images Section */}
//         <div className="mt-8 flex flex-col md:flex-row justify-between w-full px-4 md:px-8 lg:px-16">
//           {/* Left Pick Image */}
//           <Image
//             src={"/images/Pick - Up.png"}
//             alt="Pick Button"
//             width={400}
//             height={100}
//             className="rounded-[10px] md:w-[30%] cursor-pointer"
//           />

//           {/* Centered Button */}
//           <Image
//             src={"/images/Switch.png"}
//             alt="Switch Button"
//             width={100}
//             height={50}
//             className="rounded-full mx-auto md:mx-0 my-4 md:my-0 cursor-pointer"
//           />

//           {/* Right Drop Image */}
//           <Image
//             src={"/images/Drop - Off.png"}
//             alt="Drop Button"
//             width={400}
//             height={100}
//             className="rounded-[10px] md:w-[30%] cursor-pointer"
//           />
//         </div>
//       </div>

//       {/* Card Section */}
//       <div className="mt-8 px-4 md:px-8 lg:px-16">
//         {/* Cards Container */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* First Row of Cards */}
//           <div className="rounded-[10px] overflow-hidden">
//             <Image
//               src={"/images/Catalog 1.png"}
//               alt="Catalog 1"
//               width={304}
//               height={388}
//             />
//           </div>
//           <div className="rounded-[10px] overflow-hidden">
//             <Image
//               src={"/images/Catalog 2.png"}
//               alt="Catalog 2"
//               width={304}
//               height={388}
//             />
//           </div>
//           <div className="rounded-[10px] overflow-hidden">
//             <Image
//               src={"/images/Catalog 3.png"}
//               alt="Catalog 3"
//               width={304}
//               height={388}
//             />
//           </div>

//           {/* Second Row of Cards */}
//           <div className="rounded-[10px] overflow-hidden">
//             <Image
//               src={"/images/Catalog 1 (1).png"}
//               alt="Catalog 1 (1)"
//               width={304}
//               height={388}
//             />
//           </div>
//           <div className="rounded-[10px] overflow-hidden">
//             <Image
//               src={"/images/Catalog 2 (1).png"}
//               alt="Catalog 2 (1)"
//               width={304}
//               height={388}
//             />
//           </div>
//           <div className="rounded-[10px] overflow-hidden">
//             <Image
//               src={"/images/Catalog 3 (1).png"}
//               alt="Catalog 3 (1)"
//               width={304}
//               height={388}
//             />
//           </div>

//           {/* Third Row of Cards */}
//           <div className="rounded-[10px] overflow-hidden">
//             <Image
//               src={"/images/Catalog 1 (2).png"}
//               alt="Catalog 1 (2)"
//               width={304}
//               height={388}
//             />
//           </div>
//           <div className="rounded-[10px] overflow-hidden">
//             <Image
//               src={"/images/Catalog 2 (2).png"}
//               alt="Catalog 2 (2)"
//               width={304}
//               height={388}
//             />
//           </div>
//           <div className="rounded-[10px] overflow-hidden">
//             <Image
//               src={"/images/Catalog 3 (2).png"}
//               alt="Catalog 3 (2)"
//               width={304}
//               height={388}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// pages/index.tsx

'use client'
import Link from 'next/link';
import { useState } from 'react';


export default function Home() {
  const [filters, setFilters] = useState({
    type: '',
    capacity: '',
    maxPrice: 100,
  });

  const cars = [
    {
      name: 'Koenigsegg',
      type: 'Sport',
      capacity: '2 Person',
      price: 99,
      transmission: 'Manual',
      fuel: '90L',
      image: '/koenigsegg.png',
    },
    {
      name: 'Nissan GT-R',
      type: 'Sport',
      capacity: '2 Person',
      price: 80,
      transmission: 'Manual',
      fuel: '80L',
      image: '/nissan-gtr.png',
    },
    {
      name: 'Rolls-Royce',
      type: 'Sport',
      capacity: '4 Person',
      price: 96,
      transmission: 'Manual',
      fuel: '70L',
      image: '/rolls-royce.png',
    },
    {
      name: 'All New Rush',
      type: 'SUV',
      capacity: '6 Person',
      price: 72,
      transmission: 'Manual',
      fuel: '70L',
      image: '/all-new-rush.png',
    },
    {
      name: 'CR-V',
      type: 'SUV',
      capacity: '6 Person',
      price: 80,
      transmission: 'Manual',
      fuel: '80L',
      image: '/cr-v.png',
    },
    {
      name: 'MG ZX Excite',
      type: 'Hatchback',
      capacity: '4 Person',
      price: 74,
      transmission: 'Electric',
      fuel: '90L',
      image: '/mg-zx-excite.png',
    },
    // Add other cars here...
  ];

  const filteredCars = cars.filter(
    (car) =>
      (filters.type === '' || car.type === filters.type) &&
      (filters.capacity === '' || car.capacity === filters.capacity) &&
      car.price <= filters.maxPrice
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Section */}
        <aside className="bg-white p-4 rounded shadow hidden lg:block">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Type</label>
            <select
              className="w-full border rounded p-2"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">All Types</option>
              <option value="Sport">Sport</option>
              <option value="SUV">SUV</option>
              <option value="MPV">MPV</option>
              <option value="Sedan">Sedan</option>
              <option value="Coupe">Coupe</option>
              <option value="Hatchback">Hatchback</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Capacity</label>
            <select
              className="w-full border rounded p-2"
              value={filters.capacity}
              onChange={(e) => setFilters({ ...filters, capacity: e.target.value })}
            >
              <option value="">All Capacities</option>
              <option value="2 Person">2 Person</option>
              <option value="4 Person">4 Person</option>
              <option value="6 Person">6 Person</option>
              <option value="8 or More">8 or More</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="range"
              className="w-full"
              min="0"
              max="100"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: parseInt(e.target.value, 10) })
              }
            />
            <div className="text-sm mt-2">Max: ${filters.maxPrice}.00</div>
          </div>
        </aside>

        {/* Cars Section */}
        <main className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <div key={car.name} className="bg-white rounded shadow overflow-hidden">
                <img src={'/images/image 7.png'} alt={car.name} className="w-50% h-20 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{car.name}</h3>
                  <p className="text-sm text-gray-600">{car.type}</p>
                  <div className="text-sm mt-2">
                    <p>Fuel: {car.fuel}</p>
                    <p>Transmission: {car.transmission}</p>
                    <p>Capacity: {car.capacity}</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold">${car.price}.00/day</span>
                    <Link href={'/Detailed-car-rent'}><button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Rent Now
                    </button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
