import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ManeLine from './ManeLine'
import Publications from './Publications'
import PhotoGallery from './PhotoGallery'
import VideoGallery from './VideoGallery'
import Form from './Form'

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
       </div> 
     )
  }

export default App