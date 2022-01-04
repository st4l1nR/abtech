import tplink from '../../../public/images/tplink.png';
import roblox from '../../../public/images/roblox.png';
import logitech from '../../../public/images/logitech.png';
import hikvision from '../../../public/images/hikvision.png';
import dell from '../../../public/images/dell.png';
import reunion from '../../../public/images/reunion.jpg';
import Image from 'next/image';

export default function SectionProduct() {
    return (
        <div className='mt-10 flex flex-col'>
            <div className='flex my-32'>
                {/* IMAGE */}
                <div className='w-2/4 flex justify-center items-center'>
                    <i className="bi bi-image-fill text-9xl "></i>
                </div>

                {/* DESCRIPTION */}
                <div className='w-3/5 flex flex-col items-center  text-start'>
                    <div className='text-gray-700 text-2xl p-3'>Logitech Video Conferencing for every space: Better Than Being Here!</div>
                    <div className='font-light text-xl p-3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sunt qui at asperiores ea totam minus cupiditate optio, in, atque cumque autem voluptate alias error veritatis ipsam repellat mollitia ex harum accusamus expedita. Doloremque quia, necessitatibus nam nulla maiores magnam modi amet! Voluptatum vero debitis dolorem, quos veniam numquam perferendis nisi et! Ratione nobis vero nam magnam tempore obcaecati minus nesciunt eos nihil possimus, consectetur impedit provident qui in excepturi!
                    </div>
                    {/* ICON PLAY VIDEO */}
                    <div className='flex items-center '>
                        <div>
                            <i className="bi bi-play-circle-fill text-7xl text-purple-600"></i>
                        </div>
                        <hr className='w-32 h-1 bg-gray-500 rounded-full mx-5 ' />
                        <div className='font-extralight text-gray-500'>
                            Logitech RightSense
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION EXPERIENCE */}

            <div className='mt-10 text-3xl text-gray-600'> 
                <div className='text-center'><span className='text-blue-600'>Experience </span>Modern, Elegant technology to ease <br /> your life.</div>

                {/* CARDS */}
                <div className="grid grid-cols-2 grid-rows-1 gap-4 p-10">
                    <div className='border flex items-center shadow-xl'>
                        {/* IMAGE */}
                        <div className='m-16'>
                            <i className="bi bi-wifi text-7xl text-blue-400"></i>
                        </div>

                        {/* TEXT */}
                        <div className='text-xl p-3'>
                            <div className='text-2xl'>WISP Solution</div>
                            <div className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maiores ex eveniet magni unde itaque vel, explicabo culpa numquam optio odio ipsam id nam consequatur quasi? Quos minus eius quis?</div>
                        </div>
                    </div>
                    <div className='border flex items-center shadow-xl'>
                        {/* IMAGE */}
                        <div className='m-16'>
                            <i className="bi bi-webcam text-7xl text-blue-500"></i>
                        </div>

                        {/* TEXT */}
                        <div className='text-xl p-3'>
                            <div className='text-2xl'>Bunisess Wi-fi Solution</div>
                            <div className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maiores ex eveniet magni unde itaque vel, explicabo culpa numquam optio odio ipsam id nam consequatur quasi? Quos minus eius quis?</div>
                        </div>
                    </div>
                    <div className='border flex items-center shadow-xl'>
                        {/* IMAGE */}
                        <div className='m-16'>
                            <i className="bi bi-person-workspace text-7xl text-blue-500"></i>
                        </div>

                        {/* TEXT */}
                        <div className='text-xl p-3'>
                            <div className='text-2xl'>Smart Industrial Park</div>
                            <div className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maiores ex eveniet magni unde itaque vel, explicabo culpa numquam optio odio ipsam id nam consequatur quasi? Quos minus eius quis?</div>
                        </div>
                    </div>
                    <div className='border flex items-center shadow-xl'>
                        {/* IMAGE */}
                        <div className='m-16'>
                            <i className="bi bi-safe2 text-7xl text-blue-500"></i>
                        </div>

                        {/* TEXT */}
                        <div className='text-xl p-3'>
                            <div className='text-2xl'>Secured Banking</div>
                            <div className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maiores ex eveniet magni unde itaque vel, explicabo culpa numquam optio odio ipsam id nam consequatur quasi? Quos minus eius quis?</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* TOP PICKS */}

            <div className='flex m-10 text-gray-500 '>
                {/* TEXT */}
                <div className='w-1/4'>
                    <div className='flex flex-col text-xl'>
                        <div className='text-5xl text-gray-700 pb-3' >Top picks</div>
                        <div>We provide Best quality Service</div>
                    </div>
                    

                    <div className='mt-32'>
                        <div className='text-purple-700 border-b border-purple-700 w-32 text-2xl'>All parts</div>
                        <div className='text-xl'>
                            <ul>
                                <li className='my-10'>Headsets</li>
                                <li className='my-10'>Sound System</li>
                                <li className='my-10'>Computer Parts</li>
                                <li className='my-10'>Mouse And Keyboard</li>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* CARDS */}

                <div className=' w-3/4 items-center h-auto '>
                    <div className='grid grid-cols-2  h-full gap-4'>
                        <div className='border'>
                            {/* IMAGE */}
                            <div className='text-center'>
                                <i className="bi bi-image-fill text-9xl"></i>
                            </div>
                            {/* TEXT */}
                            <div className='mt-5 text-center justify-center items-center flex flex-col'>
                                {/* PRODUCT NAME */}
                                <div className='text-2xl '>Logitech X50 Mobile Wireless <br /> Speaker</div>
                                {/* BTN */}
                                <div className='my-5 hover:bg-purple-500 hover:text-white transition duration-200 shadow-xl border rounded-full w-32 p-4 cursor-pointer select-none '>Read more</div>
                            </div>
                        </div>
                        <div className='border'>
                            {/* IMAGE */}
                            <div className='text-center'>
                                <i className="bi bi-image-fill text-9xl"></i>
                            </div>
                            {/* TEXT */}
                            <div className='mt-5 text-center justify-center items-center flex flex-col'>
                                {/* PRODUCT NAME */}
                                <div className='text-2xl '>Logitech X50 Mobile Wireless <br /> Speaker</div>
                                {/* BTN */}
                                <div className='my-5 hover:bg-purple-500 hover:text-white transition duration-200 shadow-xl border rounded-full w-32 p-4 cursor-pointer select-none '>Read more</div>
                            </div>
                        </div>
                        <div className='border'>
                            {/* IMAGE */}
                            <div className='text-center'>
                                <i className="bi bi-image-fill text-9xl"></i>
                            </div>
                            {/* TEXT */}
                            <div className='mt-5 text-center justify-center items-center flex flex-col'>
                                {/* PRODUCT NAME */}
                                <div className='text-2xl '>Logitech X50 Mobile Wireless <br /> Speaker</div>
                                {/* BTN */}
                                <div className='my-5 hover:bg-purple-500 hover:text-white transition duration-200 shadow-xl border rounded-full w-32 p-4 cursor-pointer select-none '>Read more</div>
                            </div>
                        </div>
                        <div className='border'>
                            {/* IMAGE */}
                            <div className='text-center'>
                                <i className="bi bi-image-fill text-9xl"></i>
                            </div>
                            {/* TEXT */}
                            <div className='mt-5 text-center justify-center items-center flex flex-col'>
                                {/* PRODUCT NAME */}
                                <div className='text-2xl '>Logitech X50 Mobile Wireless <br /> Speaker</div>
                                {/* BTN */}
                                <div className='my-5 hover:bg-purple-500 hover:text-white transition duration-200 shadow-xl border rounded-full w-32 p-4 cursor-pointer select-none '>Read more</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SPONSORS */}
            <div className=' shadow-xl flex my-10 items-center justify-between'>
                <div>
                    <Image 
                        src={tplink}
                        width={250}
                        height={150}
                    />
                </div>
                <div>
                    <Image 
                        src={roblox}
                        width={200}
                        height={200}
                    />
                </div>
                <div>
                    <Image 
                        src={logitech}
                        width={250}
                        height={150}
                    />
                </div>
                <div>
                    <Image 
                        src={hikvision}
                        width={250}
                        height={40}
                    />
                </div>
                <div>
                    <Image 
                        src={dell}
                        width={200}
                        height={50}
                    />
                </div>
            </div>

            {/* BUNISESS */}

            <div className='flex p-10'>
                <div className=' w-1/2 p-10'>
                    <div>
                        <div className='text-3xl text-gray-600 font-semibold mb-5'>
                            Our Technologies move Bunisses <br />foward
                        </div>
                        <div>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ipsum eum est fugiat dicta doloremque, unde aspernatur necessitatibus accusantium minima nisi ratione cumque deleniti! Modi pariatur quam odio animi omnis.
                        </div>
                    </div>
                </div>

                <div className=' w-3/5     grid grid-cols-2 relative' >
                    <div>
                        {/* CARD */}
                        <div className='w-72 border shadow-md m-5 text-gray-600 rounded-md'>
                            {/* IMAGE */}
                            <div>
                                <Image 
                                    src={reunion}
                                    width={300}
                                    height={200}
                                />
                            </div>
                            {/* TEXT */}
                            <div className='p-3 flex flex-col'>
                                <div className='font-bold'>
                                    Cutting-edge products launched throgh Logitech Exel
                                </div>
                                {/* USER | TIMEAGO  */}
                                <div className='flex justify-between font-light text-sm mt-2'>
                                    <div className='flex'>
                                        <i className="bi bi-person mr-1"></i>
                                        <div> Administrator</div>
                                    </div>

                                    <div className='flex'>
                                        <i className="bi bi-clock mr-1"></i>
                                        <div> Dec, 12 2021</div>
                                    </div>
                                </div>
                                <hr className='my-3'/>
                                <div>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, inventore praesentium corrupti quia blanditiis sint ipsam sapiente nobis maxime eos?
                                </div>
                            </div>
                        </div>

                        {/* CARD */}
                        <div className='w-72 border shadow-md m-5 text-gray-600 rounded-md'>
                            {/* IMAGE */}
                            <div>
                                <Image 
                                    src={reunion}
                                    width={300}
                                    height={200}
                                />
                            </div>
                            {/* TEXT */}
                            <div className='p-3 flex flex-col'>
                                <div className='font-bold'>
                                    Cutting-edge products launched throgh Logitech Exel
                                </div>
                                {/* USER | TIMEAGO  */}
                                <div className='flex justify-between font-light text-sm mt-2'>
                                    <div className='flex'>
                                        <i className="bi bi-person mr-1"></i>
                                        <div> Administrator</div>
                                    </div>

                                    <div className='flex'>
                                        <i className="bi bi-clock mr-1"></i>
                                        <div> Dec, 12 2021</div>
                                    </div>
                                </div>
                                <hr className='my-3'/>
                                <div>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, inventore praesentium corrupti quia blanditiis sint ipsam sapiente nobis maxime eos?
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD */}
                    <div className='w-72 border shadow-md m-5 text-gray-600 rounded-md absolute right-0 bottom-72'>
                            {/* IMAGE */}
                            <div>
                                <Image 
                                    src={reunion}
                                    width={300}
                                    height={200}
                                />
                            </div>
                            {/* TEXT */}
                            <div className='p-3 flex flex-col'>
                                <div className='font-bold'>
                                    Cutting-edge products launched throgh Logitech Exel
                                </div>
                                {/* USER | TIMEAGO  */}
                                <div className='flex justify-between font-light text-sm mt-2'>
                                    <div className='flex'>
                                        <i className="bi bi-person mr-1"></i>
                                        <div> Administrator</div>
                                    </div>

                                    <div className='flex'>
                                        <i className="bi bi-clock mr-1"></i>
                                        <div> Dec, 12 2021</div>
                                    </div>
                                </div>
                                <hr className='my-3'/>
                                <div>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, inventore praesentium corrupti quia blanditiis sint ipsam sapiente nobis maxime eos?
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            {/* CUSTOMERS VIEW */}

            <div className='flex flex-col'>
                {/* TEXT */}
                <div className='text-4xl text-gray-600 text-center'>
                    <div><span className='text-purple-600'>Our</span> costumers review</div>
                    <div className='text-xl mt-3 '>Customer Review Sites for collecting Bunisses & Products Reviews</div>
                </div>

                {/* SLIDER */}
                <div className='m-10 border rounded-lg shadow-xl'>
                    <div>
                        <div >
                            {/* PROFILE 1 */}
                            <div className='text-center my-16 '>
                                <i className="bi bi-person-circle text-9xl text-purple-500 opacity-1"></i>
                            </div>

                            {/* DETAILS */}
                            <div className='text-center mt-32 m-5 space-y-3' >
                                {/* NAME */}
                                <div className='text-2xl font-light'>Tu mami</div>
                                {/* PROFESION */}
                                <div className='font-light'>UI Designer</div>
                                {/* STARS */}
                                <div className='space-x-2'>
                                    <i className="bi bi-star-fill text-purple-800"></i>
                                    <i className="bi bi-star-fill text-purple-800"></i>
                                    <i className="bi bi-star-fill text-purple-800"></i>
                                    <i className="bi bi-star-fill text-purple-800"></i>
                                    <i className="bi bi-star text-purple-800"></i>
                                </div>
                                {/* DESCRIPTION */}
                                <div className='font-light'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illum vitae voluptatum rerum facere voluptatem libero debitis dolorem esse ipsa, similique earum fugiat consequatur alias veniam dolores nemo tempora perferendis officia amet? Non aspernatur maiores magni? Rem officia commodi eum voluptatum aperiam cumque non impedit nam nulla! Eveniet, corporis ipsum!
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            {/* FOOTER */}

            <footer className='bg-gray-100 p-10 text-gray-500'>
                <div className='flex'>
                    {/* TITLE */}   
                    <div className='w-1/5 flex flex-col'>
                        <div className='text-3xl text-gray-700 mb-5'><span className='font-bold text-blue-700'>Ab</span>Tech</div>
                        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam repellat dolores libero architecto! Quis, odit commodi. Neque nemo itaque, nesciunt, error dolorem rerum, facere maxime voluptates repudiandae atque molestias. Eveniet!   </div>
                        <div className='mt-5'>
                            <div className='text-center'>Follow us!</div>
                            <div className='flex justify-around'>
                                <i className="bi bi-facebook text-xl hover:text-blue-500 cursor-pointer"></i>
                                <i className="bi bi-twitter text-xl hover:text-blue-500 cursor-pointer"></i>
                                <i className="bi bi-instagram text-xl hover:text-pink-400 cursor-pointer"></i>
                                <i className="bi bi-youtube text-xl hover:text-red-500 cursor-pointer"></i>
                            </div>
                        </div>
                    </div>
                    {/* CONTACT ZONE */}
                    <div className='ml-20'>
                        {/* CONTACT */}
                        <div className='flex flex-col'>
                            <div className='mb-5'>Contact</div>
                            <div className='flex text-purple-500 font-light'>
                                <i className="bi bi-telephone-outbound mr-2"></i>
                                <div>+123 456 790 00</div>
                            </div>
                            <div className='flex mt-3 text-purple-500 font-light'>
                                <i className="bi bi-geo-alt mr-2 "></i>
                                <div>Contact us </div>
                            </div>
                        </div>
                    </div>

                    {/* VIEWER GUIDES */}
                    <div className='ml-24'>
                        <div className='flex flex-col'>
                            <div className='mb-5'>Viewer guides</div>
                            <div className='flex text-purple-500 font-light'>
                                Features
                            </div>
                            <div className='flex mt-3 text-purple-500 font-light'>
                                Careers
                            </div>
                            <div className='flex mt-3 text-purple-500 font-light'>
                                Blog post
                            </div>
                            <div className='flex mt-3 text-purple-500 font-light'>
                                Help & Support
                            </div>
                        </div>
                    </div>

                    {/* COMUNITY */}
                    <div className='ml-24'>
                        <div className='flex flex-col'>
                            <div className='mb-5'>Comunity</div>
                            <div className='flex text-purple-500 font-light'>
                                About us
                            </div>
                            <div className='flex mt-3 text-purple-500 font-light'>
                                Our clients
                            </div>
                            <div className='flex mt-3 text-purple-500 font-light'>
                                Legal notic
                            </div>
                        </div>
                    </div>

                    {/* MAIL ZONE */}

                    <div className='ml-24'>
                        <div>Sign up for monthly newsletter</div>

                        <div className='bg-white relative mt-10 border border-purple-600 rounded-lg'>
                            <input type="text" id='input__email__footer' className=' w-full p-3 pr-16 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300 rounded-lg' placeholder='name@example.com'/>
                            <label htmlFor="input__email__footer" className='absolute inset-y-0 right-0 p-4 flex items-center bg-purple-600  rounded-tr-md rounded-br-md cursor-pointer'><i className="bi bi-send text-white "></i></label>
                        </div>
                    </div>
                </div>
            </footer>
            
        </div>
    )
}