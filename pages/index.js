// import { connect } from "react-redux";
// import { wrapper } from "../store/store";
import Home from "../components/home";
import ContainerWrapper from "../components/containerWrapper";

const Index = (props) => {
  return (
    <>
      <ContainerWrapper>
        <Home />
      </ContainerWrapper>
    </>
  );
};

// // redux setup
// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {});

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// export default connect(null, mapDispatchToProps)(Index);

export default Index;
