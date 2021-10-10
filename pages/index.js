import axios from "axios";
import Carousel from "../components/home/carousel"
import ContainerWrapper from "../components/containerWrapper";
import AllClubs from "../components/global/allClubs";
import {API_URL} from '../config'
// import AuthWrapper from '../components/authWrapper.js';
const Index = ({clublist}) => {
  //console.log("index run","client", (typeof window ))
  return (
    <>
      {/* <AuthWrapper> */}
      <ContainerWrapper>
        <Carousel/>
        <div className='flex flex-col gap-10 flex-wrap mb-5 px-5'>
          <AllClubs clublist={clublist} route='/clubinfo/' />
        </div>
      </ContainerWrapper>
      {/* </AuthWrapper> */}
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(`${API_URL}/clublist`);
    return {
      props: { clublist: res.data }, 
    };
  } catch (error) {
    return {
      props: {}, 
    };
  }
}
export default Index;
