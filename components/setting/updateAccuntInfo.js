import Image from "next/image";
import { useRef, useState } from "react";
import { VscAccount } from 'react-icons/vsc';
import { MdKeyboardArrowRight } from 'react-icons/md';
import CheckBox from './checkBox';
import Inputbox from './inputbox';
export default function UpdateAccuntInfo(props) {
    // const UplodeBtn = useRef(null);
    const fileInput = useRef(null);
    function imageUploder() {
        fileInput.current.click();
    }
    const [editMode, setEditMode] = useState(false);
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
        console.log(event.target)
        console.log(name)
        setClubs((prevClubs)=>{
        return {
        ...prevClubs, 
        [name]: !clubs[name]
        }});
    }
    function handleCheckbox(name)
    {  
        //console.log(name)
        setClubs((prevClubs)=>{
        return {
        ...prevClubs, 
        [name]: !clubs[name]
        }});
    }
    // input handle
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
        setEditMode(false);

        //event.preventDefault();
    }
    function imageHandler(event)
    {
        const image =event.target.files[0];
        console.log("img",image);
        const reader = new FileReader();
        if(image){
            reader.onloadend = () =>{
                if(reader.readyState === 2){
                    setInfo((prevInfo)=>{
                        return {
                            ...prevInfo, 
                            img: reader.result
                        }});
                    }
            }
            reader.readAsDataURL(event.target.files[0])
        }
        
    }
    

    // console.log(clubs); 
     
    return (
        <dev>
             <div className=" flex flex-row justify-start items-center mt-8 mb-10" >
                <div className='bg-white rounded-full w-44 h-44 relative overflow-hidden cursor-pointer'>
                    { editMode && <div className=' bg-transparent text-indigo-50 hover:bg-yellow-300 flex justify-center items-center z-30 absolute bottom-0 left-0 right-0  px-3 h-full ' onClick={imageUploder}>
                        <input hidden='hidden' type="file" id="file"  ref={fileInput} onChange={imageHandler} />
                        <VscAccount className='text-md p-0 m-0 mr-1' />
                        <span className=" font-semibold">Uplode Image</span>
                    </div>}
                    <Image src={info.img} layout='fill' objectFit="cover" ></Image>
                    {/* <img  src={info.img} layout='fill' objectFit="cover" /> */}
                </div>
                <div className=' ml-10 '>
                    <h1 className=' font-semibold text-4xl py-2'>{info.fName}{" "}{info.lName}</h1>
                    <span className='text-xl '>{info.location}</span>
                </div>
            </div>
            <div className='flex items-center mb-5'>
                <h1 className='text-xl'>Account Information </h1>
                <MdKeyboardArrowRight className=' text-xl mt-0.5' />
                {
                     !editMode? <button className="border-yellow-400 border-2 rounded py-0.5 px-2 cursor-pointer hover:bg-gray-200" onClick={()=>{setEditMode(!editMode)}}>Edit</button>
                    :<button  className="border-yellow-400 border-2 rounded py-0.5 px-2 cursor-pointer hover:bg-gray-200" onClick={handleSubmit} >Save Change</button>
                }
            </div>
            <div className='grid grid-flow-row grid-cols-2 gap-5 md:grid-cols-2 sm:grid-cols-1'>
                <Inputbox label='First Name' type='text' placeholder='First Name' name='fName' value={info.fName} ChangeHandel={handleInputUpdate} editMode={editMode}/>

                <Inputbox label='Last Name' type='text' placeholder='Last Name' name='lName' value={info.lName} ChangeHandel={handleInputUpdate} editMode={editMode}/>
                
                <Inputbox label='Email address' type='email' placeholder='Enter email' name='email' value={info.email} ChangeHandel={handleInputUpdate} editMode={editMode}/>
                
                <Inputbox label='Phone Number' type='tel' placeholder='Phone Number' name='phone' value={info.phone} ChangeHandel={handleInputUpdate} editMode={editMode}/>
                
                <Inputbox label='Location' type='text' placeholder='Location' name='location' value={info.location}ChangeHandel={handleInputUpdate} editMode={editMode}/>
                
                <Inputbox label='Student ID' type='text' placeholder='Student ID' name='studentID' value={info.studentID} ChangeHandel={handleInputUpdate} editMode={editMode}/>
                <div className=' flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="">Interested Clubs</label>
                    <div >
                        <div className=' relative  cursor-pointer flex flex-col ' onClick={()=>{setShow(!show)}}>
                            <select className='rounded-lg border py-2 text-grey-darkest  bg-gray-300' >
                                <option>Select options</option>
                            </select>
                            <div className="absolute left-0 right-0 top-0 bottom-0"></div>
                        </div>
                        <div className={` flex flex-col rounded-lg py-2  bg-gray-300  border-2 ${show ? 'hidden' : 'block '}`} >

                            {/* {
                                Object.entries(clubs).map(([key, value ]) => {
                                    return (<label key={key}>
                                        <input className=" w-8 rounded-xl text-yellow-400  mx-2" 
                                        defaultChecked={value}
                                        type="checkbox"
                                        name={key}
                                        onChange={handleCheckboxClick}
                                        disabled = {!editMode && "disabled" }
                                          />
                                        {key}
                                    </label>)
                                })
                            } */}

                            {
                                Object.entries(clubs).map(([key, value ]) => {
                                    return (
                                    <CheckBox key={key}  lavel={key} defaultCheckValue={value} click={handleCheckbox} editMode={editMode} /> 
                                    )
                                }) 

                            } 

                            

                        </div>

                    </div>
                </div>

                
            </div>
            {/* <div className=' flex flex-row justify-center' >
                    <button type="submit" className="border-2 rounded-lg bg-gray-200 border-green-200 px-10 py-2.5">Save Change</button>
                </div> */}
        </dev>
    );
}
