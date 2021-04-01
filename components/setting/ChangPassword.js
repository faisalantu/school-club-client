import { useState } from "react";
import Inputbox from '../global/inputbox';
export default function ChangPassword(props) {
    function handleSubmit(event)
    {
       // form submition logic... 
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 mt-5 gap-5'>
                
                <div className='lg:w-5/6'>
                    <Inputbox label='Old Password' type='password' placeholder='password' name='oldPassword' editMode={false} />
                </div>
                <div className='lg:w-5/6'>
                    <Inputbox label='New Password' type='password' placeholder='New password' name='newPassword' editMode={false} />
                </div>
                <div className='lg:w-5/6'>
                    <Inputbox label='Re-enter New Password' type='password' placeholder='Enter Re-enter New password' name='Re-enterPassword' editMode={false} />
                </div>

            </div>
             <div className='  flex flex-row justify-center' >
                <button type="submit" className="border-2 rounded-lg bg-gray-200 border-yellow-400 cursor-pointer px-10 py-2.5">Save Change</button>
            </div>
        </form>);
}