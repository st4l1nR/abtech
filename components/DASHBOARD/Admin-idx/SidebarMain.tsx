import Image from 'next/image';
import tipoEjemplo from '../../../public/images/tipo-ejemplo.jpeg';
import logitech from '../../../public/images/logitech.jpg';

export default function SidebarMain() {
    return (
        <div className='flex m-5 border w-9/12 rounded-2xl bg-white max-w-3/4'>
            {/* SECTION 1 (STATICS) */}
            <div className="mt-5 ml-5 mb-5 mr-2 flex flex-col w-2/4 laptop-stalin:w-3/5">
                {/* BRAND */}
                <div className="text-3xl text-blue-700">
                    <span>Welcome, <span className='font-bold'>Admin</span></span>
                </div>
                {/* CARDS */}
                <div className="flex flex-wrap mt-10 laptop-stalin:flex-nowrap">
                    {/* CARD 1 */}
                    <div className="select-none transform hover:scale-110 flex bg-blue-200 w-full mx-3 mb-5 rounded-lg rounded-tl-card rounded-br-card h-36  transition duration-200 laptop-stalin:h-44 ">
                        <div className='flex laptop-stalin:mt-6'>
                            {/* ICON */}
                            <div className='flex w-16 h-16 mt-8 ml-5 bg-white text-purple-700 items-center justify-center rounded-md rounded-tl-2xl rounded-br-2xl text-4xl'>
                                <i className="bi bi-file-bar-graph"></i>
                            </div>
                            
                            {/* NUMBER */}
                            <div className='flex flex-col text-5xl text-purple-700 mt-8 ml-10 laptop-stalin:ml-3'>
                                <span>28,000</span>
                                <span className='text-lg '>Orders</span>
                            </div>

                            {/* PLUS */}
                            <div className='flex bg-purple-800 w-12 h-12 text-white rounded-lg rounded-tl-2xl rounded-br-2xl items-center justify-center font-bold mt-8 ml-10 laptop-stalin:ml-4'>
                                <div>+<span>23</span></div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="select-none transform hover:scale-110 flex bg-pink-200 w-full mx-3 mb-5 rounded-lg rounded-tr-card rounded-bl-card h-32  transition duration-200 laptop-stalin:h-44">
                        <div className="flex laptop-stalin:mt-4">
                            {/* ICON */}
                            <div className='flex w-16 h-16 mt-8 ml-5 bg-white text-purple-700 items-center justify-center rounded-md rounded-tl-2xl rounded-br-2xl text-4xl laptop-stalin:ml-2'>
                                <i className="bi bi-piggy-bank"></i>
                            </div>
                            
                            {/* NUMBER */}
                            <div className='flex flex-col text-4xl text-purple-700 mt-8 ml-10 laptop-stalin:ml-3'>
                                <div>$<span>1890,00</span></div>
                                <span className='text-lg '>Balance</span>
                            </div>

                            {/* PLUS */}
                            <div className='flex bg-purple-800 w-16 h-12 text-white rounded-lg rounded-tl-2xl rounded-br-2xl items-center justify-center font-bold mt-8 ml-10 laptop-stalin:ml-2'>
                                <div>+$ <span>548</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* STATISTICS */}
                <div className="flex justify-between">
                    {/* TITLE */}
                    <span className='font-bold text-xl text-blue-700'>Sales statistics</span>

                    {/* SELECT */}
                    <select className='cursor-pointer focus:outline-none flex justify-between text-blue-500'>
                        <option selected>Monthly</option>
                        <option >Weekly</option>
                        <option >Annualy</option>
                    </select>
                </div>

                {/* GRAPHICS */}
                <div className="flex">
                    {/* proximamente xd */}
                </div>

            </div>
            

            {/* SECTION 2 (TOP PRODUCTS) */}
            <div className="mt-5 mr-5 mb-5 ml-2 flex flex-col w-2/4 laptop-stalin:w-auto">
                {/* NAVIGATION  */}
                <div className='flex h-14'>
                    {/* INPUT */}
                    <div className='relative flex '>
                        <input type="text" placeholder='Search products...' className='focus:outline-none focus:shadow-md border border-blue-100 py-3 pl-5 pr-10 rounded-md rounded-tl-2xl rounded-br-2xl bg-blue-100 transition duration-200 text-blue-700' />
                        <i className="absolute inset-y-0 right-3 items-center flex text-blue-500 bi bi-search"></i>
                    </div>
                    {/* NOTIFICATION */}
                    <div className='flex relative bg-blue-100 ml-7 p-5 rounded-md rounded-tl-2xl rounded-br-2xl cursor-pointer select-none'>
                        <i className="bi bi-bell flex items-center justify-center text-blue-700"></i>
                        <div><i className="text-purple-600 absolute -top-2 -right-1 bi bi-circle-fill"></i> <i className="text-purple-400 absolute animate-ping -top-2 -right-1 bi bi-circle-fill"></i></div>
                    </div>
                    {/* PROFILE IMAGE */}
                    <div className='ml-6'>
                        <Image 
                            className='bg-blue-100 rounded-md rounded-tl-2xl rounded-br-2xl'
                            src={tipoEjemplo}
                            width='60'
                            height='55'
                        />
                    </div>
                </div>

                {/* TOP PRODUCTS */}

                {/* TITLE */}
                <div className='flex mt-10 justify-between items-baseline'>
                    <span className='text-xl text-purple-700'>Top selling products</span>
                    <span className='text-md cursor-pointer text-purple-600'>See all <i className="bi bi-caret-right"></i></span>
                </div>
                {/* PRODUCTS */}
                <div className='flex items-center mt-7 cursor-pointer '>
                    {/* NUMBER */}
                    <span className='text-purple-500'>1</span>
                    {/* IMAGE */}
                    <div className='border rounded-md shadow-md ml-5'>
                        <Image 
                            className='rounded-md'
                            src={logitech}
                            width='60'
                            height='60'
                            />
                    </div>
                    {/* DESCRIPTION */}
                    <div className="flex flex-col text-purple-500 ml-5">
                        {/* TEXT  */}
                        <span>Mouse Logitech L58117455</span>
                        {/* PRICE */}
                        <div className='font-bold'>$ <span>99.99</span> </div>
                    </div>

                </div>
            </div>
        </div>
    )
}