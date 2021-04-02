import { connect } from "react-redux";
import ContainerWrapper from "../../components/containerWrapper";
import UpdateAccuntInfo from "../../components/setting/updateAccuntInfo";
import { wrapper } from "../../store/store";
const setting = (props) => {
  // const router = useRouter()
  // console.log(router.pathname)
  const info = {
    img: "/portrait-2.jpeg",
    fName: "Faisal",
    lName: "Antu",
    email: "hello@faisalantu.com",
    phone: "017XXXXXXXXX",
    location: "Dhaka bangladesh",
    studentID: "163 XXX XXX",
    clubs: {
      CSE: true,
      EEE: false,
      English: false,
      Programming: true,
    },
  };
  return (
    <>
      <ContainerWrapper>
        <div className='px-5'>
          <UpdateAccuntInfo accountInfo={info} />
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
