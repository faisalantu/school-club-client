import { useEffect, useState, useRef } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import axios from "../../../axios"
import ContainerWrapper from "../../../components/containerWrapper";
import DropdownCheckBoxs from "../../../components/global/dropdownCheckBoxs";
import ToggleButton from "../../../components/global/toggleButton";
import Image from "next/image";
import { useRouter } from 'next/router'

const SelectMember = () => {

  const router = useRouter()
  const { pid } = router.query
  const [precedent, setPrecedent] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [clubsObj, setClubsObj] = useState([]);
  const [clubs, setClubs] = useState({});
  const [selectedClubName, setselectedClubName] = useState("");
  useEffect(() => {
    Object.entries(clubs).forEach(([key, value]) => {
      if (value == true) {
        setselectedClubName(key)
      }
    })
  }, [clubs])

  const [rolesObj, setRolesObj] = useState([]);
  const [roles, setRoles] = useState({});
  useEffect(() => {
    const url = `/users/${pid}`
    axios.get(url)
      .then(res => {
        console.log(` /users/${pid}`, res)
        setUserObj(res.data)
      })
      .catch(err => {
        console.error(err);
      })
    //get clubs
    axios.get("clubList")
      .then(res => {
        setClubsObj(res.data)
        res.data.forEach((club) => {
          setClubs((prev) => {
            return {
              ...prev,
              [club.name]: false,
            }
          });
        })
        console.log(`clubList`, res)
      })
      .catch(err => {
        console.error(err);
      })
    //get roles
    axios.get("role")
      .then(res => {
        setRolesObj(res.data)
        res.data.forEach((role) => {
          setRoles((prev) => {
            return {
              ...prev,
              [role.name]: false,
            }
          });
        })
        console.log(`role`, res)
      })
      .catch(err => {
        console.error(err);
      })
    setEditMode(false)
  }, [])
  // update dropdown roles , if previous roles are present 
  const isMount = useRef(false);
  useEffect(() => {
    if (isMount.current) {
      if (userObj.roles.length > 0) {
        userObj.roles.forEach((id) => {
          rolesObj.forEach((role) => {
            if (id === role._id) {
              setRoles((prevStat) => {
                return {
                  ...prevStat,
                  [role.name]: true,
                }
              })
            }
          })
        })
      }
      setPrecedent(userObj.isPrecedent)
      if(userObj.isPrecedent){
        setClubs((prevStat) => {
          return {
            ...prevStat,
            [userObj.presidentOf.name]: true,
          }
        })
      }
    } else {
      isMount.current = true;
    }
  }, [userObj])

  const [editMode, setEditMode] = useState(true);

  const options = {
    title: 'update Roles',
    message: '',
    buttons: [
      {
        label: 'continue', 
        onClick: () => submitHandler()
      },
      // {
      //   label: 'No',
      //   onClick: () => onClose()
      // }
    ],
  }
  const submit = () => {
  confirmAlert(options)} 
  const submitHandler=()=>{
    const RolesName=[]
      Object.entries(roles).forEach(([key, value]) => {
      if(value === true)
      {
        RolesName.push(key)
      }
    })
    const RolesId =[] 
    rolesObj.map((role)=>{
      if(RolesName.includes(role.name)){
        RolesId.push(role._id) 
      }
    })
    let clubId
    clubsObj.forEach((club)=>{
      if( selectedClubName === club.name){
        clubId=club._id
      }
    })
    const url="setroles/"
    const data={
      userId:userObj._id,
      precedent,
      selectedClubName,
      RolesId,
      clubId
    }
    axios.put(url,data)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err); 
    })
  }
  return (
    <div>
      <ContainerWrapper>
        <div className='px-5'>
          <div className=' flex flex-row justify-start items-center mt-2'>
            <div className='bg-white rounded-full w-44 h-44 relative overflow-hidden'>
              <Image
                src={userObj.imageObj != undefined ? userObj.imageObj.secure_url : '/portrait-1.jpg'}
                layout='fill'
                objectFit='cover'
              ></Image>
            </div>
            <div className=' ml-10 '>
              <h1 className=' font-semibold text-4xl py-2'>{`${userObj.firstname} ${userObj.lastname}`}</h1>
              <span className='text-xl '>ID: {userObj.studentid}</span>
            </div>
          </div>
          <div className='w-4/5 mt-5'>
            {/* <label className='mb-2 text-lg text-grey-darkest' htmlFor=''>
              Select Role
            </label> */}
            <DropdownCheckBoxs
              label="Select club"
              dropdownItems={clubs}
              editMode={true}
              changeState={setClubs}
              type='radiobutton'
            />
          </div>
          <div className=' w-4/5 mt-5'>
            {/* <label className='mb-2 text-lg text-grey-darkest' htmlFor=''>
              Select Role
            </label> */}
            <DropdownCheckBoxs
              label={`Select Role as ${selectedClubName} member`}
              dropdownItems={roles}
              editMode={true}
              changeState={setRoles}
            />
          </div>
          <div>
            <span>Add user as {selectedClubName}  Precedent </span><ToggleButton value={precedent} setValue={setPrecedent} forId="club Precedent" />
          </div>

          <div className='flex flex-row justify-center my-3'>
            <button
              onClick={submit}
              type='submit'
              className='border-2 rounded-lg bg-gray-200 border-yellow-400 cursor-pointer px-5 py-2'
            >
              Save Change
            </button>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default SelectMember;
