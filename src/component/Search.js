import React from 'react';
import axios from 'axios'
export default class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = { term: '' };
    }
    myChangeHandler = (event) => {
      this.setState({term: event.target.value});
    }

     search = async() => {
        try {
        const response =    await axios.get('https://superheroapi.com/api/10225980875137299/search/' + this.state.term)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    render() {
      return (
       <div> 
        <p>Search hero:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />

        <button onClick={this.search}> Search </button>
        
        </div>
      );
    }
  }
  
  