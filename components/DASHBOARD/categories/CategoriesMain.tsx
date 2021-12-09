import Link from 'next/link';

export default function CategoriesMain() {
    return (
        <div className='flex flex-col m-5 border w-9/12 rounded-2xl bg-white '>
            {/* TITLE */}
            <div className='m-5 flex justify-between'>
                <span className='text-blue-700 text-3xl'>Categories</span>
                {/* BUTTON */}
                <Link href='/admin/categories/add'>
                    <div className='select-none cursor-pointer flex items-center text-center shadow-md rounded-full p-3 bg-purple-500 text-white '> <div className="bi bi-plus-circle text-xl mr-2"></div> Add categories</div>
                </Link>
                
            </div>

            {/* CONTAINER */}

            <div className="bg-cogs h-screen border m-5 rounded-md flex justify-center items-center">
                <div className="p-1 bg-gradient-to-r from-purple-400 to-blue-300 w-96 h-48 shadow-md rounded-lg">
                    <div className="bg-white h-full rounded-md">
                        <div className='font-semibold text-center pt-3 text-xl'>Add categories and sub-categories.</div>
                        <div className='text-start p-3'>
                            Create infinitely nestable product categories with category images and descriptions. Learn more. <a className='text-purple-500 border-b border-purple-600' href="https://roblox.com/home">Más información</a> .
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}