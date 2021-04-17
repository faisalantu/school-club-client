import ContainerWrapper from "../../components/containerWrapper";
import PostCard from "../../components/global/postCard";

const Index = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className='px-5'>
          <PostCard
            tags={["nodeJs", "NextJs"]}
            imgUrl='/portrait-1.jpg'
            name='Faisal Antu'
            date='3-apr-2021'
            title='Enhance your code reading experience on GitHub'
          />
          <PostCard
            tags={["nodeJs", "NextJs"]}
            imgUrl='/portrait-1.jpg'
            name='Faisal Antu'
            date='3-apr-2021'
            title='Enhance your code reading experience on GitHub'
          />
          <PostCard
            tags={["nodeJs", "NextJs"]}
            imgUrl='/portrait-1.jpg'
            name='Faisal Antu'
            date='3-apr-2021'
            title='Enhance your code reading experience on GitHub'
          />
          <PostCard
            tags={["nodeJs", "NextJs"]}
            imgUrl='/portrait-1.jpg'
            name='Faisal Antu'
            date='3-apr-2021'
            title='Enhance your code reading experience on GitHub'
          />
          <PostCard
            tags={["nodeJs", "NextJs"]}
            imgUrl='/portrait-1.jpg'
            name='Faisal Antu'
            date='3-apr-2021'
            title='Enhance your code reading experience on GitHub'
          />
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Index;
