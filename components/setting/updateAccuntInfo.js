import Image from "next/image";
import { useRef, useState } from "react";
import { VscAccount } from 'react-icons/vsc';
import { MdKeyboardArrowRight } from 'react-icons/md';
import DropdownCheckBoxs from '../global/dropdownCheckBoxs';
import Inputbox from '../global/inputbox';
export default function UpdateAccuntInfo(props) {

    const fileInput = useRef(null);
    function imageUploder() {
        fileInput.current.click();
    }
    const [editMode, setEditMode] = useState(false);
    const [clubs, setclubs] = useState({
        "CSE": true, "EEE": false, "English": false, "Programming": true
    });
    const [info, setInfo] = useState(props.accountInfo);
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
    // Checkbox handle
    // function handleCheckbox(name) {
    //     setInfo((prevInfo) => {
    //         return {
    //             ...prevInfo,
    //             clubs: { ...prevInfo.clubs, [name]: !prevInfo.clubs[name] }
    //         }
    //     });
    // }
    // input handle
    function handleInputUpdate(event) {
        const { name, value } = event.target;
        setInfo((prevInfo) => {
            return {
                ...prevInfo,
                [name]: value
            }
        });
        //console.log(value);
    }
    function handleSubmit(event) {

        // form submition logic...

        setEditMode(false);
        event.preventDefault();
    }
    function imageHandler(event) {
        const image = event.target.files[0];
        console.log("img", image);
        const reader = new FileReader();
        if (image) {
            reader.onloadend = () => {
                if (reader.readyState === 2) {
                    setInfo((prevInfo) => {
                        return {
                            ...prevInfo,
                            img: reader.result
                        }
                    });
                }
            }
            reader.readAsDataURL(event.target.files[0])
        }

    }
    return (
        <form onSubmit={handleSubmit} >
            <div className=" flex flex-row justify-start items-center mt-8 mb-10" >
                <div className='bg-white rounded-full w-44 h-44 relative overflow-hidden cursor-pointer'>
                    {editMode && <div className=' bg-transparent text-indigo-50 hover:bg-yellow-300 flex justify-center items-center z-30 absolute bottom-0 left-0 right-0  px-3 h-full ' onClick={imageUploder}>
                        <input hidden='hidden' type="file" id="file" ref={fileInput} onChange={imageHandler} />
                        <VscAccount className='text-md p-0 m-0 mr-1' />
                        <span className=" font-semibold">Uplode Image</span>
                    </div>}
                    <Image src={info.img} layout='fill' objectFit="cover" ></Image>

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
                    !editMode ? <div className="border-yellow-400 border-2 rounded py-0.5 px-2 cursor-pointer hover:bg-gray-200" onClick={() => { setEditMode(!editMode) }}>Edit</div>
                        : <button type='submit' className="border-yellow-400 border-2 rounded py-0.5 px-2 cursor-pointer hover:bg-gray-200"  >Save Change</button>//onClick={handleSubmit}
                }
            </div>

            <div className='grid grid-flow-row grid-cols-2 gap-5 md:grid-cols-2 sm:grid-cols-1'>
                <div className='lg:w-5/6'>
                    <Inputbox label='First Name' type='text' placeholder='First Name' name='fName' value={info.fName} ChangeHandel={handleInputUpdate} editMode={!editMode} />
                </div>
                <div className='lg:w-5/6'>
                    <Inputbox label='Last Name' type='text' placeholder='Last Name' name='lName' value={info.lName} ChangeHandel={handleInputUpdate} editMode={!editMode} />
                </div>
                <div className='lg:w-5/6'>
                    <Inputbox label='Email address' type='email' placeholder='Enter email' name='email' value={info.email} ChangeHandel={handleInputUpdate} editMode={!editMode} />
                </div>
                <div className='lg:w-5/6'>
                    <Inputbox label='Phone Number' type='tel' placeholder='Phone Number' name='phone' value={info.phone} ChangeHandel={handleInputUpdate} editMode={!editMode} />
                </div>
                <div className='lg:w-5/6'>
                    <Inputbox label='Location' type='text' placeholder='Location' name='location' value={info.location} ChangeHandel={handleInputUpdate} editMode={!editMode} />
                </div>
                <div className='lg:w-5/6'>
                    <Inputbox label='Student ID' type='text' placeholder='Student ID' name='studentID' value={info.studentID} ChangeHandel={handleInputUpdate} editMode={!editMode} />
                </div>
                <div className='lg:w-5/6'>
                    
                    <DropdownCheckBoxs label='Interested Clubs' dropdownItems={clubs} editMode={editMode} changeState={setclubs} />
                   
                </div>
            </div>
        </form>
    );
}
