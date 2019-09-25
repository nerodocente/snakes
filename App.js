import React from 'react'
import { Provider } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import ManeLine from './ManeLine'
import Publications from './Publications'
import PhotoGallery from './PhotoGallery'
import VideoGallery from './VideoGallery'
import Form from './Form'
import WikiInfoRedux from './wikiInfoRedux'
import configureStore from './reduxComponents/configureStore'

  const store = configureStore()  

  function App () {
     return (
       <div>
          <Header />
          <ManeLine />
          <Publications />
          <PhotoGallery />
          <VideoGallery />
          <Form />
          <Footer />
          <Provider store={store}>
             <WikiInfoRedux/>
          </Provider>
       </div> 
     )
  }

export default App