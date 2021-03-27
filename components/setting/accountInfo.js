import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { VscAccount } from 'react-icons/vsc';
export default function AccountInfo(props) {
    // const UplodeBtn = useRef(null);

    const [show, setShow] = useState(true);
    const {accountInfo} = props
    return (
        <form >
            <div className=" flex flex-row justify-start items-center mt-8 mb-10" >
                <div className='bg-white rounded-full w-44 h-44 relative overflow-hidden cursor-pointer'>
                    <Image src={accountInfo.img} layout='fill' objectFit="cover" ></Image>
                </div>
                <div className=' ml-10 '>
                    <h1 className=' font-semibold text-4xl py-2'>{accountInfo.fName}{" "}{accountInfo.lName}</h1>
                    <span className='text-xl '>Dhaka Bangladesh</span>
                </div>
            </div>
            <div className='grid grid-flow-row md:grid-cols-2 sm:grid-cols-1'>

                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4'>
                    <label className='mb-2 text-lg text-grey-darkest'>First Name</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="text" placeholder="First Name" value={accountInfo.fName} disabled/>
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="Last Name">Last Name</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="text" placeholder="Last Name"  value={accountInfo.lName}  disabled/>
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="InputEmail">Email address</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="email" placeholder="Enter email"  value={accountInfo.email}  disabled/>
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="Phone Number">Phone Number</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="tel" aria-describedby="Phone Number" placeholder="Phone Number"  value={accountInfo.phone}  disabled/>
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="">Location</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="text" aria-describedby="emailHelp" placeholder="location"  value={accountInfo.location}  disabled/>
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' >Student ID</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="text" aria-describedby="emailHelp" placeholder={accountInfo.studentID}  value="163 XXX XXX"  disabled/>
                </div>
                <div className='md:col-span-2 flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' >Interested Clubs</label>
                    <div >
                        <div className=' relative  cursor-pointer flex flex-col sm:pr-6 md:pr-10 lg:pr-40 pr-4' onClick={()=>{setShow(!show)}}>
                            <select className='rounded-lg border py-2 text-grey-darkest md:w-1/2 bg-gray-300' >
                                <option>Select options</option>
                            </select>
                            <div className="absolute left-0 right-0 top-0 bottom-0"></div>
                        </div>
                        <div className={` flex flex-col rounded-lg py-2  bg-gray-300  md:w-1/2 border-2 ${show ? 'hidden' : 'block '}`} >
                            {
                                Object.entries(accountInfo.clubs).map(([key, value ]) => {
                                    return (<label key={key}>
                                        <input className=" border-2 border-green-300 rounded-lg mx-2" 
                                        defaultChecked={value}
                                        type="checkbox"
                                        name={key}
                                        disabled
                                          />
                                        {key}
                                    </label>)
                                }) 

                            }
                            
                            
                            {/* <label >
                                <input className=" border-2 border-green-300 rounded-lg mx-2" type="checkbox" id="first" />
                                cse
                            </label>
                            <label >
                                <input className=" border-green-300 rounded-lg mx-2"  type="checkbox" id="second" />
                                EEE
                            </label>
                            <label >
                                <input className=" border-green-300 rounded-lg mx-2"  type="checkbox" id="third" />
                                English
                            </label>
                            <label >
                                <input className=" border-green-300 rounded-lg mx-2"  type="checkbox" id="fourth" />
                                Programming
                            </label> */}
                        </div>

                    </div>
                </div>

                <div className='  flex flex-row justify-end' >
                    <Link href="/setting/update"><a className="border-2 rounded-lg bg-gray-200 border-green-200 px-10 py-2.5">Update Information</a></Link>
                </div>
            </div>


        </form>
    );
}
