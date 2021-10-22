import EventCard from "../../components/global/eventCard";
import ContainerWrapper from "../../components/containerWrapper";
import axios from "../../axios";
import { useEffect, useState } from "react";
const EditEvents = (props) => {
  const [events, setEvents] = useState();
  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get("/events");
        setEvents(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <ContainerWrapper>
        {events ? events.map((post) => {
          return (
            <div key={post._id}>
              <EventCard
                eventId={post._id}
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
                edit={true}
              />
            </div>
          );
        }):""}
      </ContainerWrapper>
    </>
  );
};

export default EditEvents;
