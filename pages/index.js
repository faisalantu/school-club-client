import { connect } from 'react-redux'
import SideBar from '../components/navBar/sideBar'
import { wrapper } from '../store/store'

const Index = (props) => {
  return(
    <div>
      <SideBar/>
    </div>
  )
}

// redux setup
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  
})

const mapDispatchToProps = (dispatch) => {
  return { }
}

export default connect(null, mapDispatchToProps)(Index)