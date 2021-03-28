import { useState } from "react";

//import icons
import { MdKeyboardArrowRight } from "react-icons/md";

function extendedLink(props) {
  const { name, icon, iconClass } = props;
  const [infoExpand, setInfoExpand] = useState(true);
  return (
    <div>
      <div className='class pb-2.5'>
        <div
          onClick={function () {
            setInfoExpand(!infoExpand);
          }}
          className='flex cursor-pointer'
        >
          <div className='flex items-center'>
            <div className='ml-0.5 mr-3'>
              <div className={`${iconClass?iconClass:''}`}>{icon ? icon : ""}</div>
            </div>
            <span>{name ? name : "Invalid Name"}</span>
          </div>
          {infoExpand ? (
            <MdKeyboardArrowRight className=' inline-block  sm:mt-0.5 lg:mt-1 text-xl' />
          ) : (
            <MdKeyboardArrowRight className=' inline-block  sm:mt-0.5 lg:mt-1 text-xl transform rotate-90' />
          )}
        </div>
        <div
          className={`border-l-2 border-black ml-2.5 pl-9 mt-2 py-0 mb-0 ${
            infoExpand ? "hidden" : " "
          }`}
        >
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default extendedLink;
