import ContainerWrapper from "../../../components/containerWrapper";
import EventCard from "../../../components/global/eventCard";
import { API_URL } from "../../../config";
import axios from "axios";

const Index = ({ posts }) => {
  return (
    <>
      <ContainerWrapper>
        <div className='px-5'>
          {posts.map((post) => {
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
      </ContainerWrapper>
    </>
  );
};

export async function getServerSideProps({ params: { clubname } }) {
  console.log(clubname);
  try {
    const res = await axios.get(
      `${API_URL}/events?category=club&club=${clubname}`
    );
    return {
      props: { posts: res.data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}

export default Index;
