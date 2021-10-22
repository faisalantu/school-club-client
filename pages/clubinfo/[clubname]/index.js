import ContainerWrapper from "../../../components/containerWrapper";
import ClubMembers from "../../../components/clubInformation/clubMembers";
import RecentEvents from "../../../components/clubInformation/recentEvents";
import RecentPosts from "../../../components/clubInformation/recentPosts";
import axios from "axios";
import ClientAxios from "../../../axios"
import { useEffect, useState } from "react";
import { API_URL } from "../../../config";
import EventCard from "../../../components/global/eventCard";
import PostCard from "../../../components/global/postCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import ShowAllBtn from "../../../components/clubInformation/showAllBtn";
const ClubName = ({ events, posts, clubname }) => {

  const [users, setUsers] = useState(null);
  useEffect(() => {
    (async function () {
      try {
        let res = await ClientAxios.get("/setRoles");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <ContainerWrapper>
        <div className='flex flex-col gap-10 flex-wrap mb-5 px-5'>
          <ClubMembers users={users} clubname={clubname} />
        </div>

        <div className='px-5'>
          <div className='flex items-center mb-5'>
            <h1 className='text-xl'>Recent Events</h1>
            <MdKeyboardArrowRight className=' text-xl mt-0.5' />
            <ShowAllBtn route={"/club-events/" + clubname} />
          </div>
          {events.map((post) => {
            return (
              <div key={post._id}>
                <EventCard
                  imgUrl={post.userlist.imageObj.url}
                  name={post.userlist.firstname + " " + post.userlist.lastname}
                  //role='CSE Club President'
                  date={post.date}
                  title={post.title}
                  location={post.location}
                  fee={post.fee}
                  tickets={post.tickets}
                  time={post.startTime + " - " + post.endTime}
                  email={post.email}
                  phone={post.contactNumber}
                  slug={post.slug}
                  eventDate={post.eventDate}
                  edit={false}
                />
              </div>
            );
          })}
        </div>

        <div className='px-5'>
          <div className='flex items-center mb-5'>
            <h1 className='text-xl'>Recent Posts</h1>
            <MdKeyboardArrowRight className=' text-xl mt-0.5' />
            <ShowAllBtn route={"/club-posts/" + clubname} />
          </div>
          {posts.map((post) => {
            return (
              <div key={post._id}>
                <PostCard
                  tags={post.tags}
                  imgUrl={post.userlist[0].imageObj.url}
                  name={
                    post.userlist[0].firstname + " " + post.userlist[0].lastname
                  }
                  date={post.date}
                  title={post.title}
                  slug={post.slug}
                />
              </div>
            );
          })}
        </div>
      </ContainerWrapper>
    </>
  );
};

export async function getServerSideProps({ params: { clubname } }) {
  console.log(clubname);
  try {
    const events = await axios.get(
      `${API_URL}/events?category=club&club=${clubname}`
    );
    const posts = await axios.get(
      `${API_URL}/posts?category=club&club=${clubname}`
    );
    return {
      props: {
        events: events.data,
        posts: posts.data,
        clubname: clubname,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}

export default ClubName;
