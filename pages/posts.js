import { connect } from "react-redux";
import ContainerWrapper from "../components/containerWrapper";
import PostCard from '../components/postComponent/postCard'
import { wrapper } from "../store/store";

const Index = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className=''>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
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
