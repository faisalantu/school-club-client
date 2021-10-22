import ContainerWrapper from "../../../components/containerWrapper";
import PostCard from "../../../components/global/postCard";
import { API_URL } from "../../../config";
import Image from "next/image";
import axios from "../../../axios";
import { useEffect, useState } from "react";

const Index = ({ pid }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get(`/users/${pid}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <ContainerWrapper>
        {user ? (
          <>
            <div className=' flex flex-col items-center text-center mt-10'>
              <div className='bg-white rounded-full w-44 h-44 relative overflow-hidden'>
                {user.imageObj ? (
                  <Image
                    src={
                      user.imageObj.url !== undefined
                        ? user.imageObj.url
                        : "/portrait-1.jpg"
                    }
                    layout='fill'
                    objectFit='cover'
                  ></Image>
                ) : (
                  ""
                )}
              </div>
              <div className="mt-5">
                <h1 className=' font-semibold text-4xl py-2'>{`${user.firstname} ${user.lastname}`}</h1>
                <p className='text-xl mt-2'>Student ID: {user.studentid}</p>
                <p className='text-xl mt-2'>Email: {user.email && user.email}</p>
                <p className='text-xl mt-2'>Phone: 018XXXXXXX</p>
                <p className='text-xl mt-2'>Facebook: facebook.com/username</p>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </ContainerWrapper>
    </>
  );
};

export async function getServerSideProps({ params: { pid } }) {
  try {
    return {
      props: {
        pid: pid,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}

export default Index;
