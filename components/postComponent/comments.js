import UserInfoAndDate from "../global/userInfoAndDate";
import Reaction from "./reaction";
import { useState } from "react";
function commentArea({userName ,userImgUrl,date ,comments}) {

  const [submitBtnLogic, setSubmitBtnLogic] = useState(false) 
  return (
    <>
      <div className='p-3 border-gray-300 border rounded-md mt-4'>
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
      </div>
    </>
  );
}

export default commentArea;
