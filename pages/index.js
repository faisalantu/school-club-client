import { connect } from "react-redux";
import SideBar from "../components/navBar/sideBar";
import TopNavbar from "../components/navBar/topNavbar";
import Home from "../components/home";
import ContainerWrapper from "../components/containerWrapper";
import { wrapper } from "../store/store";

const Index = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className=''>
        <Home/>
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
