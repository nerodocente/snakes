import React from 'react'
import publicationsData from './publicationsData'

class Publications extends React.Component {

    constructor () {
      super();
      this.state = {
        items: publicationsData,
        index: 0
       }
     }

     renderPublic () {
        return this.state.items.map((data, index) => {
            const {id, title, txt} = data
            return (
               <div id="pub" key={id}>
                 <p id="pubTitle">{title}</p>
                 <p>{txt}</p>
               </div>
            )
        })
     }

     render() { 
      return (
       <div id="public">
              {this.renderPublic ()}
       </div>
      )
     } 
  }

export default Publications