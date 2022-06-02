import Tags from "../../../components/global/tags";
import UserInfoAndDate from "../../../components/global/userInfoAndDate";
import Comments from "../../../components/postComponent/comments";
import Reaction from "../../../components/postComponent/reaction";
import CommentForm from "../../../components/postComponent/commentForm";
import PostBody from "../../../components/postComponent/postBody";
import ContainerWrapper from "../../../components/containerWrapper";
import Image from "next/image";
import axios from "axios";
import { API_URL } from "../../../config";
import { useState } from "react";
import { useEffect } from "react";
const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(null);
  const [likeCount, setLikeCount] = useState(null);
  const postId = post._id;
  useEffect(() => {
    const checkLike = async () => {
      try {
        const res = await axios.get(`/likepost?postId=${postId}`);
        if (res.data.success === true) {
          setLikeCount(res.data.message.likes);
          setIsLiked(res.data.message.isActive);
        }
      } catch (err) {}
    };
    checkLike();
  }, []);
  return (
    <>
      <ContainerWrapper>
        {post ? (
          <div className='py-2 mx-5'>
            <div className=' border-b-2 pb-4'>
              <h1 className=' text-3xl font-medium'>{post.title}</h1>
              <Tags tags={post.tags} />
              <div className='mt-3'>
                <UserInfoAndDate
                  tags={post.tags}
                  imgUrl={post.userlist[0].imageObj.url}
                  name={
                    post.userlist[0].firstname + " " + post.userlist[0].lastname
                  }
                  date={post.date}
                  title={post.title}
                />
              </div>
              <div className=' w-full mt-5'>
                <Image
                  src={post.imageObj.url}
                  layout='responsive'
                  objectFit='contain'
                  height={10}
                  width={16}
                  loading='lazy'
                  quality={50}
                ></Image>
              </div>
              <PostBody body={post.eventBody} />
              <Reaction
                reactions={likeCount}
                changeLikeCount={setLikeCount}
                active={isLiked}
                postId={postId}
                apiUrl={`/likepost`}
                className='mt-4'
              />
            </div>
            <div>
              <h1 className='pt-3 text-xl'>Comments</h1>
              <CommentForm />
            </div>
            <Comments
              userName='Junayed Khan Noor'
              userImgUrl='/portrait-2.jpeg'
              date='3 Feb 2021'
              comments="We should start with HTML and CSs first , learn the absolute basics,
                follow good channels like brad traversy on youtube or Colt Steele's
                Web developer bootcamp on Udemy. You can spend around 2 weeks on HTML,
                CSS basics and then start with javascript. Do more practicals and
                understand the necessary theories and concepts."
            />
            <Comments />
            <Comments />
          </div>
        ) : null}
      </ContainerWrapper>
    </>
  );
};

export async function getServerSideProps({ params: { slug } }) {
  try {
    const response = await axios.get(`${API_URL}/posts/one?slug=${slug}`);
    if (response.data.length < 1) {
      return {
        redirect: {
          permanent: false,
          destination: "/404",
        },
      };
    } else {
      return {
        props: { post: response.data[0] },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
}

export default Post;
