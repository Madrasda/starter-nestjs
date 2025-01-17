import Head from 'next/head';
import Image from 'next/image';
import VendorLayout from '@/components/layout-vendor';

export default function CreateTemplate(props) {
  return (
    <>
    <Head>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.png" />
      <title>Madrasda | Create Template</title>
    </Head>

    <VendorLayout>
    <section className="body-font overflow-hidden ml-36">
    <div className="px-5 my-10 mx-auto">
    <h1 className="text-3xl text-primary ml-20 mt-10">CREATE TEMPLATE</h1>
      <div className="px-5 py-10 mx-auto flex justify-center">
        <div className="lg:w-5/6 flex justify-start flex-row">
          <div className='flex flex-col items-center bg-[#F0F0F0] p-4'>
            <div className='flex'>
              <button className='text-xs rounded-full border-2 px-3 py-2 mx-1 border-gray bg-off-white'>Center</button>
              <button className='text-xs rounded-full border-2 px-3 py-2 mx-1 border-gray bg-off-white'>Top Left Corner</button>
              <button className='text-xs rounded-full border-2 px-3 py-2 mx-1 border-gray bg-off-white'>Bottom Left Corner</button>
              <button className='text-xs rounded-full border-2 px-3 py-2 mx-1 border-gray bg-off-white'>Top Right Corner</button>
              <button className='text-xs rounded-full border-2 px-3 py-2 mx-1 border-gray bg-off-white'>Bottom Right Corner</button>
              <button className='text-xs rounded-full border-2 px-3 py-2 mx-1 border-gray bg-off-white'>Custom</button>
            </div>
            <img
              alt="ecommerce"
              className="w-full mt-2 lg:h-[620px] object-contain object-center rounded aspect-16/9"
              src="/v-tee.png"
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Round Neck Solid Men's T-Shirt
            </h1>

            <button className='rounded-full border-2 border-bg px-6 py-2 mt-1'>Upload Design</button>

            <div className='mt-6'>
            <p className='mb-2'>Select Side for Design</p>
            <div className='flex flex-row'>
              <button className='text-sm rounded-full border-2 border-bg px-10 py-1 mr-2'>Front</button>
              <button className='text-sm rounded-full border-2 border-bg px-10 py-1'>Back</button>
            </div>
            </div>
             
            <div className="mt-6">Colors</div>
            <div className="flex items-center mt-3 mb-3">
              <div className="flex">
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray bg-black rounded-full w-10 h-10 focus:outline-none"></button>
                  <p className='text-sm'>Black</p>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray ml-1 bg-[#4A2129] rounded-full w-10 h-10 focus:outline-none"></button>
                  <p className='text-sm'>Maroon</p>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray ml-1 bg-gray rounded-full w-10 h-10 focus:outline-none"></button>
                  <p className='text-sm'>Gray</p>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray ml-1 bg-[#281477] rounded-full w-10 h-10 focus:outline-none"></button>
                  <p className='text-sm'>Blue</p>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray ml-1 rounded-full w-10 h-10 focus:outline-none"></button>
                  <p className='text-sm'>White</p>
                </div>
              </div>
            </div>

            <div className="mt-6">Size Guide</div>
            <div className="flex justify-start items-center mt-3 mb-3">
                <div className="relative">
                <button className="w-10 text-sm justify-center mr-5 text-gray transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white hover:border-primary">XS</button>
                <button className="w-10 text-sm justify-center mr-5 text-gray transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white hover:border-primary">S</button>
                <button className="w-10 text-sm justify-center mr-5 text-gray transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white hover:border-primary">M</button>
                <button className="w-10 text-sm justify-center mr-5 text-gray transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white hover:border-primary">L</button>
                <button className="w-10 text-sm justify-center mr-5 text-gray transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white hover:border-primary">XL</button>
                <button className="w-10 text-sm justify-center mr-5 text-gray transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white hover:border-primary">XXL</button>
                </div>
              </div>
              <br></br>
            <div className="flex">
              <button className= "flex text-justify-center text-white bg-[#a5153F] border-0 py-2 px-10 focus:outline-none hover:bg-primary rounded-full">
                Save Template
              </button>
            </div>
            <br></br>
          </div>
        </div>
      </div>
      </div>
    </section>
    </VendorLayout>
    </>
  );
}
