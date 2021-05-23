import axios from "axios";
import ContainerWrapper from "../../components/containerWrapper";
import AllClubs from "../../components/global/allClubs";
import {API_URL} from '../../config'

const Index = ({clublist}) => {
  return (
    <>
      <ContainerWrapper>
        <div className='flex flex-col gap-10 flex-wrap mb-5 px-5'>
          <AllClubs clublist={clublist} route='/club-posts/' />
        </div>
      </ContainerWrapper>
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
