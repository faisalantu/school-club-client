import ContainerWrapper from "../../components/containerWrapper";
import UpdateAccuntInfo from "../../components/setting/updateAccuntInfo";

const setting = (props) => {
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

export default setting;
