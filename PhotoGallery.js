import React from 'react'
import photosData from './photosData'

class PhotoGallery extends React.Component {

    constructor () {
      super();
      this.state = {
        items: photosData,
        index: 0
      }
      this.handleNext = this.handleNext.bind(this)
      this.handlePrevious = this.handlePrevious .bind(this)     
    }

    componentDidMount () {
       this.setState({ index: Math.floor(Math.random() * this.state.items.length) })
    }

    handleNext () {
       this.setState(prevState => {
         if (this.state.index < this.state.items.length-1) 
             return {
               index: prevState.index + 1
             }
          
          else return { index: prevState.index }
       })
    }

    handlePrevious () {
       this.setState(prevState => {
         if (this.state.index > 0) 
             return {
               index: prevState.index - 1
             }
          
          else return { index: prevState.index }
       })
    }

    render() { 
      
      return (
         <div>
            <div id="galer">PHOTO</div> 
            <div id="foto">
              <img src={this.state.items[this.state.index].url} atl="" width="80%" height="80%" />
              <span id="foto1">{this.state.items[this.state.index].name}</span>
              <div>
                 <button onClick={this.handlePrevious} className="buttons buttonsPrev">PREVIOUS</button>
                 <button onClick={this.handleNext} className="buttons buttonsNext">NEXT</button>
              </div>
            </div>
            
            
         </div>
      )
     } 
  }

export default PhotoGallery