import { GiHand } from "react-icons/gi";
import { BiPlus } from "react-icons/bi";
import ReactTooltip from "react-tooltip";
import Link from "next/link";
import Image from "next/image";
function NevEventCard(props) {
    const {img,heading,volunteersCount , participantsCount, eventLink } = props
    let title='!!!'
    if(heading){
        title=heading.substring(0, 58).concat('...')
    }
    
    return (
        <div className={`py-2 p-1  border-b border-green-300 `}>
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
            <h3 
            data-tip={heading ? heading : "!"}
            data-background-color="#81b29a"
            className={`py-2 p-1 font-bold`} 
            >{title && title}
            </h3>
            <div className={`flex  justify-between`}>
                <button 
                data-tip={`Volunteer ${ volunteersCount ? volunteersCount:'!' }`} 
                data-background-color="#81b29a"
                className='  hover:bg-gray-300  py-0.5 rounded mx-1 flex items-center'>
                    <GiHand /><span className='bg-gray-300 rounded-full px-2 py-0.5 text-base font-normal ml-1'>{ volunteersCount ? volunteersCount:'!' }</span>
                </button>
                
                <button 
                data-tip={`Participants ${ participantsCount ? participantsCount:'!' }`}
                data-background-color="#81b29a"
                className=' hover:bg-gray-300  py-0.5 rounded mx-1 flex items-center'>
                    <BiPlus /> <span className='bg-gray-300 rounded-full px-2 py-0.5 text-base font-normal ml-1'>{ participantsCount ? participantsCount:'!' }</span>
                </button>
                 <Link href={eventLink? eventLink : "#"} >
                    <a 

                    className=' border  rounded-l-3xl bg-gray-200 hover:bg-gray-300 text-green-500 p-0.5   mx-1 '>
                        <span className='ml-1'>Read more</span>
                    </a>
                </Link>
            </div>

        <ReactTooltip />
        </div>
        
    )
}
export default NevEventCard;