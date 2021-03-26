import UserInfoAndDate from "./userInfoAndDate";
import Reaction from "./reaction";
import { useState } from "react";
function commentArea() {

  const [submitBtnLogic, setSubmitBtnLogic] = useState(false) 
  return (
    <>
      <div className='p-3 border-gray-300 border-2 rounded-md mt-4'>
        <div className='mt-3'>
          <UserInfoAndDate
            name='Junayed Khan Noor'
            imgUrl='/portrait-2.jpeg'
            date='3 Feb 2021'
          />
        </div>
        <p className='mt-4'>
          We should start with HTML and CSs first , learn the absolute basics,
          follow good channels like brad traversy on youtube or Colt Steele's
          Web developer bootcamp on Udemy. You can spend around 2 weeks on HTML,
          CSS basics and then start with javascript. Do more practicals and
          understand the necessary theories and concepts.
        </p>
        <Reaction reactions='' className='mt-1' />
      </div>
    </>
  );
}

export default commentArea;
