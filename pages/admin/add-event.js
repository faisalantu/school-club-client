import { connect } from "react-redux";
import ContainerWrapper from "../../components/containerWrapper";
import InputBox from "../../components/setting/inputbox";
import { wrapper } from "../../store/store";
const setting = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div>
          <InputBox label='Event Title' placeholder='title' />
          <InputBox
            label='Location'
            type='text'
            placeholder='input your location'
          />
          <div className=' grid grid-cols-2 grid-col-2 gap-4'>
            <InputBox label='Event Title' type='text' placeholder='title' />
            <InputBox
              label='Location'
              type='text'
              placeholder='input your location'
            />
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
