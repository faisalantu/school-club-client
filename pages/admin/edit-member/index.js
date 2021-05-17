import axios from "../../../axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContainerWrapper from "../../../components/containerWrapper";

import InputBox from "../../../components/global/inputbox";
import PhotoCard from "../../../components/global/photoCard";

const EditMember = (props) => {


  const [search, setSearch] = useState("")
  const [userData, setUserData] = useState([]);
  const searchUser = () => {
    if (search.length > 2) {
      console.log('/users/all-send')
      axios.get('/users/all', {
        params: {
          name: search
        }
      })
        .then(function (response) {
          // handle success
          setUserData((prevValue) => {
            if (response.data.length > 0) {
              return response.data
            } else {
              return []
            }
          })
          console.log(response);
        })
    }
  }
  useEffect(() => {
    searchUser()
  }, [search])
  //imgUrl={user.imageObj.url === undefined ? null : user.imageObj.url}
  return (
    <>
      <ContainerWrapper>
        <div className='px-5 mx-auto'>
          <div className='flex items-center'>
            <div className='flex-1 mr-2'>
              <InputBox label='Search User' placeholder=' input user name' type="text" name="search" ChangeHandel={setSearch} value={search} />
            </div>
            <button
              type='submit'
              className='border-2 rounded-lg border-yellow-400 cursor-pointer px-5 py-1.5 focus:outline-none hover:bg-gray-200'
              onClick={searchUser}
            >
              Search
            </button>
          </div>
          <div className='flex flex-wrap gap-9'>
            {
              userData.map((user) => {
                let img = ""
                if (user.imageObj === undefined) {
                  img = null
                } else {
                  img = user.imageObj.secure_url
                }
                return (
                  <Link key={user._id} href={`/admin/edit-member/${user._id}`}>
                    <a  >
                      <PhotoCard  name={`${user.firstname} ${user.lastname}`} imgUrl={img} rank={`${user.isPrecedent ? "Precedent " : "member"}`} />
                    </a>
                  </Link>
                )
              })
            }
            <Link href='/admin/edit-member/123'>
              <a>
                <PhotoCard name='Faisal Antu' imgUrl='/portrait-2.jpeg' />
              </a>
            </Link>
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default EditMember;
