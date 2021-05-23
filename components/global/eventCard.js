import Link from "next/link";
import UserInfoAndDate from "./userInfoAndDate";
import dayjs from "dayjs";
import axios from "../../axios";
import Router from "next/router";
import { ImLocation } from "react-icons/im";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiTicket, GiHand } from "react-icons/gi";
import {
  BiTimeFive,
  BiMailSend,
  BiPhone,
  BiPlus,
  BiCalendar,
} from "react-icons/bi";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
const EventCard = ({
  name,
  role,
  date,
  title,
  location,
  fee,
  tickets,
  time,
  email,
  phone,
  edit,
  slug,
  imgUrl,
  eventDate,
  eventId,
}) => {
  const deletePost = () => {
    confirmAlert({
      title: "Confirm to Delete post",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const res = await axios.delete(`/events/one?postId=${eventId}`);
            console.log(res);
            Router.reload(window.location.pathname);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <>
      <div className='bg-white border-gray-600 p-5 rounded-md shadow-sm my-5'>
        <UserInfoAndDate
          name={name && name}
          //role={UserData.role}
          imgUrl={imgUrl && imgUrl}
          date={date && date}
        />
        <div className='flex mt-3 leading-relaxed'>
          <div style={{ height: "auto", width: "45px" }}></div>
          <div>
            <Link href='/events/cse/id=12'>
              <a>
                <h1 className='ml-4 text-xl font-medium'>{title && title}</h1>{" "}
              </a>
            </Link>

            <div className='flex items-center ml-4'>
              <ImLocation className=' text-sm' />
              <h3 className='ml-1'>{location && location}</h3>
            </div>
            <div className='flex items-center ml-4'>
              <RiMoneyDollarCircleFill className=' text-sm' />
              <p className='ml-1'>Fee {fee && fee} taka</p>
              <GiTicket className='ml-5 text-sm' />
              <p className='ml-1'>{tickets && tickets} tickets left</p>
            </div>
            <div className='flex items-center ml-4'>
              <BiTimeFive className=' text-sm' />
              <p className='ml-1'>Time: {time && time}</p>
            </div>
            <div className='flex items-center ml-4'>
              <BiCalendar className=' text-sm' />
              <p className='ml-1'>
                Date: {eventDate ? dayjs(eventDate).format("DD-MM-YYYY") : ""}
              </p>
            </div>
            <div className='flex items-center ml-4'>
              <BiMailSend className=' text-sm' />
              <p className='ml-1'>{email && email}</p>
            </div>
            <div className='flex items-center ml-4'>
              <BiPhone className=' text-sm' />
              <p className='ml-1'>{phone && phone}</p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-end my-2'>
          {edit ? (
            <>
              <button className=' border bg-yellow-200 hover:bg-yellow-300 px-3 py-0.5 rounded mx-2'>
                Edit
              </button>
              <button
                onClick={deletePost}
                className=' border bg-red-300 hover:bg-red-400 px-3 py-0.5 rounded mx-2'
              >
                Delete
              </button>
            </>
          ) : (
            ""
          )}
          <button className=' border bg-gray-200 hover:bg-gray-300 px-2 py-0.5 rounded mx-2 flex items-center'>
            <GiHand /> <span className='ml-1'>Volunteer</span>
          </button>
          <button className=' border bg-gray-200 hover:bg-gray-300 px-2 py-0.5 rounded mx-2 flex items-center'>
            <BiPlus /> <span className='ml-1'>Join</span>
          </button>
          <Link href={`/events/view/${slug}`}>
            <a className=' border bg-gray-200 hover:bg-gray-300 px-2 py-0.5 rounded flex items-center'>
              <span className='ml-1'>Read more</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventCard;
