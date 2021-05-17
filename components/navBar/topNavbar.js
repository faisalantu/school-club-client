import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import useOnClickOutside from "use-onclickoutside";
import { connect } from "react-redux";
import * as actions from "../../store/auth/action";
import TopNavAddBtn from "./topNavAddBtn";
import Image from 'next/image'
//importing Icons 👇
import { BiSearch, BiLock } from "react-icons/bi";
import { MdNotifications, MdAccountCircle, MdEvent } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { RiLockPasswordLine, RiAdminFill, RiDashboardLine } from "react-icons/ri";
import { BsTriangleFill } from "react-icons/bs";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
function topNavbar(props) {
  const { SidebarHandler, isSidebarShown } = props;
  const notification = useRef(null);
  const account = useRef(null);
  const addBtn = useRef(null);
  const [accountToggle, setAccountToggle] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);

  useOnClickOutside(notification, function () {
    setNotificationToggle(false);
  });
  useOnClickOutside(account, function () {
    setAccountToggle(false);
  });
  return (
    <div className=' w-full h-12 bg-gray-900 flex justify-between items-center whitespace-nowrap'>
      <div className={`  md:hidden flex items-center ml-4`}>
        <div
          onClick={() => {
            SidebarHandler();
          }}
        >
          <RiMenuUnfoldLine
            className={` ${isSidebarShown ? " hidden " : ""
              } text-gray-100 text-2xl  mx-1`}
          />
          <RiMenuFoldLine
            className={`${!isSidebarShown ? " hidden " : ""
              }text-gray-100 text-2xl  mx-1`}
          />
        </div>

        <h1 className='text-gray-100 font-semibold text-lg ml-2'>LOGO</h1>
      </div>
      <div className='pl-4  '>
        <h1 className='text-gray-100 font-semibold text-lg hidden md:block'>
          LOGO
        </h1>
      </div>
      <div className='flex gap-2 text-2xl pr-4'>
        <BiSearch className='text-gray-100 text-md flex-auto mx-1' />

        {/* Add sector */}
        <TopNavAddBtn />

        {/* notification sector */}
        <div
          ref={notification}
          onClick={function () {
            setNotificationToggle(!notificationToggle);
          }}
          className='relative cursor-pointer'
        >
          <MdNotifications className='text-gray-100 text-md flex-auto mx-1' />
          <BsTriangleFill
            className={`${notificationToggle ? "" : "hidden"
              } absolute right-1 text-white `}
          />
          <div
            className={` ${notificationToggle ? "" : "hidden"
              } absolute right-0  mt-2 origin-top-right rounded-md shadow-lg  z-30`}
          >
            <div className='px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-700'>
              <a
                className='flex justify-start px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg hover:bg-gray-200'
                href='#'
              >
                <MdEvent className='p-0 mr-1.5 text-base' />
                <span className='text-sm'>New Event</span>
              </a>
              <a
                className='flex justify-start px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg hover:bg-gray-200'
                href='#'
              >
                <RiLockPasswordLine className='p-0  mr-1.5 text-base' />
                <span className='text-sm'>Password Changed</span>
              </a>
            </div>
          </div>
        </div>

        {/* Account sector */}
        <div
          ref={account}
          onClick={function () {
            setAccountToggle(!accountToggle);
          }}
          className='relative cursor-pointer'
        >
          {(props.user.hasOwnProperty('imageObj'))
            ? <Image className=" rounded-full overflow-hidden flex-auto mx-1" src={props.user.imageObj.url} alt="user" width={25} height={25} />
            : <MdAccountCircle className='text-gray-100 text-md  mx-1' />
          }
          <BsTriangleFill
            className={`${accountToggle ? "" : "hidden"
              } absolute right-1 text-white `}
          />
          <div
            className={` ${accountToggle ? "" : "hidden"
              } absolute right-0 mt-2 origin-top-right rounded-md shadow-lg z-30`}
          >
            <div className='px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-700'>
              <Link href='/admin'>
                <a
                  className='flex justify-start px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg hover:bg-gray-200'
                  href='#'
                >
                  <RiAdminFill className='p-0 mr-1.5 text-base' />
                  <span className='text-sm'>Admin</span>
                </a>
              </Link>
              <Link href='/dashboard'>
                <a
                  className='flex justify-start px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg hover:bg-gray-200'
                  href='#'
                >
                  <RiDashboardLine className='p-0 mr-1.5 text-base' />
                  <span className='text-sm'>Dashboard</span>
                </a>
              </Link>
              <Link href='/setting'>
                <a
                  className='flex justify-start px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg hover:bg-gray-200'
                  href='#'
                >
                  <FiSettings className='p-0 mr-1.5 text-base' />
                  <span className='text-sm'>Settings</span>
                </a>
              </Link>
              <Link href='/setting/update-password'>
                <a
                  className='flex justify-start px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg hover:bg-gray-200'
                  href='#'
                >
                  <BiLock className='p-0 mr-1.5 text-base' />
                  <span className='text-sm'>Change Password</span>
                </a>
              </Link>
              <a
                onClick={props.logout}
                className='flex justify-start px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg hover:bg-gray-200'
                href='#'
              >
                <HiOutlineLogout className='p-0 mr-1.5 text-base' />
                <span className='text-sm'>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(topNavbar);
