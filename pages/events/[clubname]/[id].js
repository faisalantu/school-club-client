import Tags from "../../../components/global/tags";
import UserInfoAndDate from "../../../components/global/userInfoAndDate";
import Comments from "../../../components/postComponent/comments";
import Reaction from "../../../components/postComponent/reaction";
import CommentForm from "../../../components/postComponent/commentForm";
import PostBody from "../../../components/postComponent/postBody";
import ContainerWrapper from "../../../components/containerWrapper";
import Image from "next/image";
const Post = ({ imgUrl }) => {
  return (
    <>
      <ContainerWrapper>
        <div className='py-2 mx-5'>
          <div className=' border-b-2 pb-4'>
            <h1 className=' text-3xl font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              facilis ea tempore.
            </h1>
            <Tags tags={["git", "gitHub", "nodeJs", "nextJs"]} />
            <div className='mt-3'>
              <UserInfoAndDate
                name='Faisal Antu'
                role='CSE Club President'
                imgUrl='/portrait-2.jpeg'
                date='3 Feb 2021'
              />
            </div>
            <div className=' w-full '>
              <Image
                src={imgUrl ? imgUrl : "/event-banner.webp"}
                layout='responsive'
                objectFit='contain'
                height={10}
                width={16}
                loading='lazy'
                quality={50}
              ></Image>
            </div>
            <PostBody />
            <Reaction reactions='12' className='mt-4' />
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
      </ContainerWrapper>
    </>
  );
};

export default Post;