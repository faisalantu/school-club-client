import { connect } from "react-redux";
import InputBox from "../../components/global/inputbox";
import DraftEditor from "../../components/global/textEditor";
import ContainerWrapper from "../../components/containerWrapper";
import { wrapper } from "../../store/store";
import TagInput from "../../components/global/tagInput";
const setting = (props) => {
  //tag data from tag component
  const getTags = tags => console.log(tags)
  return (
    <>
      <ContainerWrapper>
        <div className='w-11/12 mx-auto'>
          <h1 className='font-bold text-3xl mb-3'>Add Post</h1>
          <div>
            <InputBox label='Post Title' placeholder='your title here' />
            <InputBox
              label='Import Photo'
              placeholder='your title here'
              type='file'
            />
          </div>
          <h2 className='text-lg mb-3'>Write Something</h2>
          <div className='border-2 border-gray-300 rounded p-4'>
            <DraftEditor />
          </div>
          <TagInput getTags={getTags}/>
          <div>
            <input
              type='checkbox'
              id='vehicle1'
              name='vehicle1'
              value='Bike'
            ></input>
            <label htmlFor='vehicle1'> Publish</label>
          </div>
        </div>

        <div className='flex flex-row justify-center my-3'>
          <button
            type='submit'
            className='border-2 rounded-lg bg-gray-200 border-yellow-400 cursor-pointer px-5 py-2'
          >
            Save Change
          </button>
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

export default connect(null, mapDispatchToProps)(setting);
