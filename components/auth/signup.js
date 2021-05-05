import Link from "next/link";
import { useEffect, useState } from "react";
import ProfileImageCropper from "../profileImageCropper/imageUpload";
import { connect } from "react-redux";
import { signupAction } from "../../store/auth/action";
import DropdownCheckBoxs from "../global/dropdownCheckBoxs";
import Spinner from "../global/Spinner"
import axios from "../../axios"
function Signup( { signupAction }) {
  const [password, setPassword] = useState({
    password1: "",
    password2: "",
  });
  const [inputValues, setInputValues] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    studentid: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const passwordHandleOnChange = (event) => {
    const { name, value } = event.target;
    setPassword({ ...password, [name]: value });
  };
  const [image, setImage] = useState();
  useEffect(()=>{
    console.log("[useEffect-image]")
  },[image])

  const [clubsObj, setClubsObj] = useState([]);
  const [clubs, setClubs] = useState({ });
  const [depertment, setDepertment] = useState({ });
  const [depertmentObj, setdepertmentObj] = useState([]);
  const [interested, setinterested] = useState({ });
  useEffect(()=>{
    axios.get('/depertment')
    .then(function (response) {
      //console.log(" [/depertment]=> ",response.data);
      setdepertmentObj((preValue)=>{
        return response.data
      })  
    }).then(()=>{
      depertmentObj.forEach((depart)=>{
        console.log(" depertmentObj.forEach((depart)=>{}");
        setDepertment((prev)=>{
            return {
              ...prev,
              [depart.name] : false,
            }
        });
      })
    }).catch(function (error) {
      console.log('/depertment',error)
    })
    
    axios.get('/clublist')
    .then(function (response) {
      //console.log(" [/clublist]=> ",response.data);
      setClubsObj((preValue)=>{
        return response.data
      })
      console.log("setloading(false)")
      setloading(false)
    }).then(()=>{
      clubsObj.forEach((club)=>{
        setClubs((prev)=>{
            return {
              ...prev,
              [club.name] : false,
            }

        });
      })
    }).catch(function (error) {
      console.log('/clublist',error)
    }) 
  },[]) 


  useEffect(()=>{
    console.log("depertment changed")
    try {    
      Object.entries(depertment).forEach(([key, value]) => {    
          if(value === true)
          { setinterested({})
            depertmentObj.forEach((depart)=>{
              if(depart.name == key){
                  depart.intersted.forEach((inter)=>{
                    setinterested((prev)=>{
                    return {
                      ...prev,
                      [inter] : false,
                    }
                  })
                })
              }
            })
            
          }
      })

    } catch (error) {
      console.log("depertment changed error =>",error)
    }
  },[depertment])
  const [loading, setloading] = useState(true);

  function submitHandler(e) {
    e.preventDefault();
    let depertmenName 
    Object.entries(depertment).forEach(([key, value]) => {
      if(value == true)
      {
        depertmenName=key
      }
    })
    const depertmentObject = depertmentObj.find((dep)=>{
      return dep.name === depertmenName
    })
    const depertmentId = depertmentObject._id
    console.log("depertmenName-",depertmenName,"depertmentId-",depertmentId)
    const intersted = Object.entries(interested).map(([key, value]) => {
      if(value === true)
      {
        return key
      }
    })
    console.log("intersted-",intersted)
    const clubName = Object.entries(clubs).map(([key, value]) => {
      if(value === true)
      {
        return key
      }
    })
    const clubId = clubsObj.map((club)=>{
      if(clubName.includes(club.name)){
        return club._id
      }
    })
    console.log("clubId-",clubId)

    if (password.password1 === password.password2) {
      setInputValues({ ...inputValues, password: password.password1 });
      signupAction({ ...inputValues, password: password.password1,depertmentId, interested:intersted ,clubId , image});
      console.log("uploded data object ",{ ...inputValues, password: password.password1,depertmentId, interested:intersted ,clubId , image})
    } else {
      console.log("password dose not match");
      setInputValues({ ...inputValues, password: "" });
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      
      <div className=' max-w-lg sm:w-8/12 md:w-7/12 lg:w-5/12  text-center py-5 bg-white rounded-lg p-5'>
        {loading && <Spinner/> }
        <form onSubmit={submitHandler} className=' mx-2 sm:mx-5 md:mx-10'>
          <h1 className='text-xl font-light text-gray-800 sm:text-2xl'>
            Create a new account
          </h1>
          <p className='text-sm text-gray-500'>
            Already have an account ?
            <Link href='/login'>
              <a className='text-blue-700'> Sign in</a>
            </Link>
          </p>
          <div className='mt-8'>
            <ProfileImageCropper onImageChange={setImage} />
            {/* <input
              className='w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='text'
              placeholder='username'
              required
              name='username'
              onChange={handleOnChange}
            /> */}

            <div className=' grid grid-cols-2 gap-4 mt-4'>
              <input
                className='w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
                type='text'
                placeholder='first name'
                required
                name='firstname'
                onChange={handleOnChange}
              />
              <input
                className='w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
                type='text'
                placeholder='last name'
                name='lastname'
                onChange={handleOnChange}
              />
            </div>

            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='text'
              placeholder='email'
              required
              name='email'
              onChange={handleOnChange}
            />
            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='password'
              placeholder='password'
              required
              minLength='6'
              name='password1'
              onChange={passwordHandleOnChange}
            />
            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='password'
              placeholder='password'
              required
              minLength='6'
              name='password2'
              onChange={passwordHandleOnChange}
            />
            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='number'
              placeholder='student id'
              required
              name='studentid'
              onChange={handleOnChange}
            />
            <div className={` text-left`}>
            <DropdownCheckBoxs type='checkbox' label='Interested Clubs' dropdownItems={clubs} editMode={true} changeState={setClubs} />
            <DropdownCheckBoxs type='radiobutton' label='depeartment' dropdownItems={depertment} editMode={true} changeState={setDepertment} />
            <DropdownCheckBoxs type='checkbox' label='Interested field' dropdownItems={interested} editMode={true} changeState={setinterested} />
            </div>

            <div className='flex w-full mt-4 mb-5'>
              <button
                type='submit'
                className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


export default connect(null, { signupAction })(Signup);
