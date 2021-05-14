import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import IsAuthinticated from '../components/IsAuthinticated';
import AuthWrapper from '../components/authWrapper';
const WrappedApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)

  console.log("_app runes","client",(typeof window ))

  return (
    <Provider store={store}>
      <IsAuthinticated {...pageProps}/>
      <AuthWrapper>
        <Component {...pageProps} /> 
      </AuthWrapper>
    </Provider>
  )
}

export default WrappedApp
