import Link from "next/link";
import CommentInfoBtn from "../postComponent/commentInfoBtn";
import UserInfoAndDate from "./userInfoAndDate";
import Tags from "./tags";
import Reaction from "../postComponent/reaction";
import axios from "../../axios";
import Router from 'next/router'
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const Container = ({
  edit,
  name,
  role,
  imgUrl,
  date,
  title,
  tags,
  slug,
  postId,
}) => {
  const deletePost = () => {
    confirmAlert({
      title: "Confirm to Delete post",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const res = await axios.delete(`/posts/one?postId=${postId}`);
            console.log(res);
            Router.reload(window.location.pathname);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <>
      <div className='bg-white border-gray-600 p-5 rounded-md shadow-sm my-5'>
        <UserInfoAndDate name={name} role={role} imgUrl={imgUrl} date={date} />
        <div className='flex mt-3 leading-relaxed'>
          <div style={{ height: "auto", width: "45px" }}></div>
          <div className='ml-4 w-full'>
            <h1 className=' text-xl font-medium'>
              {title ? title : "invalid title"}
            </h1>
            <Tags tags={tags} />
            <div className='flex justify-between flex-wrap'>
              <div className='flex items-center'>
                <Reaction />
                <CommentInfoBtn />
              </div>
              <div className='flex gap-3 items-center my-2'>
                {edit ? (
                  <>
                    <Link href={`/posts/edit/${postId}`}>
                      <a className=' border bg-yellow-200 hover:bg-yellow-300 px-2 py-0.5 rounded flex items-center'>
                        <span className='ml-1'>Edit</span>
                      </a>
                    </Link>
                    <button
                      onClick={deletePost}
                      className=' border bg-red-300 hover:bg-red-400 px-3 py-0.5 rounded'
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  ""
                )}

                <Link href={`/posts/view/${slug}`}>
                  <a className=' border bg-gray-200 hover:bg-gray-300 px-2 py-0.5 rounded flex items-center'>
                    <span className='ml-1'>Read more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
