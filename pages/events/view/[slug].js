import { useState } from "react";
import UserInfoAndDate from "../../../components/global/userInfoAndDate";
import Comments from "../../../components/postComponent/comments";
import Reaction from "../../../components/postComponent/reaction";
import CommentForm from "../../../components/postComponent/commentForm";
import PostBody from "../../../components/postComponent/postBody";
import ContainerWrapper from "../../../components/containerWrapper";
import Image from "next/image";
import axios from "axios";
import { API_URL } from "../../../config";
import dayjs from "dayjs";
import dynamic from "next/dynamic";

import { ImLocation } from "react-icons/im";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiTicket, GiHand } from "react-icons/gi";
import { BiTimeFive, BiMailSend, BiPhone, BiPlus } from "react-icons/bi";
import RoundedUserList from "../../../components/global/roundedUserList";
const Post = ({ post }) => {
  const {
    title,
    date,
    location,
    tickets,
    fee,
    startTime,
    endTime,
    eventDate,
    email,
    contactNumber,
    imageObj,
    eventBody,
    imageObj: { url },
    userlist,
  } = post;
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
            <h1 className=' text-3xl font-medium'>{title && title}</h1>
            {userlist && date && (
              <div className='mt-3'>
                <UserInfoAndDate
                  name={userlist.firstname + " " + userlist.lastname}
                  //role={UserData.role}
                  imgUrl={userlist.imageObj.url}
                  date={date && date}
                />
              </div>
            )}

            <div className='mt-3 leading-relaxed'>
              <div className='flex flex-wrap'>
                <div className='flex items-center mr-5'>
                  <ImLocation className=' text-sm' />
                  <h3 className='ml-1'>{location && location}</h3>
                </div>
                <div className='flex items-center mr-5'>
                  <RiMoneyDollarCircleFill className=' text-sm' />
                  <p className='ml-1'>Fee {fee && fee} taka</p>
                </div>
                <div className='flex items-center mr-5'>
                  <GiTicket className='text-sm' />
                  <p className='ml-1'>{tickets && tickets} tickets left</p>
                </div>
                <div className='flex items-center mr-5'>
                  <BiTimeFive className=' text-sm' />
                  <p className='ml-1'>
                    Time:{" "}
                    {startTime && endTime ? startTime + " - " + endTime : null}
                  </p>
                </div>
                <div className='flex items-center mr-5'>
                  <BiTimeFive className=' text-sm' />
                  <p className='ml-1'>
                    date:{" "}
                    {eventDate ? dayjs(eventDate).format("DD-MM-YYYY") : null}
                  </p>
                </div>
                <div className='flex items-center mr-5'>
                  <BiMailSend className=' text-sm' />
                  <p className='ml-1'>{email && email}</p>
                </div>
                <div className='flex items-center mr-5'>
                  <BiPhone className=' text-sm' />
                  <p className='ml-1'>{contactNumber && contactNumber}</p>
                </div>
              </div>
            </div>

            {url && (
              <div className=' w-full my-5'>
                <Image
                  src={url ? url : "/event-banner.webp"}
                  layout='responsive'
                  objectFit='contain'
                  height={10}
                  width={16}
                  loading='lazy'
                  quality={50}
                ></Image>
              </div>
            )}
            {eventBody && <PostBody body={eventBody} />}
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

export async function getServerSideProps({ params: { slug } }) {
  try {
    const response = await axios.get(`${API_URL}/events/one?slug=${slug}`);
    if (response.data.length < 1) {
      return {
        redirect: {
          permanent: false,
          destination: "/404",
        },
      };
    } else {
      return {
        props: { post: response.data[0] },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
}

export default Post;
