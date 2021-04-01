import { useState } from "react";
import { useRouter } from "next/router";
import ContainerWrapper from "../../../components/containerWrapper";
import CheckBox from "../../../components/setting/checkBox";
import Image from "next/image";
const SelectMember = () => {

  const router = useRouter();

  return (
    <div>
      <ContainerWrapper>
        <div>
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
          <div>

          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default SelectMember;
