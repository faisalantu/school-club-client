import { connect } from 'react-redux'
import SideBar from '../components/navBar/sideBar'
import TopNavbar from "../components/navBar/topNavbar"
import { wrapper } from '../store/store'

const Index = (props) => {
  return (
    <>
      <TopNavbar />
      <div className=" container mx-auto">
        <SideBar />        
      </div>
    </>
  )
}

// redux setup
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {

})

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(null, mapDispatchToProps)(Index)