import { connect } from "react-redux";
import Tags from "../../components/postComponent/tags";
import UserInfoAndDate from "../../components/postComponent/userInfoAndDate";
import Comments from "../../components/postComponent/comments";
import Reaction from "../../components/postComponent/reaction";
import CommentForm from "../../components/postComponent/commentForm";
import PostBody from "../../components/postComponent/postBody";
import ContainerWrapper from "../../components/containerWrapper";
import { wrapper } from "../../store/store";

const Post = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className='p-2 mx-5'>
          <div className=' border-b-2 pb-4'>
            <h1 className=' text-3xl font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              facilis ea tempore.
            </h1>
            <Tags />
            <div className='mt-3'>
              <UserInfoAndDate
                name='Faisal Antu'
                role='CSE Club President'
                imgUrl='/portrait-2.jpeg'
                date='3 Feb 2021'
              />
            </div>
            <PostBody />
            <Reaction reactions='12' className='mt-4' />
          </div>
          <div>
            <h1 className='pt-3 text-xl'>Comments</h1>
            <CommentForm />
          </div>
          <Comments />
          <Comments />
          <Comments />
        </div>
      </ContainerWrapper>
    </>
  );
};

// redux setup
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(Post);
