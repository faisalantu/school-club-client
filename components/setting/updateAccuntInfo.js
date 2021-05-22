import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import axios from "../../axios";
import { MdKeyboardArrowRight } from "react-icons/md";
import DropdownCheckBoxs from "../global/dropdownCheckBoxs";
import ProfileImageCropper from "../profileImageCropper/imageUpload";
import Inputbox from "./inputbox";
import Spinner from "../global/Spinner";
export default function UpdateAccuntInfo(props) {
  const [image, setImage] = useState();

  const [editMode, setEditMode] = useState(true);

  const [info, setInfo] = useState();

  // input handle
  const [isLoading, setIsLoading] = useState(true);
  const [userObj, setUserObj] = useState({});
  const [clubsObj, setClubsObj] = useState([]);
  const [clubs, setClubs] = useState({});
  const [depertment, setDepertment] = useState({});
  //const [depertmentVisibility, setDepertmentVisibility] = useState(false);
  const [depertmentObj, setdepertmentObj] = useState([]);
  const [interesteds, setinterested] = useState({});
  useEffect(() => {
    axios
      .get("/depertment")
      .then(function (response) {
        setdepertmentObj((preValue) => {
          return response.data;
        });
      })
      .catch(function (error) {
        console.log("/depertment", error);
      });

    axios
      .get("/clublist")
      .then(function (response) {
        setClubsObj((preValue) => {
          return response.data;
        });

        //setloading(false);
      })
      .catch(function (error) {
        console.log("/clublist", error);
      });
    axios
      .get("/users")
      .then(function (response) {
        setUserObj((preValue) => {
          return response.data;
        });
      })
      .catch(function (error) {
        console.log("/users", error);
      });
  }, []);
  const isMount = useRef(false);
  useEffect(async () => {
    if (isMount.current) {
      // console.log("userObj=>", userObj)
      try {
        const depertmentOb = await axios.get("/depertment");
        //console.log(depertmentOb.data);
        depertmentOb.data.forEach((depart) => {
          //console.log(" depertmentObj.forEach((depart)=>{}");
          setDepertment((prev) => {
            if (depart._id === userObj.depertmentId) {
              return {
                ...prev,
                [depart.name]: true,
              };
            } else {
              return {
                ...prev,
                [depart.name]: false,
              };
            }
          });

          if (depart._id === userObj.depertmentId) {
            depart.intersted.forEach((inter) => {
              setinterested((prev) => {
                if (userObj.interested.includes(inter)) {
                  return {
                    ...prev,
                    [inter]: true,
                  };
                } else {
                  return {
                    ...prev,
                    [inter]: false,
                  };
                }
              });
            });
          }
        });
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }

      // try {
      //     const clubOb = await axios.get('/clublist');
      //     console.log('club==clubOb==',clubOb.data)
      //     clubOb.data.forEach((club) => {
      //         setClubs((prev) => {
      //             console.log('club================', userObj.clubId)
      //             console.log('club====userObj============', userObj)
      //             if (userObj.clubId.includes(club._id)) {
      //                 return {
      //                     ...prev,
      //                     [club.name]: true,
      //                 }
      //             }
      //             else {
      //                 return {
      //                     ...prev,
      //                     [club.name]: false,
      //                 }
      //             }

      //         });
      //     });
      // } catch (error) {
      //     console.error(error);
      // }
      try {
        clubsObj.forEach((club) => {
          setClubs((prev) => {
            // console.log('club================', userObj.clubId)
            // console.log('club====userObj============', userObj)
            if (userObj.clubId.includes(club._id)) {
              return {
                ...prev,
                [club.name]: true,
              };
            } else {
              return {
                ...prev,
                [club.name]: false,
              };
            }
          });
        });
      } catch (error) {
        console.error(error);
      }

      setInfo((prev) => {
        return {
          ...prev,
          img: userObj.imageObj,
          fName: userObj.firstname,
          lName: userObj.lastname,
          email: userObj.email,
          phone: "123456",
          location: "12456",
          studentID: userObj.studentid,
        };
      });
      //console.log('==userObj=', userObj)
      setIsLoading(false);
    } else {
      isMount.current = true;
    }
  }, [userObj]);
  useEffect(() => {
    //console.log("depertment changed")
    try {
      Object.entries(depertment).forEach(([key, value]) => {
        if (value === true) {
          setinterested({});
          depertmentObj.forEach((depart) => {
            if (depart.name == key) {
              depart.intersted.forEach((inter) => {
                setinterested((prev) => {
                  if (userObj.interested.includes(inter)) {
                    return {
                      ...prev,
                      [inter]: true,
                    };
                  } else {
                    return {
                      ...prev,
                      [inter]: false,
                    };
                  }
                });
              });
            }
          });
        }
      });
    } catch (error) {
      console.log("depertment changed error =>", error);
    }
  }, [depertment]);

  function handleInputUpdate(event) {
    const { name, value } = event.target;
    //console.log(info.img)
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
    //console.log(value);
  }
  function handleSubmit(event) {
    // form submition logic...
    event.preventDefault();

    // extract depertment
    let depertmenName;
    Object.entries(depertment).forEach(([key, value]) => {
      if (value == true) {
        depertmenName = key;
      }
    });
    const depertmentObject = depertmentObj.find((dep) => {
      return dep.name === depertmenName;
    });
    const depertmentId = depertmentObject._id;
    // extract interested
    //console.log("depertmenName-", depertmenName, "depertmentId-", depertmentId)
    const interested = [];
    Object.entries(interesteds).forEach(([key, value]) => {
      if (value === true) {
        interested.push(key);
      }
    });
    //console.log("interesteds-", interested)
    const clubName = [];
    Object.entries(clubs).forEach(([key, value]) => {
      if (value === true) {
        clubName.push(key);
      }
    });
    // extract clubIds
    const clubId = [];
    clubsObj.forEach((club) => {
      if (clubName.includes(club.name)) {
        clubId.push(club._id);
      }
    });
    // creat user data object
    const updateObject = {
      image: image,
      firstname: info.fName,
      lastname: info.lName,
      email: info.email,
      studentid: info.studentID,
      interested,
      clubId,
      depertmentId,
    };
    // console.log('updateObject=>',updateObject)
    // send put request to update
    axios
      .put("/users", updateObject)
      .then(function (response) {
        //console.log("/users @put update",response)
      })
      .catch(function (error) {
        console.log("/users @put", error);
      });
    // setEditMode(false);
  }
  function imageHandler(event) {
    const image = event.target.files[0];
    console.log("img", image);
    const reader = new FileReader();
    if (image) {
      reader.onloadend = () => {
        if (reader.readyState === 2) {
          setInfo((prevInfo) => {
            return {
              ...prevInfo,
              img: reader.result,
            };
          });
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-row justify-start items-center  mb-1">
            {/* <div className='bg-white rounded-full w-44 h-44 relative overflow-hidden cursor-pointer'>
                    {editMode && <div className=' bg-transparent text-indigo-50 hover:bg-yellow-300 flex justify-center items-center z-30 absolute bottom-0 left-0 right-0  px-3 h-full ' onClick={imageUploder}>
                        <input hidden='hidden' type="file" id="file" ref={fileInput} onChange={imageHandler} />
                        <VscAccount className='text-md p-0 m-0 mr-1' />
                        <span className=" font-semibold">Uplode Image</span>
                    </div>}
                    <Image src={info.img} layout='fill' objectFit="cover" ></Image>

                </div> */}
            <ProfileImageCropper
              onImageChange={setImage}
              imageUrl={"portrait-1.jpg"}
            />
            <div className=" ml-10 ">
              <h1 className=" font-semibold text-4xl py-2">
                {info.fName} {info.lName}
              </h1>
              <span className="text-xl ">{info.location}</span>
            </div>
          </div>
          <div className="flex items-center mb-5">
            <h1 className="text-xl">Account Information </h1>
            <MdKeyboardArrowRight className=" text-xl mt-0.5" />
            {
              !editMode ? (
                <div
                  className="border-yellow-400 border-2 rounded py-0.5 px-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setEditMode(!editMode);
                  }}
                >
                  Edit
                </div>
              ) : (
                <button
                  type="submit"
                  className="border-yellow-400 border-2 rounded py-0.5 px-2 cursor-pointer hover:bg-gray-200"
                >
                  Save Change
                </button>
              ) //onClick={handleSubmit}
            }
          </div>

          <div className="grid grid-flow-row grid-cols-2 gap-5 md:grid-cols-2 sm:grid-cols-1">
            <div className="lg:w-5/6">
              <Inputbox
                label="First Name"
                type="text"
                placeholder="First Name"
                name="fName"
                value={info.fName}
                ChangeHandel={handleInputUpdate}
                editMode={!editMode}
              />
            </div>
            <div className="lg:w-5/6">
              <Inputbox
                label="Last Name"
                type="text"
                placeholder="Last Name"
                name="lName"
                value={info.lName}
                ChangeHandel={handleInputUpdate}
                editMode={!editMode}
              />
            </div>
            <div className="lg:w-5/6">
              <Inputbox
                label="Email address"
                type="email"
                placeholder="Enter email"
                name="email"
                value={info.email}
                ChangeHandel={handleInputUpdate}
                editMode={!editMode}
              />
            </div>
            <div className="lg:w-5/6">
              <Inputbox
                label="Phone Number"
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={info.phone}
                ChangeHandel={handleInputUpdate}
                editMode={!editMode}
              />
            </div>
            <div className="lg:w-5/6">
              <Inputbox
                label="Location"
                type="text"
                placeholder="Location"
                name="location"
                value={info.location}
                ChangeHandel={handleInputUpdate}
                editMode={!editMode}
              />
            </div>
            <div className="lg:w-5/6">
              <Inputbox
                label="Student ID"
                type="text"
                placeholder="Student ID"
                name="studentID"
                value={info.studentID}
                ChangeHandel={handleInputUpdate}
                editMode={!editMode}
              />
            </div>
            <div className="lg:w-5/6">
              <DropdownCheckBoxs
                label="Interested Clubs"
                dropdownItems={clubs}
                editMode={editMode}
                changeState={setClubs}
              />
            </div>
            <div className="lg:w-5/6">
              <DropdownCheckBoxs
                type="radiobutton"
                label="depeartment"
                dropdownItems={depertment}
                editMode={true}
                changeState={setDepertment}
              />
            </div>
            <div className="lg:w-5/6">
              <DropdownCheckBoxs
                type="checkbox"
                label="Interested field"
                dropdownItems={interesteds}
                editMode={true}
                changeState={setinterested}
              />
            </div>
          </div>
        </form>
      )}
    </>
  );
}
