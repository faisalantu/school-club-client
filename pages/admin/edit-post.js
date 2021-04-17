import PostCard from "../../components/global/postCard";
import ContainerWrapper from "../../components/containerWrapper";

const EditPost = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className='px-5'>
          <PostCard
            name='Faisal Antu'
            role='CSE Club President'
            imgUrl='/portrait-1.jpg'
            date='3 Feb 2021'
            title='10 Trending projects on GitHub for web developer'
            tags={["git", "gitHub", "nodeJs", "nextJs"]}
            edit={true}
          />
          <PostCard
            name='Faisal Antu'
            role='CSE Club President'
            imgUrl='/portrait-1.jpg'
            date='3 Feb 2021'
            title='10 Trending projects on GitHub for web developer'
            tags={["git", "gitHub", "nodeJs", "nextJs"]}
            edit={true}
          />
          <PostCard
            name='Faisal Antu'
            role='CSE Club President'
            imgUrl='/portrait-1.jpg'
            date='3 Feb 2021'
            title='10 Trending projects on GitHub for web developer'
            tags={["git", "gitHub", "nodeJs", "nextJs"]}
            edit={true}
          />
        </div>
      </ContainerWrapper>
    </>
  );
};

export default EditPost;
