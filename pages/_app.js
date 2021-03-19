import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import { wrapper } from '../store/store'

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)
