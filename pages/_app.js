import Layout from '../globalComponents/Layout'
import '../Assets/styles/globals.css'
import '../Assets/styles/default/modal.css'

import '../Assets/styles/materialdesignicons.min.css'
import { Provider } from 'react-redux'
import store from '../Store'
import { Modal } from '../globalComponents/Modal'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Layout>
      <Modal />
      <Component {...pageProps} />
    </Layout>

  </Provider>

}

export default MyApp
