import { useState, useEffect } from "react";
import ContainerWrapper from "../../components/containerWrapper";
import InputBox from "../../components/global/inputbox";
import DatePicker from "react-datepicker";
import ImageInputBox from "../../components/global/imageInputBox";
import TextEditor from "../../components/global/textEditor";
import "react-datepicker/dist/react-datepicker.css";
import { convertToRaw } from "draft-js";
import { connect } from "react-redux";
import { postEvent } from "../../store/events/action";

const AddEvent = ({ postEvent }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [fee, setFee] = useState("");
  const [tickets, setTickets] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [eventDate, setEventDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState(null);
  const [imageObj, setImageObj] = useState(null);
  const [eventBody, setEventBody] = useState(null);
  const [isPublic, setIsPublic] = useState(true);

  useEffect(() => {
    // console.log({
    //   title,
    //   location,
    //   fee,
    //   tickets,
    //   startTime,
    //   endTime,
    //   eventDate,
    //   email,
    //   contactNumber,
    //   imageObj,
    //   eventBody,
    //   isPublic,
    // });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postEvent({
      title,
      location,
      fee,
      tickets,
      startTime,
      endTime,
      eventDate,
      email,
      contactNumber,
      imageObj,
      eventBody: eventBody ? convertToRaw(eventBody?.getCurrentContent()) : "",
      isPublic,
    });
  };

  return (
    <>
      <ContainerWrapper>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className=' px-5'>
            <h1 className='font-bold text-3xl mb-3'>Add Event</h1>

            {/* 🎫 Title input  */}
            <InputBox
              label='Event Title'
              type='text'
              placeholder='title'
              name='title'
              ChangeHandel={setTitle}
            />

            {/* 🗺️ Location Input  */}
            <InputBox
              name='location'
              label='Location'
              type='text'
              placeholder='Dhaka, Bangladesh'
              ChangeHandel={setLocation}
            />

            {/* 🎫 Ticket and 💰money input  */}
            <div className=' grid grid-cols-2 grid-col-2 gap-4'>
              <InputBox
                label='Tickets'
                type='number'
                placeholder='45'
                name='tickets'
                ChangeHandel={setTickets}
              />
              <InputBox
                label='$Price'
                type='number'
                placeholder='100 taka'
                name='price'
                ChangeHandel={setFee}
              />
            </div>

            {/* ⏲️ Time Picker */}
            <div className='flex flex-wrap gap-5'>
              <div>
                <p className='text-lg mb-2'>Select time</p>
                <div className='flex'>
                  <InputBox type='time' ChangeHandel={setStartTime} />
                  <span className='px-3 mt-3'>-</span>
                  <InputBox type='time' ChangeHandel={setEndTime} />
                </div>
              </div>

              {/* 📅 Date Picker */}
              <div>
                <p className='text-lg mb-2'>Select Date</p>
                <DatePicker
                  className='bg-transparent border-2 border-gray-300 py-2 rounded px-2'
                  selected={eventDate}
                  onChange={(date) => setEventDate(date)}
                  dateFormat='dd-MMMM-yyyy'
                />
              </div>
            </div>
            {/* 📨 Email Input */}
            <InputBox
              label='Email'
              type='text'
              placeholder='name@email.com'
              name='email'
              ChangeHandel={setEmail}
            />

            {/* 📱 phone number input */}
            <InputBox
              label='Contact Number'
              type='text'
              name='phone'
              placeholder='+88017XXXXXXX'
              ChangeHandel={setContactNumber}
            />

            {/* 🖼️ Image Input ==> returns base64 encoded url */}
            <div>
              <p className='text-lg mb-2'>Select Image</p>
              <ImageInputBox onImageChange={setImageObj} />
            </div>

            {/* 📰 Text Editor */}
            <p className='text-lg mt-5 mb-2'>Write something about the event</p>
            <div className='border-2 border-gray-300 p-2 break-all'>
              <TextEditor changeHandle={setEventBody} />
            </div>
            <div>
              <input
                type='checkbox'
                id='vehicle1'
                name='vehicle1'
                value='Bike'
              ></input>
              <label htmlFor='vehicle1'> Publish</label>
            </div>
            <div className='flex flex-row justify-center my-3'>
              <button
                onClick={handleSubmit}
                type='submit'
                className='border-2 rounded-lg bg-gray-200 border-yellow-400 cursor-pointer px-5 py-2'
              >
                Save Change
              </button>
            </div>
          </div>
        </form>
      </ContainerWrapper>
    </>
  );
};

export default connect(null, { postEvent })(AddEvent);
