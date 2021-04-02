import { connect } from "react-redux";
import ContainerWrapper from "../../components/containerWrapper";
import ClubMembers from "../../components/clubInformation/clubMembers";
import RecentEvents from "../../components/clubInformation/recentEvents";
import RecentPosts from "../../components/clubInformation/recentPosts";
import { wrapper } from "../../store/store";

const Index = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className='flex flex-col gap-10 flex-wrap mb-5 px-5'>
          <ClubMembers />
          <RecentEvents />
          <RecentPosts />
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
