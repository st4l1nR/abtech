import CategoriesSidebar from "../../../../components/DASHBOARD/categories/CategoriesSidebar";
import Link from 'next/link';

export default function CategoriesAdd() {
    const onfocusInputName = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_NAME');
        _input_name.classList.add('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__NAME');
        __input_name.classList.remove('opacity-0');
    };
    const onblurInputName = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_NAME');
        _input_name.classList.remove('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__NAME');
        __input_name.classList.add('opacity-0');
    };
    // LINK 
    const onfocusInputLink = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_LINK');
        _input_name.classList.add('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__LINK');
        __input_name.classList.remove('opacity-0');
    };
    const onblurInputLink = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_LINK');
        _input_name.classList.remove('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__LINK');
        __input_name.classList.add('opacity-0');
    };

    // TEXT AREA
    const onfocusInputText = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_TEXT');
        _input_name.classList.add('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__TEXT');
        __input_name.classList.remove('opacity-0');
    };
    const onblurInputText = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_TEXT');
        _input_name.classList.remove('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__TEXT');
        __input_name.classList.add('opacity-0');
    };

    return (
        <div className='flex h-screen'>
            <CategoriesSidebar />
            <div className='flex flex-col m-5 border w-9/12 rounded-2xl bg-white max-w-3/4'>
                {/* BUTTON */}
                <Link href='/admin/categories'>
                    <div className='m-5 bg-purple-500 text-white cursor-pointer p-3 w-32 justify-center rounded-full items-center flex shadow-md'> <div className="bi bi-arrow-left-short mr-3 text-xl "></div> Categories</div>
                </Link>
                {/* TITLE */}
                <div className='text-3xl text-blue-700 ml-5'>Add categories</div>
                {/* CONTAINER SECTION */}
                <div className='grid grid-cols-3 m-3 gap-3 '>
                    {/* DETAILS */}
                    <div className='col-span-2 shadow-md border border-purple-200 rounded-md'>
                        <span className='border-b border-purple-700 m-2 text-xl'>Details</span>

                        <div className="grid grid-cols-2 gap-3 m-2">
                            {/* INPUT NAME */}
                            <div onFocus={onfocusInputName} onBlur={onblurInputName} className=' border border-purple-300 shadow-md rounded-md relative'>
                                <input id='name__input' type="text" className='INPUT__NAME transition duration-200 w-full p-3 focus:outline-none focus:ring focus:ring-purple-400 rounded-md' />
                                <label htmlFor="name__input" className='PLACEHOLDER_NAME absolute left-3 top-3 cursor-text transition duration-200 transform '>Name</label>
                            </div>  

                            {/* INPUT LINK */}
                            <div onFocus={onfocusInputLink} onBlur={onblurInputLink} className=' border border-purple-300 shadow-md rounded-md relative'>
                                <input id='link__input' type="text" className='INPUT__LINK transition duration-200 w-full p-3 focus:outline-none focus:ring focus:ring-purple-400 rounded-md' />
                                <label htmlFor="link__input" className='PLACEHOLDER_LINK absolute left-3 top-3 cursor-text transition duration-200 transform '>Link</label>
                            </div>
                            {/* TEXTAREA */}

                            <div onFocus={onfocusInputText} onBlur={onblurInputText} className='relative col-span-2 border border-purple-300 shadow-md rounded-md '>
                                <textarea id='textarea__input' className='INPUT__TEXT transition duration-200 border-purple-300 w-full p-3 focus:outline-none focus:ring focus:ring-purple-400 rounded-md resize-none'></textarea>
                                <label htmlFor="textarea__input" className='PLACEHOLDER_TEXT absolute left-3 top-3 cursor-text transition duration-200 transform '>Description</label>
                            </div>


                        </div>

                    </div>

                    {/* SAVE CHANGES */}
                    <div className=' rounded-md'>
                        <div className='h-3/6 flex justify-center items-center border border-purple-200 shadow-md bg-white p-5 rounded-md'>
                            <div className=' bg-purple-600 h-full w-full text-white rounded-md flex items-center justify-center text-xl select-none cursor-pointer'>Save Changes</div>
                        </div>

                        <div className='h-3/6 border border-purple-200 mt-3 rounded-md shadow-md'>
                            <span className=' border-b border-purple-700 m-3 '>Father</span>
                            <div className='text-start pt-5 pl-3'>Please add another category first</div>
                        </div>
                    </div>

                    {/* IMAGES */}
                    <div className='border border-purple-200 shadow-md rounded-md col-span-2 p-3'>
                        <span className="border-b mb-3 border-purple-700">Images</span>
                        <div className='mt-3 shadow-inner rounded-md h-48 bg-gradient-to-r from-purple-300 to-white p-3'>
                            <div className="flex items-center justify-center border-2 border-dotted border-purple-500 rounded-md h-full">
                                <div className='p-3'>
                                    <input type="file" id='file__input' className='hidden '/>
                                    <label htmlFor="file__input" className='p-4 rounded-md bg-purple-600 text-white cursor-pointer'>Upload image</label>
                                </div>                                
                            </div>
                        </div>      
                    </div>
                </div>  

            </div>
        </div>
    )
}