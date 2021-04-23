import { GiHand } from "react-icons/gi";
import { BiPlus } from "react-icons/bi";
import ReactTooltip from "react-tooltip";
import Link from "next/link";
import Image from "next/image";
function NevEventCard(props) {
    const {img,heading,volunteersCount , participantsCount, eventLink } = props
    let title='!!!'
    if(heading){
        title=heading.substring(0, 80).concat('...')
    }
    
    return (
        <div className={`py-4 p-1  border-b border-green-300 `}>
            {/* <img className='rounded-lg' src="/event-banner-2.png" alt="event banner" width="300" /> */}
            <Image
                  src={
                    img ? img :'/event-banner.webp'
                  }
                  alt="event banner"
                  layout='responsive'
                  objectFit='cover'
                  height={9}
                  width={16}
                  loading='lazy'
                  quality={10}
                ></Image>
            <h1 
            data-tip={heading ? heading : "!"}
            data-background-color="#81b29a"
            className={`py-2 p-1 font-medium`} 
            >{title && title}
            </h1>
            <div className={`flex  justify-between`}>
                <button 
                data-tip={`Volunteer ${ volunteersCount ? volunteersCount:'!' }`} 
                data-background-color="#81b29a"
                className=' bg-gray-300 rounded-lg hover:bg-gray-400  px-2  mx-1 text-xs flex items-center'>
                    <GiHand /><span className=' rounded-full text-base font-normal ml-1'>{ volunteersCount ? volunteersCount:'!' }</span>
                </button>
                
                <button 
                data-tip={`Participants ${ participantsCount ? participantsCount:'!' }`}
                data-background-color="#81b29a"
                className='  bg-gray-300 rounded-lg hover:bg-gray-400  px-2  mx-1 text-xs flex items-center'>
                    <BiPlus /> <span className=' rounded-full text-base font-normal ml-1'>{ participantsCount ? participantsCount:'!' }</span>
                </button>
                 <Link href={eventLink? eventLink : "#"} >
                    <a 

                    className=' border rounded-lg bg-gray-300 hover:bg-gray-400 text-green-500 p-0.5   mx-1 '>
                        <span className='ml-1'>Read more</span>
                    </a>
                </Link>
            </div>

        <ReactTooltip />
        </div>
        
    )
}
export default NevEventCard;