

export default function OrdersMain() {
    const rotateIcon = () => {
        const ICON = document.querySelector('.ICON');
        ICON.classList.toggle('rotate-180');
        const dropDown = document.querySelector('.DROPDOWN');
        dropDown.classList.toggle('invisible');
        dropDown.classList.toggle('opacity-0');

        if (dropDown.classList.contains('scale-90')) {
            dropDown.classList.replace('scale-90', 'scale-100');
        } else {
            dropDown.classList.replace('scale-100', 'scale-90');
        };

        
    };

    // START DATE

    const animationLetter = () => {
        const letter = document.querySelector('.STARTDATE');
        letter.classList.add('-translate-y-4');
        letter.classList.add('text-sm');
        const _input = document.querySelector('._INPUT');
        _input.classList.remove('opacity-0');
    }
    const removeAnimationLetter = () => {
        const letter = document.querySelector('.STARTDATE');
        letter.classList.remove('-translate-y-4');
        letter.classList.remove('text-sm');

        const _input = document.querySelector('._INPUT');
        _input.classList.add('opacity-0');

    }

    //END DATE 

    const animationLetterEND = () => {
        const letter = document.querySelector('.ENDATE');
        letter.classList.add('-translate-y-4');
        letter.classList.add('text-sm');
        const _input = document.querySelector('._INPUTEND');
        _input.classList.remove('opacity-0');
    }
    const removeAnimationLetterEND = () => {
        const letter = document.querySelector('.ENDATE');
        letter.classList.remove('-translate-y-4');
        letter.classList.remove('text-sm');

        const _input = document.querySelector('._INPUTEND');
        _input.classList.add('opacity-0');
    }

    // btn apply
    

    return (
        <div className='flex flex-col m-5 border w-9/12 rounded-2xl bg-white max-w-3/4 relative'>
            {/* TITLE */}
            <div className='flex'>
                <span className='text-3xl text-blue-700 m-5'>Orders</span>
            </div>
            {/* CONTAINER */}
            <div className="flex flex-col border mx-5 shadow-md rounded-lg bg-purple-100">
                <div className="m-5 flex ">
                    {/* INPUT */}
                    <div className="flex relative w-3/4 mr-2 border hover:border-purple-700 rounded-md transition duration-200 shadow-md">
                        <input type="text" placeholder='Search...' className='pl-10 p-4 w-full focus:outline-none focus:ring-1 rounded-md focus:ring-purple-400 transition duration-200'/>
                        <i className="bi bi-search absolute inset-y-0 left-3 items-center flex "></i>
                    </div>
                    {/* FILTERS */}
                    
                    <div onClick={rotateIcon} className=" flex w-1/4 border hover:border-purple-700 ml-2 justify-between items-center transition duration-200 rounded-md shadow-md select-none cursor-pointer bg-white">
                            <span className='ml-3'>Filters</span>
                            <i className="ICON bi bi-caret-down mr-3 transition duration-300 transform "></i>
                    </div>
                    {/* DROPDOWN */}
                    
                    <div className='DROPDOWN absolute border w-96 bg-white shadow-md rouned-md z-30 top-40 right-10 transform invisible opacity-0 scale-90 transition duration-200'>
                        {/* STATUS */}
                        <div className='flex flex-col m-3'>
                            <span className='text-lg'>Status</span>
                            {/* ORDER STATUS */}
                            <select className='my-1 p-4 border shadow-md focus:outline-none focus:ring focus:ring-purple-400 rounded-md transition duration-200'>
                                <option selected disabled >Order status</option>
                                <option >value1</option>
                                <option >value2</option>
                                <option >value3</option>
                            </select>
                            {/* PAIMENT STATUS */}
                            <select className='my-1 p-4 shadow-md focus:outline-none focus:ring focus:ring-purple-400 rounded-md transition duration-200'>
                                <option selected disabled>Paiment status</option>
                                <option >value1</option>
                                <option >value2</option>
                                <option >value3</option>
                            </select>
                            {/* DELIEVER STATUS */}
                            <select className='my-1 p-4 shadow-md focus:outline-none focus:ring focus:ring-purple-400 rounded-md transition duration-200'>
                                <option selected disabled>Deliever status</option>
                                <option >value1</option>
                                <option >value2</option>
                                <option >value3</option>
                            </select>
                        </div>
                        {/* ORDER DATE */}
                        <div className='m-3'>
                            <span className='text-lg'>Order date</span>
                            <div className='flex mt-3 h-14'>
                                {/* START DATE */}
                                <div onFocus={animationLetter} onBlur={removeAnimationLetter}  className='ELMTFOCUS relative border rounded-md shadow-md flex justify-between w-2/4 mr-2'>
                                    <input  className='_INPUT w-full pl-3 border rounded-md focus:outline-none focus:ring focus:ring-purple-400 transition duration-200 pr-9   ' id='input_start-date' type="text"  />
                                    <label className='STARTDATE top-4 left-3 absolute cursor-text transition duration-200 transform   ' htmlFor="input_start-date">Start date</label>
                                    <i className="absolute right-2 top-4 bi bi-calendar3"></i>
                                </div>
                            
                                {/* END DATE */}
                                <div onFocus={animationLetterEND} onBlur={removeAnimationLetterEND} className='ELMTFOCUS relative border rounded-md shadow-md flex justify-between w-2/4 ml-2'>
                                    <input  className='_INPUTEND w-full pl-3 border rounded-md focus:outline-none focus:ring focus:ring-purple-400 transition duration-200 pr-9   ' id='input_end-date' type="text"  />
                                    <label className='ENDATE top-4 left-3 absolute cursor-text transition duration-200 transform   ' htmlFor="input_end-date">End date</label>
                                    <i className="absolute right-2 top-4 bi bi-calendar3"></i>
                                </div>
                            </div>
                        </div>
                        {/* FOOTER */}
                        <div className='flex m-3 justify-end'>
                            <button className='border shadow-md px-5 py-3 rounded-md mr-3 text-lg'>Cancel</button>
                            <button className='border shadow-md px-5 py-3 rounded-md text-lg bg-purple-600 text-white hover:bg-purple-500 transition duration-200'>Apply</button>
                        </div>
                    </div>
                </div>

                <hr className='mx-3 border-purple-300 rounded-md z-10'/>
                
                <table >
                    <thead>
                        <tr>
                            <td className='py-3 px-3'>Order # </td>
                            <td className='py-3 px-3'>Date / Time</td>
                            <td className='py-3 px-3'>Status</td>
                            <td className='py-3 px-3'>Quantity</td>
                        </tr>
                    </thead>
                    <tbody className='bg-white border-2 border-white'>
                        <tr>
                            <td className='px-3 py-4' colSpan={4}>Not found</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}