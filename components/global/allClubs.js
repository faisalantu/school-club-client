import ClubCard from "./clubsCard";
import axios from "../../axios";
import { useEffect } from "react";
export default function home({ route }) {
  useEffect(() => {
    console.log(route);
  }, []);
  return (
    <div className='m-3'>
      <div className='grid grid-cols-3 gap-5 m-1'>
        <ClubCard
          route={route ? route + "cse" : "/"}
          clubName='Computer Science & Engineering'
        />
        <ClubCard
          route={route ? route : "clubinfo/cse"}
          clubName='Electrical and Electronics Engineering'
        />
        <ClubCard
          route={route ? route : "clubinfo/cse"}
          clubName='Computer Science & Engineering'
        />
        <ClubCard
          route={route ? route : "clubinfo/cse"}
          clubName='Computer Science & Engineering'
        />
        <ClubCard
          route={route ? route : "clubinfo/cse"}
          clubName='Computer Science & Engineering'
        />
        <ClubCard
          route={route ? route : "clubinfo/cse"}
          clubName='Electrical and Electronics Engineering'
        />
      </div>
    </div>
  );
}


