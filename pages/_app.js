import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import IsAuthinticated from '../components/isAuthinticated';

const WrappedApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)

  console.log("_app runed")

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <IsAuthinticated {...pageProps}/>
    </Provider>
  )
}

export default WrappedApp
