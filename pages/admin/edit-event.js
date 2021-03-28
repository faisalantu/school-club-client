import { connect } from "react-redux";
import ContainerWrapper from "../../components/containerWrapper";
import { wrapper } from "../../store/store";
const setting = (props) => {
  return (
    <>
      <ContainerWrapper>

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
