import Head from "next/head";
import VendorLayout from "@/components/layout-vendor";
import SearchVendor from "@/components/search-vendor";
import Table from "@/components/table";

export default function ProductList () {
    return (
        <>
            <Head>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.png" />
            <title>Madrasda | Product List</title>
            </Head>

            <VendorLayout>
                <main className="body-font ml-36 overflow-hidden">
                <div className="px-5 my-10 mx-auto">
                <h1 className="text-3xl text-primary ml-20 mt-10">VIEW PRODUCTS</h1>
                <div className="flex flex-row justify-start items-center mt-10 ml-20 mr-20 text-sm p-2 border-b-2 border-bg">
                    <button className="text-white bg-primary px-6 py-3 rounded-lg w-1/6">Current Products</button>
                    <button className="text-primary bg-white px-6 py-3 rounded-lg w-1/6">All Products</button>
                    <div className="flex flex-row-reverse w-full items-center">
                        <button className="text-gray bg-white border-gray px-3 py-2 hover:bg-primary hover:text-white hover:border-primary rounded-lg border-2 w-fit mx-1 transition-all duration-200 ease-in-out">...</button>
                        <button className="text-gray bg-white border-gray px-3 py-2 hover:bg-primary hover:text-white hover:border-primary rounded-lg border-2 w-fit mx-1 transition-all duration-200 ease-in-out">Setup</button>
                        <button className="text-gray bg-white border-gray px-3 py-2 hover:bg-primary hover:text-white hover:border-primary rounded-lg border-2 w-fit mx-1 transition-all duration-200 ease-in-out">Open Documentation</button>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-center mt-10 ml-20 mr-20 text-sm p-2">
                    <SearchVendor />
                    <div className="flex flex-row-reverse w-full items-center">
                        <button className="text-gray bg-white border-gray px-3 py-2 hover:bg-primary hover:text-white hover:border-primary rounded-lg border-2 w-fit mx-1 transition-all duration-200 ease-in-out">Export</button>
                        <button className="text-gray bg-white border-gray px-3 py-2 hover:bg-primary hover:text-white hover:border-primary rounded-lg border-2 w-fit mx-1 transition-all duration-200 ease-in-out">Attachment</button>
                        <button className="text-gray bg-white border-gray px-3 py-2 hover:bg-primary hover:text-white hover:border-primary rounded-lg border-2 w-fit mx-1 transition-all duration-200 ease-in-out">Filters</button>
                    </div>
                </div>
                <div className='mt-4 ml-20'>
                    <Table />
                </div>
                </div>
                </main>
            </VendorLayout>
        </>
    )
}