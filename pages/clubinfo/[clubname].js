import ContainerWrapper from "../../components/containerWrapper";
import ClubMembers from "../../components/clubInformation/clubMembers";
import RecentEvents from "../../components/clubInformation/recentEvents";
import RecentPosts from "../../components/clubInformation/recentPosts";

const ClubName = (props) => {
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

export default ClubName;
