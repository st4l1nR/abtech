
import Link from 'next/link';
import Head from 'next/head';
export default function Sidebar() {
    return (
        <div className='flex flex-col m-5 w-1/4 max-w-1/4'>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"/>
            </Head>
            {/* BRAND */}
            <div className="text-4xl text-white font-bold ml-5">
                Dashboard
            </div>
            {/* LIST ITEMS */}
            <div className='text-white mt-32'>
                <ul>
                    <Link href='/admin/'>
                        <li className=' DASHBOARD select-none flex bg-white text-purple-700 p-4 m-3 rounded-2xl transform hover:scale-110 transition duration-200 ml-10 items-center cursor-pointer'><div className="bi bi-shop mr-5"></div> Dashboard <i className="bi bi-arrow-right-short ml-24 text-xl laptop-stalin:ml-44"></i></li>
                    </Link>
                    <Link href='/admin/orders'>
                        <li className=' ORDERS select-none flex hover:bg-white hover:text-purple-700 p-4 m-3 rounded-2xl transform hover:scale-110 transition duration-200 ml-10 items-center cursor-pointer '><div className="bi bi-cart3 mr-5"></div>Orders</li>
                    </Link>
                    <Link href='/admin/products'>
                        <li className='select-none flex hover:bg-white hover:text-purple-700 p-4 m-3 rounded-2xl transform hover:scale-110 transition duration-200 ml-10 items-center cursor-pointer'><div className="bi bi-mouse mr-5"></div>Products</li>
                    </Link>
                    <Link href='/admin/categories'>
                    <li className='select-none flex hover:bg-white hover:text-purple-700 p-4 m-3 rounded-2xl transform hover:scale-110 transition duration-200 ml-10 items-center cursor-pointer'><div className="bi bi-list-check mr-5"></div>Categories</li>
                    </Link>
                    <Link href='/admin/shipping'>
                        <li className='select-none flex hover:bg-white hover:text-purple-700 p-4 m-3 rounded-2xl transform hover:scale-110 transition duration-200 ml-10 items-center cursor-pointer'><div className="bi bi-globe mr-5"></div>Shipping</li>
                    </Link>
                    <Link href='/admin/reports'>
                        <li className='select-none flex hover:bg-white hover:text-purple-700 p-4 m-3 rounded-2xl transform hover:scale-110 transition duration-200 ml-10 items-center cursor-pointer'><div className="bi bi-file-earmark-x mr-5"></div>Reports</li>
                    </Link>
                    <Link href='/admin/settings'>
                        <li className='select-none flex hover:bg-white hover:text-purple-700 p-4 m-3 rounded-2xl transform hover:scale-110 transition duration-200 ml-10 items-center cursor-pointer'><div className="bi bi-gear mr-5"></div>Settings</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}