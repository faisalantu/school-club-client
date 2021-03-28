import { connect } from "react-redux";
import PostCard from "../../components/global/postCard";
import ContainerWrapper from "../../components/containerWrapper";
import { wrapper } from "../../store/store";
const setting = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className='w-11/12 mx-auto'>
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

export default connect(null, mapDispatchToProps)(setting);
