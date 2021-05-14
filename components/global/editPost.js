import { useState, useEffect } from "react";
import axios from "../../axios";
import InputBox from "./inputbox";
import TextEditor from "./textEditor";
import TagInput from "./tagInput";
import ImageInputBox from "./imageInputBox";
import ToggleButton from "./toggleButton";
import { convertToRaw } from "draft-js";
import { connect } from "react-redux";
import { addPosts } from "../../store/posts/action";

const AddPost = ({ addPosts, pid }) => {
  const [dataFetching, setDataFetching] = useState(true);
  const [fetchedData, setFetchedData] = useState({});
  const [title, setTitle] = useState("");
  const [imageObj, setImageObj] = useState(null);
  const [eventBody, setEventBody] = useState(null);
  const [isPublic, setIsPublic] = useState(true);
  const [anonymous, setAnonymous] = useState(false);
  const [tags, setTags] = useState([]);

  //fetch all clubs
  useEffect(() => {
    (async function () {
      setDataFetching(true);
      try {
        const res = await axios.get(`/posts/one?postId=${pid}`);
        setFetchedData(res.data[0]);
        setTitle(res.data[0].title);
        setEventBody(JSON.parse(res.data[0].eventBody));
        setTags(res.data[0].tags);
        setIsPublic(res.data[0].isPublic)
        setAnonymous(res.data[0].anonymous);
        //console.log(eventBody)
      } catch (err) {
        console.log(err);
      }
      setDataFetching(false);
    })();
  }, []);

  //tag data from tag component
  const getTags = (cbtags) => {
    setTags(cbtags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //getting club name

    addPosts({
      title,
      imageObj,
      eventBody: eventBody
        ? JSON.stringify(convertToRaw(eventBody.getCurrentContent()))
        : "",
      tags,
      isPublic,
    });
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
            <h1 className='font-bold text-3xl mb-3'>Edit Post</h1>
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

            <div className='mt-5'>
              <label className='text-lg'>Input some tags</label>
              <TagInput initialTags={tags} getTags={getTags} />
            </div>

            <div className=' mt-5 select-none'>
              <ToggleButton
                value={isPublic}
                setValue={setIsPublic}
                forId='hide'
              />
              <span className=' text-gray-500'>Publish this post</span>

              {fetchedData.anonymous ? (
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
      )}
    </>
  );
};

export default connect(null, { addPosts })(AddPost);
