import { connect } from "react-redux";
import ContainerWrapper from "../../components/containerWrapper";
import PostCard from '../../components/global/postCard'
import { wrapper } from "../../store/store";

const Index = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className='px-5'>
          <PostCard imgUrl='/portrait-1.jpg' name='Faisal Antu' date='3-apr-2021' title='Enhance your code reading experience on GitHub' />
          <PostCard imgUrl='/portrait-1.jpg' name='Faisal Antu' date='3-apr-2021' title='Enhance your code reading experience on GitHub' />
          <PostCard imgUrl='/portrait-1.jpg' name='Faisal Antu' date='3-apr-2021' title='Enhance your code reading experience on GitHub' />
          <PostCard imgUrl='/portrait-1.jpg' name='Faisal Antu' date='3-apr-2021' title='Enhance your code reading experience on GitHub' />
          <PostCard imgUrl='/portrait-1.jpg' name='Faisal Antu' date='3-apr-2021' title='Enhance your code reading experience on GitHub' />
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

export default connect(null, mapDispatchToProps)(Index);
