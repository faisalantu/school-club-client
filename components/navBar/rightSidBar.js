import { useState, useRef } from "react";
import EventBar from "./eventBar";
import useOnClickOutside from "use-onclickoutside";
//icons
import { MdEventNote } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
const RightSideBar = (props) => {
    const { sideEventHandelear, isSideEventShown } = props
    // const [isSideEventShown, setSideEventShown] = useState(false);
    // const eventbar = useRef(null);
    // const sideEventHandelear = () => {
    //   setSideEventShown(!isSideEventShown);
    // //   setSidebarShown(false)
    // }
    // useOnClickOutside(eventbar, function () {
    //   setSideEventShown(false);
    // });
    // className={` ${ rightSideBarVisibility?' ':'invisible sm:visible ' }   `}
    // RightSideBarVisibility for small screen
    const [rightSideBarVisibility, setRightSideBarVisibility] = useState(false);
    const rightSideBarVisibilityToggol = () => {
        setRightSideBarVisibility(!rightSideBarVisibility)
    }
    let iconPositionAndVisibility=''
    if(rightSideBarVisibility && isSideEventShown)
    {
        iconPositionAndVisibility='invisible'
    }
    else if(rightSideBarVisibility)
    {
        iconPositionAndVisibility='right-0 bottom-2 transform rotate-180 '
    }
    else if(!rightSideBarVisibility)
    {
        iconPositionAndVisibility='right-0  visible sm:invisible '
    }

    return (
        <>
           <IoIosArrowBack className={` ${ iconPositionAndVisibility} fixed z-40   text-green-500 text-3xl p-0`} onClick={rightSideBarVisibilityToggol} />
            <div className={`pt-5 right-0 sm:flex sm:flex-col fixed bg-gray-100 h-full z-20 ${ rightSideBarVisibility?' ':'invisible sm:visible ' } `}>
                <div className={`flex mb-1 `}>
                    <MdEventNote className={`${isSideEventShown && ' border-r-4 border-green-600'}  text-green-500 text-3xl  mx-1`} onClick={sideEventHandelear} />
                    <span className={`${!isSideEventShown && ' hidden '} mx-auto pr-6  text-2xl`} >Event</span>
                </div>

                <div className='flex  h-full'>
                    {isSideEventShown && <EventBar />}
                </div>

            </div>
        </>
    )

}
export default RightSideBar