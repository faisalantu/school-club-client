import Link from "next/link";
import { fromJSON } from "postcss";
import { useState } from "react";

//import icons
import { HiHome } from "react-icons/hi";
import { Si1Password } from "react-icons/si";
import { RiAccountBoxLine } from "react-icons/ri";


export default function SideBar() {
    //   const [infoExpand, setInfoExpand] = useState(true);
    //   const [clubPostExpand, setClubPostExpand] = useState(true);
    //   const [eventExpand, setEventExpand] = useState(true);

    return (
        <>
            <div className='pt-2.5 px-14 lg:text-xl'>
                <div className='class pb-2.5 cursor-pointer flex items-center'>
                    <HiHome className='text-xl p-0 m-0 mr-2' />
                    <Link href="/"><span>Home</span></Link>
                </div>
                <div className='class pb-2.5 cursor-pointer flex items-center'>
                    <RiAccountBoxLine className='text-xl p-0 m-0 mr-2' />
                    <Link href="/setting"><span>Account</span></Link>
                </div>
                <div className='class pb-2.5 cursor-pointer flex items-center'>
                    <Si1Password className='text-xl p-0 m-0 mr-2' />
                    <Link href="/setting/update-password"><span>Change Password</span></Link>
                </div>
            </div>
        </>
    );
}
