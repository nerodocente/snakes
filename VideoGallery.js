import React, { useState, useEffect } from 'react'
import videosData from './videosData'

function VideoGallery () {

    const [index, setIndex] = useState(0);
    const [items, setItems] = useState(videosData);

    useEffect (()=> {
       index: Math.floor(Math.random() * items.length)    
    })

    function handleNext () {
       
         if (index < items.length-1) 
             setIndex(index + 1)
          
          else return index
    }

    function handlePrevious () {
       
         if (index > 0) 
             return setIndex(index - 1)
          
          else return index
    }

      return (
         <div>
            <div id="vid">VIDEO</div> 
            <div id="vids" >
              <object width='270' height='180'
                   data={items[index].url}>
              </object>
              <div>
                 <button onClick={handlePrevious} className="buttons buttonsPrev">PREVIOUS</button>
                 <button onClick={handleNext} className="buttons buttonsNext">NEXT</button>
              </div>
            </div>
            
            
         </div>
      )
     
  }

export default VideoGallery