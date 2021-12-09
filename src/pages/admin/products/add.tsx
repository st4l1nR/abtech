import ProductsSidebar from "../../../../components/DASHBOARD/products/ProductsSidebar";
import Link from "next/link";

export default function AddProducts() {
    {/* INPUT NAME */}
    const onfocusInputName = () => {
        const _input_name = document.querySelector('.PLACEHOLD_NAME');
        _input_name.classList.add('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__NAME');
        __input_name.classList.remove('opacity-0');

    };
    const onblurInputName = () => {
        const _input_name = document.querySelector('.PLACEHOLD_NAME');
        _input_name.classList.remove('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__NAME');
        __input_name.classList.add('opacity-0');
    };

    {/* INPUT SKU */}
    const onfocusInputSKU = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_SKU');
        _input_name.classList.add('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__SKU');
        __input_name.classList.remove('opacity-0');

    };
    const onblurInputSKU = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_SKU');
        _input_name.classList.remove('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__SKU');
        __input_name.classList.add('opacity-0');
    };

    {/* INPUT INVENTORY */}
    const onfocusInputInventory = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_INV');
        _input_name.classList.add('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__INV');
        __input_name.classList.remove('opacity-0');
    };
    const onblurInputInventoty = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_INV');
        _input_name.classList.remove('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__INV');
        __input_name.classList.add('opacity-0');
    };

    {/* INPUT TEXTAREA */}
    const onfocusInputTextArea = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_TEXT');
        _input_name.classList.add('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__TEXT');
        __input_name.classList.remove('opacity-0');
    };
    const onblurInputTextArea = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_TEXT');
        _input_name.classList.remove('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__TEXT');
        __input_name.classList.add('opacity-0');
    };

    {/* INPUT PRICE */}
    const onfocusInputPrice = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_PRICE');
        _input_name.classList.add('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__PRICE');
        __input_name.classList.remove('opacity-0');
    };
    const onblurInputPrice = () => {
        const _input_name = document.querySelector('.PLACEHOLDER_PRICE');
        _input_name.classList.remove('-translate-y-3', 'text-sm');
        const __input_name = document.querySelector('.INPUT__PRICE');
        __input_name.classList.add('opacity-0');
    };

    
    
    return (
        <div className='flex h-screen'>
            <ProductsSidebar />
            <div className='flex flex-col m-5 border w-9/12 rounded-2xl bg-white max-w-3/4 '>
                {/* BTN PRODUCTS */}
                <Link href='/admin/products'>
                    <div className='bg-purple-600 text-white w-32 justify-center flex p-2 text-lg rounded-full mt-3 ml-3 cursor-pointer hover:bg-purple-500 transition duration-200'>
                        <i className="bi bi-arrow-left-short mr-3"></i>
                        <span>Products</span>
                    </div>
                </Link>

                {/* CONTAINER */}
                <div className="flex h-full m-5 rounded-md overflow-hidden overflow-y-scroll justify-between">
                    {/* NAVIGATION */}
                    <div className='border w-1/4 mr-3 p-2 sticky top-0'>
                        <nav>
                            <ul>
                                <li className='p-3 border border-white m-1 rounded-xl hover:bg-purple-100 cursor-pointer'><a href="/admin/products/add#details">Details</a></li>
                                <li className='p-3 border border-white m-1 rounded-xl hover:bg-purple-100 cursor-pointer'>Price</li>
                                <li className='p-3 border border-white m-1 rounded-xl hover:bg-purple-100 cursor-pointer'>Variants</li>
                                <li className='p-3 border border-white m-1 rounded-xl hover:bg-purple-100 cursor-pointer'>Images</li>
                                <li className='p-3 border border-white m-1 rounded-xl hover:bg-purple-100 cursor-pointer'>Delivery options</li>
                                <li className='p-3 border border-white m-1 rounded-xl hover:bg-purple-100 cursor-pointer'>Digital delivery</li>
                                <li className='p-3 border border-white m-1 rounded-xl hover:bg-purple-100 cursor-pointer'>Other options</li>
                                <li className='p-3 border border-white m-1 rounded-xl hover:bg-purple-100 cursor-pointer'>SEO</li>
                                <li className='p-3 border border-white m-1 rounded-xl hover:bg-purple-100 cursor-pointer'>More</li>
                            </ul>
                        </nav>
                    </div>
                    
                    {/* DETAILS CONTAINER */}
                    <div className=' w-2/4 mr-3'>

                        {/* DETAILS */}
                        <div className='border shadow-md rounded-md' id='details'>
                            <span className='text-lg border-b border-purple-700 m-5'>Details</span>
                            {/* INPUTS */}
                            <div className='grid grid-cols-2 grid-rows-2 gap-2 mt-5 mx-3'>
                                {/* INPUT NAME */}
                                <div onFocus={onfocusInputName} onBlur={onblurInputName} className='col-span-2  border border-purple-300 rounded-md relative'>
                                    <input type="text" id='name__required__input' className='INPUT__NAME w-full p-4 focus:outline-none focus:ring focus:ring-purple-400 rounded-md transition duration-200' />
                                    <label htmlFor="name__required__input" className='PLACEHOLD_NAME select-none absolute left-4 top-4 cursor-text transition duration-200 transform '>Name <span className='text-gray-500'>(required)</span></label>
                                </div>
                                {/* INPUT SKU */}
                                <div onFocus={onfocusInputSKU} onBlur={onblurInputSKU} className=' border border-purple-300 rounded-md relative'>
                                    <input type="text" id='sku__input'  className='INPUT__SKU w-full p-4 focus:outline-none focus:ring focus:ring-purple-400 rounded-md transition duration-200'/>
                                    <label htmlFor="sku__input" className='PLACEHOLDER_SKU select-none absolute left-4 top-4 cursor-text transition duration-200 transform '>SKU</label>
                                </div>
                                {/* INPUT INVENTORY */}
                                <div onFocus={onfocusInputInventory} onBlur={onblurInputInventoty} className=' border border-purple-300 rounded-md relative'>
                                    <input type="text" id='inventory__input' className='INPUT__INV w-full p-4 focus:outline-none focus:ring focus:ring-purple-400 rounded-md transition duration-200'/>
                                    <label htmlFor="inventory__input" className='PLACEHOLDER_INV select-none absolute left-4 top-4 cursor-text transition duration-200 transform '>Aviable inventory</label>
                                    {/* <div onFocus={onfocusBall} className="absolute top-5 right-0">
                                        <input type="checkbox" className='cursor-pointer relative w-10 h-5 appearance-none bg-purple-300 outline-none rounded-full transition duration-500 shadow-inner checked:bg-purple-500 group' />
                                        <div className="BALL bg-white w-5 h-5 absolute rounded-full top-0 transition duration-200"></div>
                                    </div> */}
                                </div>
                                {/* TEXT AREA */}
                                <div onFocus={onfocusInputTextArea} onBlur={onblurInputTextArea} className='col-span-2 relative border  h-auto rounded-md mb-3'>
                                    <textarea id='textarea__input' className='INPUT__TEXT border-purple-300  w-full p-3 h-auto focus:outline-none focus:ring focus:ring-purple-400 rounded-md transition duration-200'>
                                    </textarea>
                                    <label htmlFor="textarea__input" className='PLACEHOLDER_TEXT select-none absolute left-4 top-3  cursor-text transition duration-200 transform  '>Description</label>
                                </div>
                            </div>
                        </div>

                        {/* PRICE */}
                        <div className=' border rounded-md shadow-md mt-5'>
                            <span className='text-lg border-b border-purple-700 m-5'>Price</span>
                            {/* INPUT */}
                            <div onFocus={onfocusInputPrice} onBlur={onblurInputPrice} className='border border-purple-300 mx-3 my-3 rounded-md relative'>
                                <input type="text" id='input__price' className='INPUT__PRICE w-full p-4 focus:outline-none focus:ring focus:ring-purple-400 rounded-md transition duration-200'/>
                                <label htmlFor="input__price" className='PLACEHOLDER_PRICE select-none absolute left-4 top-4  cursor-text transition duration-200 transform '>Price <span>(required)</span></label>
                            </div>
                        </div>

                        {/* VARIANTS */}
                        <div className='border rounded-md shadow-md mt-5'>
                            <div className='flex justify-between m-5'><span className=' text-lg border-b border-purple-700 '>Variants</span> <div className='cursor-pointer select-none bg-purple-700 text-white p-3 h-10 text-center items-center flex rounded-full'><i className="mr-3 bi bi-plus-circle"></i>Add variant</div></div>
                            <div className='m-5'>Diferents types of this product (for example size, color)</div>
                        </div>

                        {/* IMAGES */}
                        <div className='mt-5 border rounded-md shadow-md'>
                            <span className='m-5 border-b border-purple-700 text-lg'>Images</span>
                            <div className="border border-red m-5 mt-5 bg-gradient-to-r from-purple-300 to-white h-32 rounded-lg shadow-inner">
                                <div className="relative items-center flex justify-center border-2 border-dotted border-purple-500 rounded-md h-5/6 m-3 cursor-pointer select-none">
                                    <input type="file" className='absolute border border-black  w-32 p-2 opacity-0 invisible cursor-pointer appearance-none' />
                                    <div className='bg-white text-purple-700 shadow-md border border-white p-3 rounded-md  cursor-pointer'>
                                        Upload image
                                    </div>
                                </div>
                            </div>
                        </div>



                        


                    </div>

                    <div className='border w-1/4 mr-2 sticky top-0'>...</div>
                    
                </div>
            </div>
        </div>
    )   
}