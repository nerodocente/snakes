import React from 'react'

class Form extends React.Component {
    

    constructor () {
       super();
       this.state = { keepMe: false }
       this.handleChange = this.handleChange.bind(this)
      }

    handleChange (event) {
        const {name, type, checked} =  event.target
        this.setState ({
           [name] : checked
        })
    }   

   render() { 
      return (
       <div>
       <form id='form1' onSubmit={this.handlSubmit}>
          <fieldset>
              <legend style={{fontSize: "25px"}}><b>Sign-In</b></legend>
              <b>Login</b> <br/> 
              <input typr='text' 
                     placeholder='Input Login' 
                     required autofocus
               /> <br/> <br/>
              <b>Password</b> <br/>
              <input type='text' 
                     placeholder='Input Password' 
                     required autofocus
              /> <br/> <br/>
              <button style={{width: "120px"}}>Submit</button> <br/> 
              <input type="checkbox"
                     name="keepMe"
                     onChange={this.handleChange}
                     checked={this.state.keepMe}
              /> Keep me signed in.
              <hr/>
              <input type="submit" 
                     value="Create account" 
                     style={{width: "300px"}}
              />                          
         </fieldset>
       </form> 
       
       </div>
      )
     } 
  }

export default Form