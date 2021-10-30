import ContainerWrapper from "../../components/containerWrapper";
import PopupMultipleSelect from "../../components/global/popupMultipleSelect";
import PopupSingleSelect from "../../components/global/popupSingleSelect";
import InputBox from "../../components/global/inputbox";
import { useState, useEffect } from "react";
import axios from "../../axios";
import toast from "react-hot-toast";
import ProfileImageCropper from "../../components/profileImageCropper/imageUpload";

const setting = (props) => {
  const [isFetching, setIsFetching] = useState(true);
  const [fetchedImage, setFetchedImage] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [userClubId, setUserClubId] = useState(null);
  const [userDepertment, setUserDepertment] = useState(null);
  const [interstedClubsInputData, setInterstedClubsInputData] = useState(null);
  const [depertmentInputData, setDepertmentInputData] = useState(null);

  useEffect(() => {
    //fetching 🤹‍♂️ user data ....
    async function fetchUserData() {
      try {
        let response = await axios.get("/users");
        setFirstName(response.data.firstname);
        setLastName(response.data.lastname);
        setEmail(response.data.email);
        setStudentId(response.data.studentid);
        setUserClubId(response.data.clubId);
        setUserDepertment(response.data.depertmentId);
        setFetchedImage(response.data.imageObj.url);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUserData();
    setIsFetching(false);
  }, []);

  // Fetching all clubs //
  useEffect(() => {
    async function fetchAllClubs() {
      if (userClubId !== null) {
        try {
          const res = await axios.get("/clublist");
          if (res.data.length) {
            let tempData = [];
            res.data.map((item, i) => {
              tempData.push({
                name: `${item.name}`,
                id: `${item._id}`,
                isChecked: false,
              });
              userClubId.map((userClub) => {
                if (tempData[i].id === userClub) {
                  tempData[i].isChecked = true;
                }
              });
            });
            setInterstedClubsInputData(tempData);
            tempData = [];
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    fetchAllClubs();
  }, [userClubId]);

  // Fetching All depertments //
  useEffect(() => {
    async function fetchAllClubs() {
      if (userDepertment !== null) {
        try {
          const res = await axios.get("/depertment");
          if (res.data.length) {
            let tempData = [];
            res.data.map((item, i) => {
              tempData.push({
                name: `${item.name}`,
                id: `${item._id}`,
                isChecked: false,
              });

              if (tempData[i].id === userDepertment) {
                tempData[i].isChecked = true;
              }
            });
            setDepertmentInputData(tempData);
            tempData = [];
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    fetchAllClubs();
  }, [userDepertment]);

  const submitData = async (e) => {
    e.preventDefault();
    //getting depertment id
    let tempDepertmentData;
    depertmentInputData.map((item) => {
      if (item.isChecked) {
        tempDepertmentData = item.id;
      }
    });
    //getting Intersted club list array
    let tempInterstedClubId = [];

    interstedClubsInputData.map((item) => {
      if (item.isChecked) {
        tempInterstedClubId.push(item.id);
      }
    });
    //getting user data
    let finalData = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      studentid: studentId,
      depertmentId: tempDepertmentData,
      clubId: tempInterstedClubId,
      image: newImage,
    };

    try {
      const res = await axios.put("/users", finalData);
      toast.success("Successfully changed your data");
    } catch (err) {
      toast.error("Something went wrong please try again");
    }
  };

  return (
    <>
      <ContainerWrapper>
        {isFetching != true &&
        interstedClubsInputData !== null &&
        depertmentInputData !== null ? (
          <div className='px-5'>
            <form onSubmit={submitData}>
              <div className=' flex flex-row justify-start items-center  mb-1'>
                <ProfileImageCropper
                  onImageChange={setNewImage}
                  imageUrl={fetchedImage}
                />
                <div className=' ml-10 '>
                  <h1 className=' font-semibold text-4xl py-2'>
                    {firstName} {lastName}
                  </h1>
                </div>
              </div>
              <div className='grid grid-flow-row grid-cols-2 gap-5 md:grid-cols-2 sm:grid-cols-1'>
                <div className='lg:w-5/6'>
                  <InputBox
                    label='First Name'
                    type='text'
                    placeholder='First Name'
                    name='firstname'
                    value={firstName}
                    ChangeHandel={setFirstName}
                  />
                </div>
                <div className='lg:w-5/6'>
                  <InputBox
                    label='Last Name'
                    type='text'
                    placeholder='Last Name'
                    name='lastname'
                    value={lastName}
                    ChangeHandel={setLastName}
                  />
                </div>
                <div className='lg:w-5/6'>
                  <InputBox
                    label='Email address'
                    type='email'
                    placeholder='Enter email'
                    name='email'
                    value={email}
                    ChangeHandel={setEmail}
                  />
                </div>
                <div className='lg:w-5/6'>
                  <InputBox
                    label='Student ID'
                    type='text'
                    placeholder='Student ID'
                    name='studentid'
                    value={studentId}
                    ChangeHandel={setStudentId}
                  />
                </div>
                <div className='lg:w-5/6'>
                  <PopupMultipleSelect
                    data={interstedClubsInputData}
                    onChange={setInterstedClubsInputData}
                    title='Change your Intersted clubs'
                  />
                </div>
                <div className='lg:w-5/6'>
                  <PopupSingleSelect
                    data={depertmentInputData}
                    onChange={setDepertmentInputData}
                    title='Change your depertment'
                  />
                </div>
              </div>
              <div className='  flex flex-row justify-center mt-8'>
                <button
                  type='submit'
                  className='border-2 rounded-lg bg-gray-200 border-yellow-400 cursor-pointer px-10 py-2.5'
                >
                  Save Change
                </button>
              </div>
            </form>
          </div>
        ) : (
          "loading..."
        )}
      </ContainerWrapper>
    </>
  );
};

export default setting;
