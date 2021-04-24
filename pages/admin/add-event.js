import { useState, useEffect, forwardRef } from "react";
import ContainerWrapper from "../../components/containerWrapper";
import InputBox from "../../components/global/inputbox";
import DatePicker from "react-datepicker";
import ImageInputBox from "../../components/global/imageInputBox";
import TextEditor from "../../components/global/textEditor";
import "react-datepicker/dist/react-datepicker.css";

const Setting = (props) => {
  const [timeTest, setTimeTest] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    console.log(startDate?.getDate());
  }, [startDate]);

  return (
    <>
      <ContainerWrapper>
        <div className=' px-5'>
          <h1 className='font-bold text-3xl mb-3'>Add Event</h1>
          
          {/* 🎫 Ticket and 💰money input  */}
          <InputBox label='Event Title' placeholder='title' />

          {/* 🗺️ Location Input  */}
          <InputBox
            label='Location'
            type='text'
            placeholder='Dhaka, Bangladesh'
          />

          {/* 🎫 Ticket and 💰money input  */}
          <div className=' grid grid-cols-2 grid-col-2 gap-4'>
            <InputBox label='Tickets' type='number' placeholder='45' />
            <InputBox label='$Price' type='text' placeholder='100 taka' />
          </div>

          {/* ⏲️ Time Picker */}
          <div className='flex flex-wrap gap-5'>
            <div>
              <p className='text-lg mb-2'>Select time</p>
              <div className='flex'>
                <InputBox type='time' />
                <span className='px-3 mt-3'>-</span>
                <InputBox type='time' />
              </div>
            </div>

            {/* 📅 Date Picker */}
            <div>
              <p className='text-lg mb-2'>Select Date</p>
              <DatePicker
                className='bg-transparent border-2 border-gray-300 py-2 rounded px-2'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat='dd-MMMM-yyyy'
              />
            </div>
          </div>
          {/* 📨 Email Input */}
          <InputBox label='Email' type='text' placeholder='name@email.com' />

          {/* 📱 phone number input */}
          <InputBox
            label='Contact Number'
            type='text'
            placeholder='+88017XXXXXXX'
          />

          {/* 🖼️ Image Input */}
          <div>
            <p className='text-lg mb-2'>Select Image</p>
            <ImageInputBox />
          </div>

          {/* 📰 Text Editor */}
          <p className='text-lg mt-5 mb-2'>Write something about the event</p>
          <div className='border-2 border-gray-300 p-2'>
            <TextEditor />
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
              type='submit'
              className='border-2 rounded-lg bg-gray-200 border-yellow-400 cursor-pointer px-5 py-2'
            >
              Save Change
            </button>
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Setting;
