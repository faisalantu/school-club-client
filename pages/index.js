import { connect } from "react-redux";
import Home from "../components/home";
import ContainerWrapper from "../components/containerWrapper";
import { wrapper } from "../store/store";

const Index = (props) => {
  return (
    <>
      <ContainerWrapper>
        <Home/>
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
