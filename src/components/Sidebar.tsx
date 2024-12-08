'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-slate-200" >
      {/* Toggle Button for Mobile */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 md:w-[250px]`}
      >
        {/* Sidebar Content */}
        <div className="p-6 space-y-6">
          {/* TYPE Section */}
          <div>
            <p className="text-[12px] font-semibold text-[#90A3BF] border-b-2 pb-2">TYPE</p>
            <div className="flex flex-col border-b-2 gap-y-2 mt-2">
              <label className="flex items-center gap-x-2 font-semibold">
                <input type="checkbox" /> Sport (10)
              </label>
              <label className="flex items-center gap-x-2 font-semibold">
                <input type="checkbox" /> SUV (12)
              </label>
              <label className="flex items-center gap-x-2 font-semibold">
                <input type="checkbox" /> MPV (16)
              </label>
              <label className="flex items-center gap-x-2 font-semibold">
                <input type="checkbox" /> Sedan (20)
              </label>
              <label className="flex items-center gap-x-2 font-semibold">
                <input type="checkbox" /> Coupe (14)
              </label>
              <label className="flex items-center gap-x-2 font-semibold">
                <input type="checkbox" /> Hatchback (14)
              </label>
            </div>
          </div>

          {/* CAPACITY Section */}
          <div>
            <p className="text-[12px] font-semibold text-[#90A3BF] border-b-2 pb-2">CAPACITY</p>
            <div className="flex flex-col gap-y-2 mt-2">
              <label className="flex items-center gap-x-2 font-semibold">
                <input type="checkbox" /> 2 Person (10)
              </label>
              <label className="flex items-center gap-x-2 font-semibold">
                <input type="checkbox" /> 4 Person (14)
              </label>
              <label className="flex items-center gap-x-2 font-semibold">
                <input type="checkbox" /> 6 Person (12)
              </label>
              <label className="flex items-center gap-x-2 font-semibold">
                <input type="checkbox" /> 8 or More (16)
              </label>
            </div>
          </div>

          {/* PRICE Section */}
          <div>
            <p className="text-[12px] font-semibold text-[#90A3BF] border-b-2 pb-2">PRICE</p>
            <div className="mt-4">
              <Image src={'/images/P R I C E  R A N G E.png'} alt={'price'} width={296} height={56} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-[250px] p-6">
        {/* Placeholder for main content */}
      
      </div>
    </div>
  );
}
