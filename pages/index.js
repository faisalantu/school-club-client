import Home from "../components/home";
import ContainerWrapper from "../components/containerWrapper";
// import AuthWrapper from '../components/authWrapper.js';
const Index = (props) => {
  console.log("index run","client", (typeof window ))
  return (
    <>
      {/* <AuthWrapper> */}
        <ContainerWrapper>
          <Home />
        </ContainerWrapper>
      {/* </AuthWrapper> */}
    </>
  );
};

export default Index;
