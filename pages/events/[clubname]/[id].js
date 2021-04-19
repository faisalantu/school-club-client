import { useState } from "react";
import UserInfoAndDate from "../../../components/global/userInfoAndDate";
import Comments from "../../../components/postComponent/comments";
import Reaction from "../../../components/postComponent/reaction";
import CommentForm from "../../../components/postComponent/commentForm";
import PostBody from "../../../components/postComponent/postBody";
import ContainerWrapper from "../../../components/containerWrapper";
import Image from "next/image";

import { ImLocation } from "react-icons/im";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiTicket, GiHand } from "react-icons/gi";
import { BiTimeFive, BiMailSend, BiPhone, BiPlus } from "react-icons/bi";
import RoundedUserList from "../../../components/global/roundedUserList";
const Post = () => {
  const [eventData, setEventData] = useState({
    title: "10 Trending projects on GitHub for web developer",
    dateCreated: "3 Feb 2021",
    location: "Dhaka, Bangladesh",
    fee: "100",
    tickets: "34",
    time: "4:00pm - 5:30pm",
    email: "hello@faisalantu.com",
    phone: "88017 XXX XXXX",
    imgUrl: "/event-banner.webp",
  });
  const [UserData, setUserData] = useState({
    name: "Faisal Antu",
    role: "CSE Club President",
    imgUrl: "/portrait-2.jpeg",
  });
  return (
    <>
      <ContainerWrapper>
        <div className='py-2 mx-5'>
          <div className=' border-b pb-4'>
            <h1 className=' text-3xl font-medium'>
              {eventData.title && eventData.title}
            </h1>
            <div className='mt-3'>
              <UserInfoAndDate
                name={UserData.name}
                role={UserData.role}
                imgUrl={UserData.imgUrl ? UserData.imgUrl : "/user.png"}
                date={eventData.dateCreated}
              />
            </div>

            <div className='mt-3 leading-relaxed'>
              <div className='flex flex-wrap'>
                <div className='flex items-center mr-5'>
                  <ImLocation className=' text-sm' />
                  <h3 className='ml-1'>
                    {eventData.location && eventData.location}
                  </h3>
                </div>
                <div className='flex items-center mr-5'>
                  <RiMoneyDollarCircleFill className=' text-sm' />
                  <p className='ml-1'>
                    Fee {eventData.fee && eventData.fee} taka
                  </p>
                </div>
                <div className='flex items-center mr-5'>
                  <GiTicket className='text-sm' />
                  <p className='ml-1'>
                    {eventData.tickets && eventData.tickets} tickets left
                  </p>
                </div>
                <div className='flex items-center mr-5'>
                  <BiTimeFive className=' text-sm' />
                  <p className='ml-1'>
                    Time: {eventData.time && eventData.time}
                  </p>
                </div>
                <div className='flex items-center mr-5'>
                  <BiMailSend className=' text-sm' />
                  <p className='ml-1'>{eventData.email && eventData.email}</p>
                </div>
                <div className='flex items-center mr-5'>
                  <BiPhone className=' text-sm' />
                  <p className='ml-1'>{eventData.phone && eventData.phone}</p>
                </div>
              </div>
            </div>

            {eventData.imgUrl && (
              <div className=' w-full '>
                <Image
                  src={
                    eventData.imgUrl ? eventData.imgUrl : "/event-banner.webp"
                  }
                  layout='responsive'
                  objectFit='contain'
                  height={10}
                  width={16}
                  loading='lazy'
                  quality={50}
                ></Image>
              </div>
            )}
            <PostBody />
            <div>
              <h1 className='text-2xl font-medium mt-5 mb-3'>
                Volunteers{" "}
                <span className='bg-gray-300 rounded-full px-3 py-0.5 text-base font-normal ml-1'>
                  12
                </span>
              </h1>
              <div className='flex gap-3 flex-wrap'>
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-1.jpg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-1.jpg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
              </div>
            </div>

            <div>
              <h1 className='text-2xl font-medium mt-5 mb-3'>
                Participants
                <span className='bg-gray-300 rounded-full px-3 py-0.5 text-base font-normal ml-1'>
                  35
                </span>
              </h1>
              <div className='flex gap-3 flex-wrap'>
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-1.jpg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-1.jpg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-1.jpg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-1.jpg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-1.jpg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-1.jpg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-1.jpg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-1.jpg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-1.jpg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-1.jpg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
                <RoundedUserList name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
              </div>
            </div>
            <Reaction reactions='12' className='mt-4' />
          </div>
          <div>
            <h1 className='pt-3 text-xl'>Comments</h1>
            <CommentForm />
          </div>
          <Comments
            userName='Junayed Khan Noor'
            userImgUrl='/portrait-2.jpeg'
            date='3 Feb 2021'
            comments="We should start with HTML and CSs first , learn the absolute basics,
          follow good channels like brad traversy on youtube or Colt Steele's
          Web developer bootcamp on Udemy. You can spend around 2 weeks on HTML,
          CSS basics and then start with javascript. Do more practicals and
          understand the necessary theories and concepts."
          />
          <Comments />
          <Comments />
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Post;
