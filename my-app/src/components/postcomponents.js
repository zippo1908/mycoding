import React from 'react';
import { connect } from 'react-redux'
import {userFetch} from '../actions/actions'
import axios from 'axios';


class postcomponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {id: ''};
      }
      componentDidMount(){
        axios.get('http://localhost:3001/endpoint.com/all_tracks').then(res =>{
            console.log(res)
            this.setState(
                {
                    posts: res.data
                }
            )
        })
    }
    
    handleOnChange(event){
       this.setState(
           {
               id: event.target.value
           }
       )       
      }

    handleSubmit = event =>{
        console.log(this.state)
        this.props.userFetch(this.state)
        event.preventDefault();
        
    }

    render() {
        const{id} = this.state;
        console.log(this.props)
        return (
           <div>
            <form onSubmit= {this.handleSubmit}>
                <div>Search Id</div>
                <input 
                type="text" 
                value = {id} 
                onChange = {(e)=>this.handleOnChange(e)}
                />
                <button type = "submit">Search</button>
            </form>
            
            <div>
                <h1>Here is the returning</h1>
                <h2>{this.props.data}</h2>
            </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        data: state.data
    }

  };

const mapDispatchToProps = dispatch => ({
    userFetch: data => {
        userFetch(data)(dispatch)},
  })
  

export default connect(mapStateToProps,mapDispatchToProps)(postcomponent)