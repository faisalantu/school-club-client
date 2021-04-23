import ContainerWrapper from "../../components/containerWrapper";
import AllClubs from '../../components/global/allClubs'

const Index = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className='flex flex-col gap-10 flex-wrap mb-5 px-5'>
          <AllClubs route="posts/cse"/>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Index;