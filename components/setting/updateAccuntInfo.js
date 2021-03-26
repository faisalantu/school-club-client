import Image from "next/image";
import { useRef, useState } from "react";
import { VscAccount } from 'react-icons/vsc';
export default function UpdateAccuntInfo(props) {
    // const UplodeBtn = useRef(null);
    const fileInput = useRef(null);
    function imageUploder() {
        fileInput.current.click();
    }
    const [show, setShow] = useState(true);
    return (
        <form >
             <div className=" flex flex-row justify-start items-center mt-8 mb-10" >
                <div className='bg-white rounded-full w-44 h-44 relative overflow-hidden cursor-pointer'>
                    <div className=' bg-gray-300 text-indigo-50 hover:bg-green-300 flex justify-center items-center z-30 absolute bottom-0 left-0 right-0  px-3 h-20 ' onClick={imageUploder}>
                        <input hidden='hidden' type="file" id="file" multiple ref={fileInput} />
                        <VscAccount className='text-md p-0 m-0 mr-1' />
                        <span>Uplode Image</span>
                    </div>
                    <Image src='/portrait-2.jpeg' layout='fill' objectFit="cover" ></Image>
                </div>
                <div className=' ml-10 '>
                    <h1 className=' font-semibold text-4xl py-2'>Faisal Antu</h1>
                    <span className='text-xl '>Dhaka Bangladesh</span>
                </div>
            </div>
            <div className='grid grid-flow-row md:grid-cols-2 sm:grid-cols-1'>

                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4'>
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="First Name">First Name</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="text" aria-describedby="emailHelp" placeholder="First Name" />
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="Last Name">Last Name</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="text" aria-describedby="emailHelp" placeholder="Last Name" />
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="InputEmail">Email address</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="Phone Number">Phone Number</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="tel" aria-describedby="Phone Number" placeholder="Phone Number" />
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="">Location</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="text" aria-describedby="emailHelp" placeholder="location" />
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="">Student ID</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="text" aria-describedby="emailHelp" placeholder="Student ID" />
                </div>
                <div className='md:col-span-2 flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="">Interested Clubs</label>
                    <div >
                        <div className=' relative  cursor-pointer flex flex-col sm:pr-6 md:pr-10 lg:pr-40 pr-4' onClick={()=>{setShow(!show)}}>
                            <select className='rounded-lg border py-2 text-grey-darkest md:w-1/2 bg-gray-300' >
                                <option>Select options</option>
                            </select>
                            <div className="absolute left-0 right-0 top-0 bottom-0"></div>
                        </div>
                        <div className={` flex flex-col rounded-lg py-2  bg-gray-300  md:w-1/2 border-2 ${show ? 'hidden' : 'block '}`} >
                            <label for="first">
                                <input className=" border-2 border-green-300 rounded-lg mx-2" type="checkbox" id="first" />
                                cse
                            </label>
                            <label for="second">
                                <input className=" border-green-300 rounded-lg mx-2"  type="checkbox" id="second" />
                                EEE
                            </label>
                            <label for="third">
                                <input className=" border-green-300 rounded-lg mx-2"  type="checkbox" id="third" />
                                English
                            </label>
                            <label for="fourth">
                                <input className=" border-green-300 rounded-lg mx-2"  type="checkbox" id="fourth" />
                                Programming
                            </label>
                        </div>

                    </div>
                </div>

                <div className='  flex flex-row justify-end' >
                    <button type="submit" className="border-2 rounded-lg bg-gray-200 border-green-200 px-10 py-2.5">Save Change</button>
                </div>
            </div>


        </form>
    );
}
