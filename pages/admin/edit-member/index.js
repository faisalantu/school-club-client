import { connect } from "react-redux";
import Link from "next/link";
import ContainerWrapper from "../../../components/containerWrapper";
import { wrapper } from "../../../store/store";
import InputBox from "../../../components/global/inputbox";
import PhotoCard from "../../../components/global/photoCard";
const editMember = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className='w-11/12 mx-auto'>
          <div className='flex items-center'>
            <div className='flex-1 mr-2'>
              <InputBox label='Search User' placeholder=' input user name' />
            </div>
            <button
              type='submit'
              className='border-2 rounded-lg border-yellow-400 cursor-pointer px-5 py-1.5 focus:outline-none hover:bg-gray-200'
            >
              Search
            </button>
          </div>
          <div className='flex flex-wrap gap-9'>
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

// redux setup
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(editMember);
