import React, { Component } from 'react';

class API extends Component {
  render() {
    return (
      <div className="API">

      <textarea name="paragraph_text" cols="50" rows="10"></textarea>
      <p></p>
	  <button type="button" onclick="alert('Hello world!')">Translate</button>


      </div>
    );
  }
}

export default API;