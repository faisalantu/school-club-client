import ContainerWrapper from "../../components/containerWrapper";
import axios from "../../axios";
import { useEffect, useState } from "react";
import EventCard from "../../components/global/eventCard";

const Index = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get("/events/user");
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <ContainerWrapper>
        <div className='px-5'>
          {posts
            ? posts.map((post) => {
                return (
                  <div key={post._id}>
                    <EventCard
                      imgUrl={post.userlist.imageObj.url}
                      name={
                        post.userlist.firstname + " " + post.userlist.lastname
                      }
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
                      eventId={post._id}
                      eventDate={post.eventDate}
                      edit={true}
                    />
                  </div>
                );
              })
            : "loading"}
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Index;
