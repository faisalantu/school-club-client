import { connect } from "react-redux";
import SideBar from "../../components/setting/sideBar";
import TopNavbar from "../../components/navBar/topNavbar";
import AccountInfo from "../../components/setting/accountInfo";
import UpdateAccuntInfo from "../../components/setting/updateAccuntInfo";
import ChangPassword from "../../components/setting/ChangPassword";
import ContainerWrapper from "../../components/containerWrapper";
import { wrapper } from "../../store/store";

const setting = (props) => {
  return (
    <>
      <TopNavbar />
      <div className=' container mx-auto'>
        <div className='flex'>
          <SideBar className='flex-1 ' />
          <div className='container flex-1 '>
            {/* {props.children} */}
            <AccountInfo/>
            {/* <ChangPassword/> */}
           {/* <UpdateAccuntInfo/> */}
          </div>
        </div>
      </div>
    </>
  );
};

// redux setup
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(setting);