import { connect } from "react-redux";
import ContainerWrapper from "../../components/containerWrapper";
import UpdateAccuntInfo from "../../components/setting/updateAccuntInfo";
import { wrapper } from "../../store/store";

const setting = (props) => {
  return (
    // <>
    //   <TopNavbar />
    //   <div className=' container mx-auto'>
    //     <div className='flex'>
    //       <SideBar className='flex-1 ' />
    //       <div className='container flex-1 '>
    //         <UpdateAccuntInfo/>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
    <ContainerWrapper>
      <UpdateAccuntInfo/>
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