import { connect } from "react-redux";
import SideBar from "../components/navBar/sideBar";
import TopNavbar from "../components/navBar/topNavbar";
import ContainerWrapper from "../components/containerWrapper";
import { wrapper } from "../store/store";

const Index = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className=''>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quia dolore natus dignissimos recusandae at quod praesentium
            distinctio, similique, doloremque libero. Molestiae dignissimos
            rerum deserunt accusantium blanditiis obcaecati quae magnam,
            repellendus maxime tempore minus, quis nam mollitia alias velit
            quidem aliquam id illo. Illum, consequuntur.
          </p>
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

export default connect(null, mapDispatchToProps)(Index);
