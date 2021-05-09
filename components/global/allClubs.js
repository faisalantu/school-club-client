import ClubCard from "./clubsCard";
import axios from "axios";
import { useEffect } from "react";

function allClub({ route, clublist }) {
  useEffect(() => {
    //console.log(clublist);
  }, []);
  return (
    <div className='m-3'>
      <div className='grid grid-cols-3 gap-5 m-1'>
        {clublist?clublist.map((club) => {
          return (
            <div key={club._id}>
              <ClubCard
                route={route ? route + club.slug : null}
                clubName={club.name}
              />
            </div>
          );
        }):null}
      </div>
    </div>
  );
}

export default allClub;
