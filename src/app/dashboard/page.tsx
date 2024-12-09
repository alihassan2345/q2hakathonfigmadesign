import React from 'react';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <aside className="col-span-1 bg-white p-6 rounded-lg shadow space-y-6">
          <nav className="space-y-4">
            <a href="#" className="block text-blue-600 font-semibold">Dashboard</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Car Rent</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Reimburse</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Inbox</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Calendar</a>
          </nav>
          <hr />
          <nav className="space-y-4">
            <a href="#" className="block text-gray-600 hover:text-blue-600">Settings</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Help & Center</a>
            <button className="block text-gray-600 hover:text-blue-600">Dark Mode</button>
            <button className="block text-gray-600 hover:text-blue-600">Log Out</button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="col-span-3 space-y-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Map and Rental Details */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Details Rental</h2>
              <div className="h-48 bg-gray-200 rounded-lg mb-6"><Image src={'/images/Maps.png'} alt='map' width={486} height={272}></Image></div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Pick-Up</span>
                  <span>Kota Semarang</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Date</span>
                  <span>20 July 2022</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Time</span>
                  <span>07:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Drop-Off</span>
                  <span>Kota Semarang</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Date</span>
                  <span>21 July 2022</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Time</span>
                  <span>01:00</span>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <span className="font-semibold">Total Rental Price</span>
                <span>$80.00</span>
              </div>
            </div>

            {/* Top 5 Car Rental */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Top 5 Car Rental</h2>
              <div className="flex items-center justify-between mb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-semibold">72k</span>
                </div>
                <ul className="space-y-2">
                  {['SUV', 'Coupe', 'Hatchback', 'MPV'].map((category, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{category}</span>
                      <span>{Math.floor(Math.random() * 20000)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
            <div className="space-y-4">
              {['Nissan GT-R', 'Koenigsegg', 'Rolls-Royce', 'CR-V'].map((car, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{car}</span>
                  <span>$80.00</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

