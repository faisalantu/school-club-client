import { useState, useEffect } from "react";
import axios from "../../axios";
import InputBox from "./inputbox";
import TextEditor from "./textEditor";
import ImageInputBox from "./imageInputBox";
import ToggleButton from "./toggleButton";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { connect } from "react-redux";
import { editEvent } from "../../store/events/action";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditEvent = ({ editEvent, pid }) => {
  const [dataFetching, setDataFetching] = useState(true);
  const [fetchedData, setFetchedData] = useState({});
  const [title, setTitle] = useState("");
  const [imageObj, setImageObj] = useState();
  const [eventBody, setEventBody] = useState("");
  const [location, setLocation] = useState("");
  const [fee, setFee] = useState("");
  const [tickets, setTickets] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  //fetch all clubs
  useEffect(() => {
    (async function () {
      setDataFetching(true);
      try {
        const res = await axios.get(`/events/one?postId=${pid}`);

        setFetchedData(res.data[0]);
        setTitle(res.data[0].title);
        setEventBody(
          EditorState.createWithContent(
            convertFromRaw(JSON.parse(res.data[0].eventBody))
          )
        );
        setLocation(res.data[0].location);
        setTickets(res.data[0].tickets);
        setFee(res.data[0].fee);
        setStartTime(res.data[0].startTime);
        setEndTime(res.data[0].endTime);
        setEmail(res.data[0].email);
        setContactNumber(res.data[0].contactNumber);
        setEventDate(new Date(res.data[0].eventDate));
        setIsPublic(res.data[0].isPublic);
      } catch (err) {
        console.log(err);
      }
      setDataFetching(false);
    })();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    editEvent(
      {
        title,
        location,
        tickets,
        fee,
        startTime,
        endTime,
        email,
        contactNumber,
        eventDate,
        imageObj,
        eventBody: eventBody
          ? JSON.stringify(convertToRaw(eventBody.getCurrentContent()))
          : "",

        isPublic,
      },
      pid
    );
  };
  return (
    <>
      {dataFetching ? null : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className='px-5'>
            <h1 className='font-bold text-3xl mb-3'>Edit Event</h1>
            <div>
              {/* 🎫 Title input  */}
              <InputBox
                label='Event Title'
                type='text'
                placeholder='title'
                name='title'
                value={title}
                ChangeHandel={setTitle}
              />

              {/* 🗺️ Location Input  */}
              <InputBox
                name='location'
                value={location}
                label='Location'
                type='text'
                placeholder='Dhaka, Bangladesh'
                ChangeHandel={setLocation}
              />

              {/* 🎫 Ticket and 💰money input  */}
              <div className=' grid grid-cols-2 grid-col-2 gap-4'>
                <InputBox
                  label='Tickets'
                  value={tickets}
                  type='number'
                  placeholder='45'
                  name='tickets'
                  ChangeHandel={setTickets}
                />
                <InputBox
                  label='$Price'
                  value={fee}
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
                    <InputBox
                      type='time'
                      value={startTime}
                      ChangeHandel={setStartTime}
                    />
                    <span className='px-3 mt-3'>-</span>
                    <InputBox
                      type='time'
                      value={endTime}
                      ChangeHandel={setEndTime}
                    />
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
                value={email}
                type='text'
                placeholder='name@email.com'
                name='email'
                ChangeHandel={setEmail}
              />

              {/* 📱 phone number input */}
              <InputBox
                label='Contact Number'
                value={contactNumber}
                type='text'
                name='phone'
                placeholder='+88017XXXXXXX'
                ChangeHandel={setContactNumber}
              />

              {/* 🖼️ Image Input ==> returns base64 encoded url */}
              <div>
                <p className='text-lg mb-2'>Select Image</p>
                <ImageInputBox
                  url={fetchedData.imageObj.url}
                  onImageChange={setImageObj}
                />
              </div>

              {/* 📰 Text Editor */}
              <p className='text-lg mt-5 mb-2'>
                Write something about the event
              </p>
              <div className='border-2 border-gray-300 p-2 break-all'>
                <TextEditor
                  initialFetchedData={eventBody}
                  changeHandle={setEventBody}
                />
              </div>
            </div>

            <div className=' mt-5 select-none'>
              <ToggleButton
                value={isPublic}
                setValue={setIsPublic}
                forId='hide'
              />
              <span className=' text-gray-500'>Publish this post</span>
            </div>
          </div>

          <div className='flex flex-row justify-center my-3'>
            <button
              onClick={handleSubmit}
              type='submit'
              className='border-2 rounded-lg bg-gray-200 border-yellow-400 cursor-pointer px-5 py-2'
            >
              Save Changes
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default connect(null, { editEvent })(EditEvent);
