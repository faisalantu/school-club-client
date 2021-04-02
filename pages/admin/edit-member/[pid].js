import { useState } from "react";
import { useRouter } from "next/router";
import ContainerWrapper from "../../../components/containerWrapper";
import DropdownCheckBoxs from "../../../components/global/dropdownCheckBoxs";
import Image from "next/image";
const SelectMember = () => {
  const router = useRouter();
  const [info, setInfo] = useState({
    img: "/portrait-2.jpeg",
    fName: "Faisal",
    lName: "Antu",
    email: "hello@faisalantu.com",
    phone: "017XXXXXXXXX",
    location: "location",
    studentID: "163 XXX XXX",
    clubs: {
      CSE: true,
      EEE: false,
      English: false,
      Programming: true,
    },
  });
  const [editMode, setEditMode] = useState(true);
  // Checkbox handle
  function handleCheckbox(name) {
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        clubs: { ...prevInfo.clubs, [name]: !prevInfo.clubs[name] },
      };
    });
  }
  return (
    <div>
      <ContainerWrapper>
        <div className='px-5'>
          <div className=' flex flex-row justify-start items-center mt-2'>
            <div className='bg-white rounded-full w-44 h-44 relative overflow-hidden'>
              <Image
                src='/portrait-1.jpg'
                layout='fill'
                objectFit='cover'
              ></Image>
            </div>
            <div className=' ml-10 '>
              <h1 className=' font-semibold text-4xl py-2'>Faisal Antu</h1>
              <span className='text-xl '>ID: 163 XXX XXX</span>
            </div>
          </div>
          <div className='w-4/12 mt-5'>
            <label className='mb-2 text-lg text-grey-darkest' htmlFor=''>
              Select Role
            </label>
            <DropdownCheckBoxs
              dropdownItems={info.clubs}
              editMode={editMode}
              checkboxClickHandler={handleCheckbox}
            />
          </div>
          <div className='flex flex-row justify-center my-3'>
            <button
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
