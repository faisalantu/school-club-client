import React,{useState,useRef,useEffect} from "react";
import useOnClickOutside from 'use-onclickoutside'
//importing Icons 👇
import { BiSearch , BiLock} from "react-icons/bi";
import { MdNotifications, MdAccountCircle , MdEvent } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsTriangleFill } from "react-icons/bs";
function topNavbar({ close }) {
  const notification = useRef(null);
  const account = useRef(null);
  useOnClickOutside(notification,function(){setNotificationToggle(false)});
  useOnClickOutside(account,function(){setAccountToggle(false)});

  const [accountToggle, setAccountToggle] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);

  return (
    
    <div className='w-full h-12 bg-gray-900 flex justify-between items-center mb-5'>
      <div className="pl-4">
        <h1 className='text-gray-100 font-semibold text-lg'>LOGO</h1>
      </div>
      <div className="flex text-2xl pr-4">
        <BiSearch className='text-gray-100 text-md flex-auto mx-1' />
        
        <div ref={notification} onClick={function(){setNotificationToggle(!notificationToggle)}} className="relative cursor-pointer">
          <MdNotifications className='text-gray-100 text-md flex-auto mx-1' />
          <BsTriangleFill className={ `${notificationToggle?"":"hidden"} absolute right-0 text-white ` }/> 
          <div className={` ${notificationToggle?"":"hidden"} absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-30`}>
              <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-700">
                  <a className="flex justify-start px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                  <FiSettings className="p-0 mr-1.5 text-base"/>
                  <span className="text-sm" >Settings</span>
                  </a>
                  <a className="flex justify-start px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                  <BiLock className="p-0 mr-1.5 text-base" />
                  <span className="text-sm" >Change Password</span>
                  </a>
                  <a className="flex justify-start px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                  <HiOutlineLogout className="p-0 mr-1.5 text-base" />
                  <span className="text-sm" >Logout</span>
                  </a>
              </div>
          </div>
        </div>
        <div ref={account} onClick={function(){setAccountToggle(!accountToggle)}} className="relative cursor-pointer">
          <MdAccountCircle className='text-gray-100 text-md flex-auto mx-1' />
          <BsTriangleFill className={ `${accountToggle?"":"hidden"} absolute right-0 text-white ` }/> 
          <div className={` ${accountToggle?"":"hidden"} absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-30`}>
              <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-700">
                  <a className="flex justify-start px-4 py-2 mt-2  font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                  <MdEvent className="p-0 mr-1.5 text-base" />
                  <span className="text-sm" >New Event</span>
                  </a>
                  <a className="flex justify-start px-4  py-2 mt-2  font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                  <RiLockPasswordLine className="p-0  mr-1.5 text-base" />
                  <span className="text-sm" >Password Changed</span>
                  </a>
                  <a className="flex justify-end align-bottom  mt-2 text-xs text-blue-500 font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 " href="#">
                  <span className="px-2 py-1 rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >See More</span>
                  </a>
              </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default topNavbar;
