import { useState, useEffect } from "react";
import axios from "../../axios";
import InputBox from "./inputbox";
import TextEditor from "./textEditor";
import TagInput from "./tagInput";
import ImageInputBox from "./imageInputBox";
import DropdownCheckBoxs from "./dropdownCheckBoxs";
import ToggleButton from "./toggleButton";
import { convertToRaw } from "draft-js";
import { connect } from "react-redux";
import { addPosts } from "../../store/posts/action";

const AddPost = ({ addPosts, postCategory, anonymousMode }) => {
  const [title, setTitle] = useState("");
  const [imageObj, setImageObj] = useState(null);
  const [eventBody, setEventBody] = useState(null);
  const [isPublic, setIsPublic] = useState(true);
  const [anonymous, setAnonymous] = useState(false);
  const [tags, setTags] = useState([]);
  const [clubs, setClubs] = useState({});
  const [clubsObj, setClubsObj] = useState([]);
  //fetch all clubs
  useEffect(() => {
    axios
      .get("/clublist")
      .then(function (response) {
        setClubsObj(response.data);
        response.data.forEach((club) => {
          setClubs((prev) => {
            return {
              ...prev,
              [club.name]: false,
            };
          });
        });
      })
      .catch(function (error) {
        //do someting with the error
      });
  }, []);

  //tag data from tag component
  const getTags = (cbtags) => {
    setTags(cbtags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //getting club name
    const clubName = [];
    Object.entries(clubs).forEach(([key, value]) => {
      if (value === true) {
        clubName.push(key);
      }
    });
    //getting selected club mongodbID
    let clubId;
    clubsObj.map((club) => {
      if (clubName.includes(club.name)) {
        clubId = club._id;
      }
    });
    addPosts({
      title,
      imageObj,
      eventBody: eventBody
        ? JSON.stringify(convertToRaw(eventBody.getCurrentContent()))
        : "",
      tags,
      isPublic,
      anonymous: anonymousMode ? anonymous : false,
      category: postCategory,
      clubId: clubId,
    });
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className='px-5'>
          <h1 className='font-bold text-3xl mb-3'>
            Add {postCategory && postCategory} post
          </h1>
          <div>
            {/* ???? Title input  */}
            <InputBox
              label='Event Title'
              type='text'
              placeholder='title'
              name='title'
              ChangeHandel={setTitle}
            />

            {/* ??????? Image Input ==> returns base64 encoded url */}
            <div>
              <p className='text-lg mb-2'>Select Image</p>
              <ImageInputBox onImageChange={setImageObj} />
            </div>

            {/* ???? Text Editor */}
            <p className='text-lg mt-5 mb-2'>Write something about the event</p>
            <div className='border-2 border-gray-300 p-2 break-all'>
              <TextEditor changeHandle={setEventBody} />
            </div>
          </div>

          <div className='mt-5'>
            <label className='text-lg'>Input some tags</label>
            <TagInput getTags={getTags} />
          </div>

          {/* dropdownCheckBoxs */}
          {clubs ? (
            <DropdownCheckBoxs
              dropdownItems={clubs}
              changeState={setClubs}
              type='radiobutton'
              label='post on'
              editMode={true}
            />
          ) : null}

          <div className=' mt-5 select-none'>
            <ToggleButton
              value={isPublic}
              setValue={setIsPublic}
              forId='hide'
            />
            <span className=' text-gray-500'>Publish this post</span>

            {anonymousMode ? (
              <div className='mt-3'>
                <ToggleButton
                  value={anonymous}
                  setValue={setAnonymous}
                  forId='anyonomus'
                />
                <span className=' text-gray-500'>
                  post anonymously{" "}
                  <span className=' text-yellow-500'>
                    ( noone can see your information except teachers )
                  </span>
                </span>
              </div>
            ) : null}
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
    </>
  );
};

export default connect(null, { addPosts })(AddPost);
