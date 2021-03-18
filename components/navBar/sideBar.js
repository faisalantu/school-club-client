import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

import Link from 'next/link'
import { useState } from 'react'
export default function SideBar() {

  const [infoVisibility, setInfoVisibility] = useState(true)
  const [poatVisibility, setPoatVisibility] = useState(true)
  const [eventVisibility, setEventVisibility] = useState(true)
  function changVisiblity(choise) {

    switch (choise) {
      case "Club information":
        if (infoVisibility) {
          setInfoVisibility(false)
        }
        else {
          setInfoVisibility(true)
        }
        break;
      case "Club Post":
        if (poatVisibility) {
          setPoatVisibility(false)
        }
        else {
          setPoatVisibility(true)
        }
        break;
      case "Club Event":
        if (eventVisibility) {
          setEventVisibility(false)
        }
        else {
          setEventVisibility(true)
        }
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className=" w-60 pl-14 pt-2.5">
        <div className="class pb-2.5" ><svg className=" inline-block mr-4 " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 11.4142C4 11.149 4.10536 10.8946 4.29289 10.7071L11.2929 3.70708C11.6834 3.31655 12.3166 3.31655 12.7071 3.70708L19.7071 10.7071C19.8946 10.8946 20 11.149 20 11.4142V21C20 21.5523 19.5523 22 19 22H14V15H10V22H5C4.44772 22 4 21.5523 4 21V11.4142Z" fill="black" />
        </svg>Home</div>
        <div className="class pb-2.5" onClick={changVisiblity.bind(this, "Club information")} >
          <svg className=" inline-block mr-4" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4H10V6H8V4Z" fill="black" />
            <path d="M10 8V12H11V14H8V10H7V8H10Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 0H1C0.447 0 0 0.448 0 1V17C0 17.552 0.447 18 1 18H17C17.553 18 18 17.552 18 17V1C18 0.448 17.553 0 17 0ZM2 16V2H16V16H2Z" fill="black" />
          </svg>
          Club information
          {infoVisibility ?
            <img className=" inline-block  ml-1 transform -rotate-90" width="10rem" src="chevron_right.svg"></img>
            : <img className=" inline-block  ml-1" width="10rem" src="chevron_right.svg"></img>
          }
          <div className={`border-l-2 border-black ml-2 pl-10 mt-2 py-0 mb-0 ${infoVisibility ? "hidden" : " "}`}>
            <div>CSE</div>
            <div>EEE</div>
            <div>TXT</div>
            <div>Language</div>
          </div>
        </div>
        <div className="class pb-2.5" onClick={changVisiblity.bind(this, "Club Event")} ><svg className=" inline-block mr-4" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 10H6V12H4V10Z" fill="#333333" />
          <path d="M4 14H6V16H4V14Z" fill="#333333" />
          <path d="M10 10H8V12H10V10Z" fill="#333333" />
          <path d="M8 14H10V16H8V14Z" fill="#333333" />
          <path d="M14 10H12V12H14V10Z" fill="#333333" />
          <path d="M12 14H14V16H12V14Z" fill="#333333" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 20H2C0.897 20 0 19.103 0 18V4C0 2.897 0.897 2 2 2H4V0H6V2H12V0H14V2H16C17.103 2 18 2.897 18 4V18C18 19.103 17.103 20 16 20ZM16.0001 6L16 4H2V6H16.0001ZM16.0003 8L16.001 18H2V8H16.0003Z" fill="#333333" />
        </svg>Club Event
        {eventVisibility ?
            <img className=" inline-block  ml-1 transform -rotate-90" width="10rem" src="chevron_right.svg"></img>
            : <img className=" inline-block  ml-1" width="10rem" src="chevron_right.svg"></img>
          }
          <div className={`border-l-2 border-black ml-2 pl-10 mt-2 py-0 mb-0 ${eventVisibility ? "hidden" : " "}`}>
            <div>CSE</div>
            <div>EEE</div>
            <div>TXT</div>
            <div>Language</div>
          </div>
        </div>
        <div className="class pb-2.5" onClick={changVisiblity.bind(this, "Club Post")} ><svg className=" inline-block mr-4" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.937 6.68C15.926 6.648 15.917 6.617 15.904 6.586C15.855 6.48 15.794 6.379 15.708 6.293L9.708 0.293C9.622 0.207 9.521 0.146 9.415 0.0969999C9.385 0.0829999 9.353 0.0749999 9.321 0.0639999C9.237 0.0359999 9.151 0.018 9.062 0.013C9.04 0.011 9.021 0 9 0H2C0.897 0 0 0.897 0 2V18C0 19.103 0.897 20 2 20H14C15.103 20 16 19.103 16 18V7C16 6.979 15.989 6.96 15.987 6.938C15.982 6.85 15.965 6.764 15.937 6.68ZM12.586 6H10V3.414L12.586 6ZM2 18V2H8V7C8 7.553 8.447 8 9 8H14L14.002 18H2Z" fill="black" />
        </svg>Club Post
        {poatVisibility ?
            <img className=" inline-block  ml-1 transform -rotate-90" width="10rem" src="chevron_right.svg"></img>
            : <img className=" inline-block  ml-1" width="10rem" src="chevron_right.svg"></img>
          }


          <div className={`border-l-2 border-black ml-2 pl-10 mt-2 py-0 mb-0 ${poatVisibility ? "hidden" : " "}`}>
            <div>CSE</div>
            <div>EEE</div>
            <div>TXT</div>
            <div>Language</div>
          </div>

        </div>
      </div>





    </>
  )
}
