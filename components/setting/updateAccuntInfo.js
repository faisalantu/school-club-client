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
    const [clubs, setClubs] = useState(props.accountInfo.clubs);
    const [info, setInfo] = useState(props.accountInfo);
    // const [clubs, setClubs] = useState(
    //     {
    //         "CSE":true, "EEE":false ,"English":false ,"Programming":true
    //     });
    // const [info, setInfo] = useState({
    //     img:"/portrait-2.jpeg",
    //     fName:"Faisal",
    //     lName:"Antu",
    //     email:"hello@faisalantu.com",
    //     phone:'017XXXXXXXXX',
    //     location:"location",
    //     studentID:'163 XXX XXX',
    //     clubs:{
    //         "CSE":true, "EEE":false ,"English":false ,"Programming":true
    //     }
    // });
    // const chackBoxValue = Object.entries(info.clubs).map(([key, value]) => {
    //     return (<label>
    //         <input className=" border-2 border-green-300 rounded-lg mx-2" defaultChecked={value} type="checkbox" id="first" />
    //         {key}
    //     </label>)
    // });
    function handleCheckboxClick(event)
    {  
        const { name } = event.target;
        setClubs((prevClubs)=>{
        return {
        ...prevClubs, 
        [name]: !clubs[name]
        }});
    }
    function handleInputUpdate(event)
    {  
        const { name ,value} = event.target;
        setInfo((prevInfo)=>{
        return {
        ...prevInfo, 
        [name]: value
        }});
        //console.log(value);
    }
    function handleSubmit(event)
    {
        event.preventDefault();
    }
    

    // console.log(clubs); 
     
    return (
        <form onSubmit={handleSubmit} >
             <div className=" flex flex-row justify-start items-center mt-8 mb-10" >
                <div className='bg-white rounded-full w-44 h-44 relative overflow-hidden cursor-pointer'>
                    <div className=' bg-transparent text-indigo-50 hover:bg-green-300 flex justify-center items-center z-30 absolute bottom-0 left-0 right-0  px-3 h-full ' onClick={imageUploder}>
                        <input hidden='hidden' type="file" id="file"  ref={fileInput} />
                        <VscAccount className='text-md p-0 m-0 mr-1' />
                        <span className=" font-semibold">Uplode Image</span>
                    </div>
                    <Image src={info.img} layout='fill' objectFit="cover" ></Image>
                </div>
                <div className=' ml-10 '>
                    <h1 className=' font-semibold text-4xl py-2'>{info.fName}{" "}{info.lName}</h1>
                    <span className='text-xl '>{info.location}</span>
                </div>
            </div>
            <div className='grid grid-flow-row md:grid-cols-2 sm:grid-cols-1'>

                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4'>
                    <label className='mb-2 text-lg text-grey-darkest' >First Name</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="text"  placeholder="First Name" name='fName' onChange={handleInputUpdate} value={info.fName}/>
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="Last Name">Last Name</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="text"  placeholder="Last Name" name='lName' onChange={handleInputUpdate} value={info.lName} />
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="InputEmail">Email address</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="email" placeholder="Enter email" name='email'  onChange={handleInputUpdate} value={info.email} />
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="Phone Number">Phone Number</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="tel"  placeholder="Phone Number" name="phone" onChange={handleInputUpdate} value={info.phone} />
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="">Location</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="text"  placeholder="location" name="location" onChange={handleInputUpdate} value={info.location} />
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="">Student ID</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="text"  placeholder="Student ID" name="studentID" onChange={handleInputUpdate} value={info.studentID} />
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

                            {
                                Object.entries(clubs).map(([key, value ]) => {
                                    return (<label key={key}>
                                        <input className=" border-2 border-green-300 rounded-lg mx-2" 
                                        defaultChecked={value}
                                        type="checkbox"
                                        name={key}
                                        onChange={handleCheckboxClick}
                                          />
                                        {key}
                                    </label>)
                                }) 

                            }

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
