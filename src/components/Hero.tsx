import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    
    <div className="w-full h-auto mt-[124px] bg-slate-200">
  <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
    <div className='flex flex-col gap-y-3 ml-[9px]'><h1 className='text-[20px] font-semibold'>Go to another pages</h1>  
       <Link href="/categorie-car-rent" className='bg-red-400'>Categorie car rent</Link>
       <Link href="/Detailed-car-rent" className='bg-green-400'>Detailed car rent</Link>
       <Link href="/payment" className='bg-yellow-400'>payment car rent</Link>
       <Link href="/dashboard" className='bg-orange-400'>Dashboard car rent</Link></div>
    {/* Left Car Image (Mobile: column, Tablet/Laptop: row) */}
    <Image
      src={"/images/Ads 1.png"}
      alt="left car"
      height={640}
      width={360}
      className="mt-[32px] md:mt-0 md:ml-[64px] rounded-[10px] md:w-[45%] cursor-pointer"
    />

    {/* Right Car Image (Mobile: hidden, Tablet/Laptop: row) */}
    <Image
      src={"/images/Ads 2.png"}
      alt="right car"
      height={640}
      width={360}
      className="mt-[32px] md:mt-0 md:ml-0 md:mr-[64px] rounded-[10px] md:w-[45%] hidden md:block cursor-pointer"
    />
  </div>

  {/* Container for the bottom elements */}
  <div className="mt-[50px] flex flex-col md:flex-row justify-between">
    {/* LEFT PICK (Mobile: center below the car, Tablet/Laptop: left side) */}
    <Image
      src={'/images/Pick - Up.png'}
      alt='left pick button'
      width={582}
      height={132}
      className='rounded-[10px] md:w-[45%] ml-[64px] mt-[32px] mx-auto cursor-pointer'
    />

    {/* CENTERED BUTTON (Mobile: center below the pick image, Tablet/Laptop: center below the left car image) */}
    <Image
      src={'/images/Switch.png'}
      alt='centered button'
      width={80}
      height={60}
      className='mt-[32px] mx-auto rounded-[30px] cursor-pointer'
    />

    {/* RIGHT DROP (Mobile: center below the pick image, Tablet/Laptop: right side below the right car) */}
    <Image
      src={'/images/Drop - Off.png'}
      alt='right drop button'
      width={582}
      height={132}
      className='rounded-[10px] md:w-[45%] mr-[64px] mt-[32px] mx-auto cursor-pointer'
    />
  </div>

  {/* All Cards (Orange Boxes) */}
  <div className='w-full h-auto mt-[592px] gap-[32px] bg-slate-200 gap-y-6 flex-col'>
    {/* Parent div */}
    <div className=' w-full h-auto gap-[32px] mx-[1%] flex flex-col md:flex-row my-[20px]'>
      <div className='w-[304px] h-[388px] rounded-[10px] mx-auto'><Image src={'/images/Catalog 1.png'} alt='shgd' width={304} height={388}></Image></div>
      <div className='w-[304px] h-[388px] rounded-[10px] mx-auto'><Image src={'/images/Catalog 2.png'} alt='shgd' width={304} height={388}></Image></div>
      <div className='w-[304px] h-[388px] rounded-[10px] mx-auto'><Image src={'/images/Catalog 3.png'} alt='shgd' width={304} height={388}></Image></div>
      <div className='w-[304px] h-[388px] rounded-[10px] mx-auto'><Image src={'/images/Catalog 4.png'} alt='shgd' width={304} height={388}></Image></div>
    </div>
    <div className=' w-full h-auto gap-[32px] mx-[1%] flex flex-col md:flex-row my-[20px]'>
      <div className='w-[304px] h-[388px] rounded-[10px] mx-auto'><Image src={'/images/Catalog 1 (1).png'} alt='shgd' width={304} height={388}></Image></div>
      <div className='w-[304px] h-[388px] rounded-[10px] mx-auto'><Image src={'/images/Catalog 2 (1).png'} alt='shgd' width={304} height={388}></Image></div>
      <div className='w-[304px] h-[388px] rounded-[10px] mx-auto'><Image src={'/images/Catalog 3 (1).png'} alt='shgd' width={304} height={388}></Image></div>
      <div className='w-[304px] h-[388px] rounded-[10px] mx-auto'><Image src={'/images/Catalog 4 (1).png'} alt='shgd' width={304} height={388}></Image></div>
    </div>
    <div className=' w-full h-auto gap-[32px] mx-[1%] flex flex-col md:flex-row my-[20px]'>
      <div className='w-[304px] h-[388px] rounded-[10px] mx-auto'><Image src={'/images/Catalog 1 (2).png'} alt='shgd' width={304} height={388}></Image></div>
      <div className='w-[304px] h-[388px] rounded-[10px] mx-auto'><Image src={'/images/Catalog 2 (2).png'} alt='shgd' width={304} height={388}></Image></div>
      <div className='w-[304px] h-[388px] rounded-[10px] mx-auto'><Image src={'/images/Catalog 3 (2).png'} alt='shgd' width={304} height={388}></Image></div>
      <div className='w-[304px] h-[388px] rounded-[10px] mx-auto'><Image src={'/images/Catalog 4 (2).png'} alt='shgd' width={304} height={388}></Image></div>
    </div>
    
  </div>
</div>


  
  
  )
}

export default Hero
