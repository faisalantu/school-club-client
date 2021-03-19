import { connect } from "react-redux";
import SideBar from "../components/navBar/sideBar";
import TopNavbar from "../components/navBar/topNavbar";
import ContainerWrapper from "../components/containerWrapper";
import EventCard from '../components/eventCard'
import { wrapper } from "../store/store";

const Index = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className=''>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
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

export default connect(null, mapDispatchToProps)(Index);
