import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";

export default function Layout() {
  return (
    <div className="bg-slate-200 min-h-screen">
     
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Images Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between w-full px-4 md:px-8 lg:px-16">
          {/* Left Pick Image */}
          <Image
            src={"/images/Pick - Up.png"}
            alt="Pick Button"
            width={400}
            height={100}
            className="rounded-[10px] md:w-[30%] cursor-pointer"
          />

          {/* Centered Button */}
          <Image
            src={"/images/Switch.png"}
            alt="Switch Button"
            width={100}
            height={50}
            className="rounded-full mx-auto md:mx-0 my-4 md:my-0 cursor-pointer"
          />

          {/* Right Drop Image */}
          <Image
            src={"/images/Drop - Off.png"}
            alt="Drop Button"
            width={400}
            height={100}
            className="rounded-[10px] md:w-[30%] cursor-pointer"
          />
        </div>
      </div>

      {/* Card Section */}
      <div className="mt-8 px-4 md:px-8 lg:px-16">
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Row of Cards */}
          <div className="rounded-[10px] overflow-hidden">
            <Image
              src={"/images/Catalog 1.png"}
              alt="Catalog 1"
              width={304}
              height={388}
            />
          </div>
          <div className="rounded-[10px] overflow-hidden">
            <Image
              src={"/images/Catalog 2.png"}
              alt="Catalog 2"
              width={304}
              height={388}
            />
          </div>
          <div className="rounded-[10px] overflow-hidden">
            <Image
              src={"/images/Catalog 3.png"}
              alt="Catalog 3"
              width={304}
              height={388}
            />
          </div>

          {/* Second Row of Cards */}
          <div className="rounded-[10px] overflow-hidden">
            <Image
              src={"/images/Catalog 1 (1).png"}
              alt="Catalog 1 (1)"
              width={304}
              height={388}
            />
          </div>
          <div className="rounded-[10px] overflow-hidden">
            <Image
              src={"/images/Catalog 2 (1).png"}
              alt="Catalog 2 (1)"
              width={304}
              height={388}
            />
          </div>
          <div className="rounded-[10px] overflow-hidden">
            <Image
              src={"/images/Catalog 3 (1).png"}
              alt="Catalog 3 (1)"
              width={304}
              height={388}
            />
          </div>

          {/* Third Row of Cards */}
          <div className="rounded-[10px] overflow-hidden">
            <Image
              src={"/images/Catalog 1 (2).png"}
              alt="Catalog 1 (2)"
              width={304}
              height={388}
            />
          </div>
          <div className="rounded-[10px] overflow-hidden">
            <Image
              src={"/images/Catalog 2 (2).png"}
              alt="Catalog 2 (2)"
              width={304}
              height={388}
            />
          </div>
          <div className="rounded-[10px] overflow-hidden">
            <Image
              src={"/images/Catalog 3 (2).png"}
              alt="Catalog 3 (2)"
              width={304}
              height={388}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
