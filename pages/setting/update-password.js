import ChangPassword from "../../components/setting/ChangPassword";
import ContainerWrapper from "../../components/containerWrapper";

const updatePassword = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className='px-5'>
          <ChangPassword />
        </div>
      </ContainerWrapper>
    </>
  );
};

export default updatePassword;
