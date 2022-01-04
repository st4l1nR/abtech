import { useState } from "react";

export default function Home() {
    return (
        <div className='flex ' >
            {/* DESCRIPTION */}
            <div className='flex flex-col m-4 mt-32  w-6/12'>
                <div className='text-5xl text-gray-600 mb-3'>Logitech ®</div>
                <div className='text-5xl font-semibold text-gray-600 mb-5'>WIRELES COMBO MK220</div>
                <div className='text-gray-600 text-xl mb-10'>Full features in a compact size</div>

                <div className='rounded-full bg-gradient-to-r from-purple-700 to-purple-400 text-white flex items-center justify-center p-3 select-none cursor-pointer w-32'>View more</div>
            </div>

            {/* IMAGE */}
            <div className='flex flex-col items-center justify-center  w-6/12'>
                <div>Image not found :,v</div>
                <i className="bi bi-image-fill text-9xl"></i>
            </div>
        </div>
    )
}