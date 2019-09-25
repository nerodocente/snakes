import React, { Component } from 'react'
import wikisData from './wikisData'
import { connect } from 'react-redux'
import { fetchData } from './reduxComponents/actions'

class  WikiInfoRedux extends Component {

    componentDidMount() {
        this.props.fetchDatas(wikisData);
    }

    render() {
      if(this.props.error) {
         return <p id="wiki">Error</p>
      }

      if(this.props.isLoading) {
         return <p id="wiki">...Loading</p>
      }

      return (
        <div>
           <div id="wiki">WIKIPEDIA</div>
           <div id="wikiObj">
              <object width='300' height='400'
                  data ="https://en.wikipedia.org/wiki/Snake">
              </object>
           </div>
        </div>
      )

    }
}

const mapStateToProps = (state) => {
   return {
     items: state.items,
     error: state.hasErrored,
     isLoading: state.itemsIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
   return {
     fetchDatas: (url) => dispatch(fetchData(url))
   }  
}


export default connect(mapStateToProps, mapDispatchToProps)(WikiInfoRedux)