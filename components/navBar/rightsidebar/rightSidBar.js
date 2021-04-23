import EventBar from "./eventBar";
//icons
import { MdEventNote } from "react-icons/md";
import { BiX } from "react-icons/bi"
const RightSideBar = (props) => {
    const { sideEventHandelear, isSideEventShown } = props

    return (
        <>
           
            <div className={`pt-5 right-0 sm:flex sm:flex-col fixed bg-gray-100 h-full z-30 ${ 'invisible sm:visible ' } `}>
                <div className={`flex mb-1 `}>
                    <MdEventNote className={`${isSideEventShown && ' border-r-4 border-gray-900'} text-gray-900 text-3xl  mx-1`} onClick={sideEventHandelear} />
                    <span className={`${!isSideEventShown && ' hidden '} mx-auto   text-2xl`} >Event</span>
                    <BiX className={`${!isSideEventShown && ' hidden '} text-gray-900 text-3xl  mx-1`} onClick={sideEventHandelear} />
                </div>

                <div className='flex  h-full'>
                    {isSideEventShown && <EventBar />}
                   
                </div>

            </div>
        </>
    )

}
export default RightSideBar