import { connect } from "react-redux";
import AccountInfo from "../../components/setting/accountInfo";
import ContainerWrapper from "../../components/containerWrapper";
import { wrapper } from "../../store/store";
const setting = (props) => {
  // const router = useRouter()
  // console.log(router.pathname)
  return (
    // <>
    //   <TopNavbar />
    //   <div className=' container mx-auto'>
    //     <div className='flex'>
    //       <SideBar className='flex-1 ' />
    //       <div className='container flex-1 '>
    //         {/* {props.children} */}
    //         <AccountInfo/>
    //         {/* <ChangPassword/> */}
    //        {/* <UpdateAccuntInfo/> */}
    //       </div>
    //     </div>
    //   </div>
    // </>


    <>
      <ContainerWrapper>
        <AccountInfo />
      </ContainerWrapper>
    </>
  );
};

// redux setup
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => { });

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(setting);