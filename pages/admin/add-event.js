import { connect } from "react-redux";
import ContainerWrapper from "../../components/containerWrapper";
import InputBox from "../../components/global/inputbox";
import { wrapper } from "../../store/store";
const setting = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className=' w-10/12 mx-auto'>
          <h1 className='font-bold text-3xl mb-3'>Add Event</h1>
          <InputBox label='Event Title' placeholder='title' />
          <InputBox
            label='Location'
            type='text'
            placeholder='input your location'
          />
          <div className=' grid grid-cols-2 grid-col-2 gap-4'>
            <InputBox label='Tickets' type='text' placeholder='eg: 5' />
            <InputBox label='Fee' type='text' placeholder='eg: 100 taka' />
            <InputBox
              label='Time'
              type='text'
              placeholder='eg: 5:00 pm - 6:30 pm'
            />
          </div>
          <InputBox
            label='Email'
            type='text'
            placeholder='eg: email@gmail.com'
          />
          <InputBox
            label='Contact Number'
            type='text'
            placeholder='+880 17X XXXX XX'
          />
          <div>
            <input
              type='checkbox'
              id='vehicle1'
              name='vehicle1'
              value='Bike'
            ></input>
            <label htmlFor='vehicle1'> Publish</label>
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
    </>
  );
};

// redux setup
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(setting);
