import { connect } from "react-redux";
import ChangPassword from "../../components/setting/ChangPassword";
import ContainerWrapper from "../../components/containerWrapper";
import { wrapper } from "../../store/store";

const setting = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className='px-5'>
          <ChangPassword />
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
