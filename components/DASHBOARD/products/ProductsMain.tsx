import Link from "next/link";

export default function ProductsMain() {
    return (
        <div className='flex flex-col m-5 border w-9/12 rounded-2xl bg-white max-w-3/4 '>
            {/* NAVIGATION */}
            <div className="flex justify-between mr-5 items-center">
                <span className="text-3xl text-blue-700 m-5 ">
                    Products
                </span>
                <Link href='/admin/products/add'>
                    <div className='hover:bg-purple-500 bg-purple-600 flex  items-center p-2 w-32 rounded-full text-white justify-center text-lg cursor-pointer select-none transition duration-200 shadow-md'>
                        <i className="bi bi-plus-circle mr-3"></i> Add
                    </div>
                </Link>
            </div>

            {/* ADD PRODUCTS */}
            <div className='flex justify-center items-center  bg-cogs h-full m-5 border rounded-md'>
                <div className='bg-gradient-to-r from-blue-400 to-purple-500 w-96 h-52  flex rounded-lg shadow-lg' >
                    <div className="bg-white w-full m-1 rounded-md shadow-lg">
                        <div className='text-xl text-center flex p-2'>Add your first physical or digital product <br /></div> 
                        <div className='p-2 mt-3 text-lg'>
                        Add your product and variants manually via the dashboard or programatically via our <a href="https://roblox.com/home" className='border-b border-purple-700 text-purple-600 font-bold'>Create product API</a> . Products must have at least a name and price.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}