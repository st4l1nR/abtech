import Head from 'next/head';

export default function Navbar() {
    return (
        <div className='w-full p-3 flex items-center sticky top-0 bg-white shadow-lg z-20'>
            <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css" />
            </Head>
            {/* BRAND */}
            <div className='text-3xl'><span className='font-bold text-blue-700'>Ab</span><span className="font-thin">Tech</span></div>

            {/* OPTIONS */}
            <div className='ml-32'>
                <ul className='flex space-x-10 font-medium text-blue-900'>
                    <li>HOME</li>
                    <li>PRODUCT</li>
                    <li>PRINTERS</li>
                    <li>REVIEW</li>
                    <li>EXPERIENCE</li>
                    <li>SUPPORT</li>
                </ul>
            </div>

            {/* REGISTER OPTIONS */}
            <div className='flex ml-20 text-xl items-center  '> 
                <div className='mr-10 text-blue-900 font-medium'><span>LOG IN</span></div>
                <div className='cursor-pointer select-none rounded-full bg-gradient-to-r from-purple-600 to-purple-400 text-white px-7 py-3' ><span>SIGN UP</span></div>
            </div>

            {/* ICON */}
            <div className='relative ml-10'>
                <i className="bi bi-cart3 text-3xl"></i>
                <div className="absolute w-5 h-5 flex items-center justify-center rounded-full text-white bg-purple-500 p-3 -top-2 -right-5">
                    <span>8</span>
                </div>
            </div>
        </div>
    )
}