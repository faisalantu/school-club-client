import PhotoCard from "./photoCard";
import ShowAllBtn from "./showAllBtn";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
const ClubMembers = ({ users, clubname }) => {
  return (
    <div>
      <div className='flex items-center mb-5'>
        <h1 className='text-xl'>Club Members</h1>
        <MdKeyboardArrowRight className=' text-xl mt-0.5' />
        {/* <ShowAllBtn /> */}
      </div>
      <div className='flex flex-wrap gap-5'>
        {users
          ? users.precedent.map((user) => {
              if (user.slug === clubname) {
                return (
                  <div key={user._id}>
                    <Link href={`${clubname}/${user.precedent._id}`}>
                      <a>
                        <PhotoCard
                          imgUrl={`${user.precedent.imageObj.url}`}
                          name={`${user.precedent.firstname}  ${user.precedent.lastname}`}
                          rank='Club President'
                        />
                      </a>
                    </Link>
                  </div>
                );
              } else return "";
            })
          : ""}

        {users
          ? users.memberWithRoles.map((user) => {
              if (user.rolesOf.slug === clubname) {
                return (
                  <div key={user._id}>
                    <Link href={`${clubname}/${user._id}`}>
                      <a>
                        <PhotoCard
                          imgUrl={`${user.imageObj.url}`}
                          name={`${user.firstname}  ${user.lastname}`}
                          rank={`${user.roles[0].name}`}
                        />
                      </a>
                    </Link>
                  </div>
                );
              } else return "";
            })
          : ""}

        {/* <PhotoCard
          imgUrl='/portrait-2.jpeg'
          name='Faisal Antu'
          rank='Club President'
        />
        <PhotoCard
          imgUrl='/portrait-1.jpg'
          name='Faisal Antu'
          rank='Treasurer'
        />
        <PhotoCard
          imgUrl='/portrait-2.jpeg'
          name='Faisal Antu'
          rank='Moderator'
        />
        <PhotoCard
          imgUrl='/portrait-2.jpeg'
          name='Faisal Antu'
          rank='Moderator'
        />
        <PhotoCard
          imgUrl='/portrait-1.jpg'
          name='Faisal Antu'
          rank='Designer'
        />
        <PhotoCard imgUrl='/portrait-2.jpeg' name='Faisal Antu' rank='' />
        <PhotoCard imgUrl='/portrait-1.jpg' name='Faisal Antu' rank='' />
        <PhotoCard imgUrl='/portrait-2.jpeg' name='Faisal Antu' rank='' /> */}
      </div>
    </div>
  );
};

export default ClubMembers;
