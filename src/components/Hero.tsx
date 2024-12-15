// pages/index.js

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Car Rental</title>
        <meta name="description" content="Car rental website" />
      </Head>

      <main className="bg-gray-50 p-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Left Hero Section */}
          <div className="bg-blue-500 text-white p-8 rounded-lg flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-4">The Best Platform for Car Rental</h1>
            <p className="mb-6">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <Link href={"/categorie-car-rent"}><button className="bg-white text-blue-500 py-2 px-4 rounded">Rental Car</button></Link>
            <div className="mt-6">
              <Image src="/image/image 7.png" alt="Car Image 1" width={500} height={300} className="rounded" />
            </div>
          </div>
          {/* Right Hero Section */}
          <div className="bg-blue-700 text-white p-8 rounded-lg flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-4">Easy way to rent a car at a low price</h1>
            <p className="mb-6">Providing cheap car rental services and safe and comfortable facilities.</p>
            <Link href={"/categorie-car-rent"}><button className="bg-white text-blue-700 py-2 px-4 rounded">Rental Car</button></Link>
            <div className="mt-6">
              <Image src="/image/image 8.png" alt="Car Image 2" width={500} height={300} className="rounded" />
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white shadow p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-10">
          <div>
            <label className="block text-gray-700">Pick - Up</label>
            <input
              type="text"
              placeholder="Select your city"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Drop - Off</label>
            <input
              type="text"
              placeholder="Select your city"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
        </div>

        {/* Popular Cars Section */}
        <h2 className="text-2xl font-bold mb-6">Popular Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white shadow p-6 rounded-lg">
            <Image src="/image/image 7.png" alt="Koenigsegg" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold">Koenigsegg</h3>
            <p className="text-gray-700">$99.00/day</p>
            <Link href={'/categorie-car-rent'}><button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Rent Now</button></Link>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <Image src="/image/image 8.png" alt="Nissan GT-R" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold">Nissan GT-R</h3>
            <p className="text-gray-700">$80.00/day</p>
            <Link href={'/categorie-car-rent'}><button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Rent Now</button></Link>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <Image src="/image/car (4).png" alt="Rolls-Royce" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold">Rolls-Royce</h3>
            <p className="text-gray-700">$96.00/day</p>
            <Link href={'/categorie-car-rent'}><button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Rent Now</button></Link>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <Image src="/image/image 8.png" alt="Nissan GT-R" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold">Nissan GT-R</h3>
            <p className="text-gray-700">$80.00/day</p>
            <Link href={'/categorie-car-rent'}><button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Rent Now</button></Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white shadow p-6 rounded-lg">
            <Image src="/image/Car (5).png" alt="Koenigsegg" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold">All New Rush</h3>
            <p className="text-gray-700">$72.00/day</p>
            <Link href={'/categorie-car-rent'}><button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Rent Now</button></Link>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <Image src="/image/Car (7).png" alt="Nissan GT-R" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold">CR -V</h3>
            <p className="text-gray-700">$80.00/day</p>
            <Link href={'/categorie-car-rent'}><button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Rent Now</button></Link>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <Image src="/image/Car (8).png" alt="Rolls-Royce" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold">All New Terios</h3>
            <p className="text-gray-700">$74.00/day</p>
            <Link href={'/categorie-car-rent'}><button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Rent Now</button></Link>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <Image src="/image/Car (9).png" alt="Nissan GT-R" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold">CR -V</h3>
            <p className="text-gray-700">$80.00/day</p>
            <Link href={'/categorie-car-rent'}><button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Rent Now</button></Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white shadow p-6 rounded-lg">
            <Image src="/image/Car (10).png" alt="Koenigsegg" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold">MG ZX Exclusice</h3>
            <p className="text-gray-700">$76.00/day</p>
            <Link href={'/categorie-car-rent'}><button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Rent Now</button></Link>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <Image src="/image/Car (11).png" alt="Nissan GT-R" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold">New MG ZS</h3>
            <p className="text-gray-700">$80.00/day</p>
            <Link href={'/categorie-car-rent'}><button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Rent Now</button></Link>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <Image src="/image/Car (10).png" alt="Rolls-Royce" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold">MG ZX Excite</h3>
            <p className="text-gray-700">$74.00/day</p>
            <Link href={'/categorie-car-rent'}><button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Rent Now</button></Link>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <Image src="/image/Car (12).png" alt="Nissan GT-R" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold">New MG ZS</h3>
            <p className="text-gray-700">$80.00/day</p>
            <Link href={'/categorie-car-rent'}><button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Rent Now</button></Link>
          </div>
        </div>
      </main>
    </div>
  );
}
