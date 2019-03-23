import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Searchbar from './components/Searchbar';
import VideoList from "./components/VideoList.js";
import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyAB_CN30ouaEgNLLx4FgVhOz8c1wBjJedk";



// YTSearch({key: API_KEY, term:"elonmusk"},function(data){
//     var data = data;
//     console.log(data);
//     console.log(data[0].id.videoId);
// })



class App extends Component {


    constructor(props){
        super(props);
        this.state = {
            videos : []
        };

    YTSearch({key: API_KEY, term:"elonmusk"},(videos)=>{
         this.setState({videos})
        })
      }

  render() {
      
    return (
      <div>
          
          <Searchbar />
          <VideoList videos={this.state.videos}>
		  </VideoList>
         
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
