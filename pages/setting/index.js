import { connect } from "react-redux";
import AccountInfo from "../../components/setting/accountInfo";
import ContainerWrapper from "../../components/containerWrapper";
import { wrapper } from "../../store/store";
const setting = (props) => {
  // const router = useRouter()
  // console.log(router.pathname)
  const info={
    img:"/portrait-2.jpeg",
    fName:"Faisal",
    lName:"Antu",
    email:"hello@faisalantu.com",
    phone:'017XXXXXXXXX',
    location:"Dhaka bangladesh",
    studentID:'163 XXX XXX',
    clubs:{
        "CSE":true, "EEE":false ,"English":false ,"Programming":true
    }
  }
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
        <AccountInfo accountInfo={info} />
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