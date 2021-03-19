import React,{useState,useRef,useEffect} from "react";
import useOnClickOutside from 'use-onclickoutside'
//importing Icons 👇
import { BiSearch } from "react-icons/bi";
import { MdNotifications, MdAccountCircle } from "react-icons/md";


function topNavbar({ close }) {
  const notification = useRef(null);
  const account = useRef(null);
  useOnClickOutside(notification,function(){setNotificationToggle(false)});
  useOnClickOutside(account,function(){setAccountToggle(false)});

  const [accountToggle, setAccountToggle] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);

  return (
    
    <div className='w-full h-12 bg-gray-900 flex justify-between items-center'>
      <div className="pl-4">
        <h1 className='text-gray-100 font-semibold text-lg'>LOGO</h1>
      </div>
      <div className="flex text-2xl pr-4">
        <BiSearch className='text-gray-100 text-md flex-auto mx-1' />
        
        <div ref={notification} onClick={function(){setNotificationToggle(!notificationToggle)}} className="relative cursor-pointer">
          <MdNotifications className='text-gray-100 text-md flex-auto mx-1' />
          <div className={` ${notificationToggle?"":"hidden"} absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-30`}>
              <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-700">
                  <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                  <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                  <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
              </div>
          </div>
        </div>
        <div ref={account} onClick={function(){setAccountToggle(!accountToggle)}} className="relative cursor-pointer">
          <MdAccountCircle className='text-gray-100 text-md flex-auto mx-1' />
          <div className={` ${accountToggle?"":"hidden"} absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-30`}>
              <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-700">
                  <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                  <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                  <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
              </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default topNavbar;
