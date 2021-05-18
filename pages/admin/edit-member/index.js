import axios from "../../../axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContainerWrapper from "../../../components/containerWrapper";

import InputBox from "../../../components/global/inputbox";
import PhotoCard from "../../../components/global/photoCard";

const EditMember = (props) => {


  const [search, setSearch] = useState("")
  const [userData, setUserData] = useState([]);
  const [precedent, setPrecedent] = useState([]);
  const [memberWithRoles, setmemberWithRoles] = useState([]);
  useEffect(() => {
    axios.get("setRoles/")
    .then(res => {
      //console.log(res.data)
      setmemberWithRoles(res.data.memberWithRoles)
      setPrecedent(res.data.precedent)
    })
    .catch(err => {
      console.error(err); 
    })
  }, [])
  const searchUser = () => {
    if (search.length > 2) {
      //console.log('/users/all-send')
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
          //console.log(response);
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
        <div className="mb-2 text-lg text-grey-darkest">Club precedent</div>
        <div className='flex flex-wrap gap-9'>
            {
              precedent.map((user) => {
                let img = ""
                if (user.precedent.imageObj === undefined) {
                  img = null
                } else {
                  img = user.precedent.imageObj.secure_url
                }
                return (
                  <Link key={user._id} href={`/admin/edit-member/${user.precedent._id}`}>
                    <a  >
                      <PhotoCard  name={`${user.precedent.firstname} ${user.precedent.lastname}`} imgUrl={img} rank={`${user.name} Precedent`} />
                    </a>
                  </Link>
                )
              })
            }
            {
              memberWithRoles.map((user) => {
                let img = ""
                if (user.imageObj === undefined) {
                  img = null
                } else {
                  img = user.imageObj.secure_url
                }
                const rolelist=user.roles.map((item)=>{
                  return item.name
                })

                return (
                  <Link key={user._id} href={`/admin/edit-member/${user._id}`}>
                    <a  >
                      <PhotoCard  name={`${user.firstname} ${user.lastname}`} imgUrl={img} rank={`${rolelist.toString()}`} />
                    </a>
                  </Link>
                )
              })
            }
          </div>
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
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default EditMember;
