import React from 'react';
import { connect } from 'react-redux'
import {userFetch} from '../actions/actions'
import axios from 'axios';

class getcomponent extends React.Component {
    state = {
        id: -1,
        posts: [ ],
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

    handleOnclick = (event,i) =>{
        const selectedKey = (Object.keys(this.state.posts)[i])
        this.props.userFetch(selectedKey)
        event.preventDefault();
        
    }

    render() {
        const {posts} = this.state;
        const content = []        
        for(let i = 0; i<Object.keys(posts).length;i++){
          content.push(
              <div>
                  <div>
                     <h4 onClick = {((e)=>this.handleOnclick(e,i))} >{Object.values(posts)[i].track_title}</h4>
                  </div>
                  <div>
                      <label>Artist:</label>{Object.values(posts)[i].artist}
                  </div>
              </div>
          )
        }
        
        return (
            <div>
                <div>{content}</div>
                <h5>Selected Options</h5>
                <h4>ID:{this.props.data}</h4>
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
        console.log("this is")
        console.log(data)
        userFetch(data)(dispatch)},
  })
  

export default connect(mapStateToProps,mapDispatchToProps)(getcomponent)