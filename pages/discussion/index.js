import ContainerWrapper from "../../components/containerWrapper";
import AllClubs from '../../components/global/allClubs'

const Index = (props) => {
  return (
    <div>
      sdkjghjcgejh
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log("erz");
  const res = await fetch("http://localhost:5000/api/clublist");
  console.log(res.json());

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Index;