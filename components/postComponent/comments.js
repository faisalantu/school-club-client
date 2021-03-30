import UserInfoAndDate from "../global/userInfoAndDate";
import Reaction from "./reaction";
import { useState } from "react";
function commentArea({userName ,userImgUrl,date ,comments}) {

  const [submitBtnLogic, setSubmitBtnLogic] = useState(false) 
  return (
    <>
      <div className='p-3 border-gray-300 border-2 rounded-md mt-4'>
        <div className='mt-3'>
          <UserInfoAndDate
            name={userName}
            imgUrl={userImgUrl}
            date={date}
          />
        </div>
        <p className='mt-4'>
          {comments ? comments :' No comment'}
        </p>
        <Reaction reactions='' className='mt-1' />
      </div>
    </>
  );
}

export default commentArea;
