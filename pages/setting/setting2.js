import ContainerWrapper from "../../components/containerWrapper";
import PopupMultipleSelect from "../../components/global/popupMultipleSelect";
import PopupSingleSelect from "../../components/global/popupSingleSelect"
import InputBox from "../../components/global/inputbox";
import { useState, useEffect } from "react";
import axios from "../../axios";

const setting = (props) => {
  const [isFetching, setIsFetching] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([
    {
      name: "cse club",
      isChecked: false,
    },
    {
      name: "eee club",
      isChecked: true,
    },
  ]);
  const [data2, setData2] = useState([
    {
      name: "cse club",
      isChecked: false,
    },
    {
      name: "eee club",
      isChecked: true,
    },
    {
      name: "pp club",
      isChecked: false,
    },
  ]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        let response = await axios.get("/users");
        setFirstName(response.data.firstname);
        setLastName(response.data.lastname);
        setEmail(response.data.email);
        setStudentId(response.data.studentid);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUserData();
    setIsFetching(false);
  }, []);

  return (
    <>
      <ContainerWrapper>
        {isFetching != true ? (
          <div className='px-5'>
            <form action=''>
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
                    data={data}
                    onChange={setData}
                    title='Select Intersted clubs'
                  />
                </div>
                <div className='lg:w-5/6'>
                  <PopupSingleSelect
                    data={data2}
                    onChange={setData2}
                    title='Select Intersted clubs'
                  />
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <button
                  type='submit'
                  className='border-yellow-400 border-2 rounded py-0.5 px-2 cursor-pointer hover:bg-gray-200'
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
