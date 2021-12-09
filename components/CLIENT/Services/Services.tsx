

export default function Services() {
    return (
        <div className='flex flex-col p-10'>
            {/* DESCRIPTION */}
            <div className='text-center'>
                <div className='text-xl text-blue-700'>OUR SERVICES</div>
                <div className='text-gray-600 text-3xl'>We Provide Best Quality Service</div>
                <div className='text-gray-700 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptates ducimus mollitia <br /> dolores sequi accusantium quam facilis assumenda officia? Quod expedita sint laudantium fuga,<br /> excepturi veritatis. Voluptatibus sint quas voluptates!</div>
            </div>

            {/* CARDS */}
            <div className='grid grid-cols-3 grid-rows-2 gap-4 mt-10 p-3'>
                <div className='p-3 shadow-xl h-96 border group   hover:bg-purple-400 transition duration-150 items-center justify-center flex flex-col'>
                    <span><i className="bi bi-telephone text-7xl text-purple-800 group-hover:text-white"></i></span>
                    <div className='text-center my-10 group-hover:text-white'>
                        <div className='font-semibold text-xl'>Our Services</div>
                        <div className='font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, necessitatibus veniam inventore doloribus explicabo qui ea ab aut a eius?</div>
                    </div>
                    <div className='cursor-pointer select-none shadow-md bg-white text-gray-600 rounded-full flex items-center justify-center w-32 p-3'>Read More</div>
                </div>
                <div className='p-3shadow-xl h-96 border group hover:bg-purple-400 transition duration-150 items-center justify-center flex flex-col'>
                    <span className='relative'>
                        <i className="bi bi-cloud text-9xl text-purple-800 group-hover:text-white"></i>
                        <i className=" bi bi-shield-lock text-6xl text-purple-800 group-hover:text-white absolute top-9 left-8"></i>
                    </span>
                    <div className='text-center my-10 -mt-2 group-hover:text-white'>
                        <div className='font-semibold text-xl'>Security solutions</div>
                        <div className='font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, necessitatibus veniam inventore doloribus explicabo qui ea ab aut a eius?</div>
                    </div>
                    <div className='cursor-pointer select-none shadow-md bg-white text-gray-600 rounded-full flex items-center justify-center w-32 p-3'>Read More</div>
                </div>
                <div className='p-3 shadow-xl h-96 border group hover:bg-purple-400 transition duration-150 items-center justify-center flex flex-col'>
                    <span><i className="bi bi-headphones text-7xl text-purple-800 group-hover:text-white"></i></span>
                    <div className='text-center my-10 group-hover:text-white'>
                        <div className='font-semibold text-xl'>Sound systems</div>
                        <div className='font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, necessitatibus veniam inventore doloribus explicabo qui ea ab aut a eius?</div>
                    </div>
                    <div className='cursor-pointer select-none shadow-md bg-white text-gray-600 rounded-full flex items-center justify-center w-32 p-3'>Read More</div>
                </div>
                <div className='p-3 shadow-xl h-96 border group hover:bg-purple-400 transition duration-150 items-center justify-center flex flex-col'>
                    <span><i className="bi bi-laptop text-7xl text-purple-800 group-hover:text-white"></i></span>
                    <div className='text-center my-10 group-hover:text-white'>
                        <div className='font-semibold text-xl'>Peripherals</div>
                        <div className='font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, necessitatibus veniam inventore doloribus explicabo qui ea ab aut a eius?</div>
                    </div>
                    <div className='cursor-pointer select-none shadow-md bg-white text-gray-600 rounded-full flex items-center justify-center w-32 p-3'>Read More</div>
                </div>
                <div className='p-3 shadow-xl h-96 border group  hover:bg-purple-400 transition duration-150 items-center justify-center flex flex-col'>
                    <span><i className="bi bi-camera-video text-7xl text-purple-800 group-hover:text-white"></i></span>
                    <div className='text-center my-10 group-hover:text-white'>
                        <div className='font-semibold text-xl'>Video colaboration</div>
                        <div className='font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, necessitatibus veniam inventore doloribus explicabo qui ea ab aut a eius?</div>
                    </div>
                    <div className='cursor-pointer select-none shadow-md bg-white text-gray-600 rounded-full flex items-center justify-center w-32 p-3'>Read More</div>
                </div>
                <div className='p-3 shadow-xl h-96 border group  hover:bg-purple-400 transition duration-150 items-center justify-center flex flex-col'>
                    <span><i className="bi bi-printer text-7xl text-purple-800 group-hover:text-white"></i></span>
                    <div className='text-center my-10 group-hover:text-white'>
                        <div className='font-semibold text-xl'>Printers, Proyectors, & Scanners</div>
                        <div className='font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, necessitatibus veniam inventore doloribus explicabo qui ea ab aut a eius?</div>
                    </div>
                    <div className='cursor-pointer select-none shadow-md bg-white text-gray-600 rounded-full flex items-center justify-center w-32 p-3'>Read More</div>
                </div>
            </div>
        </div>
    )
}