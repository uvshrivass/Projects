import React, { Component } from 'react';

class Searchbar extends Component {

constructor(props){
    super(props);
    this.state = {
        title : "The Entered Text is :",
        keywords : ""
    }

}

inputChangeHandler(event){
        this.setState({
            keywords : event.target.value
        })
}
  
render() {

    return (
      <div>
          
          <input type="text" onChange={this.inputChangeHandler.bind(this)} />
            <div> {this.state.title}</div>
		    <div> {this.state.keywords} </div>
         
      </div>
    );
  }
}

export default Searchbar;
