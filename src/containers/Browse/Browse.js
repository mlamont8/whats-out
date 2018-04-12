import React from "react";

class Browse extends React.Component {
  render() {
    console.log(this.props.match.url);
    return (
      <div>
        <h1>Browse</h1>
        <h2>{this.props.match.url}</h2>
      </div>
    );
  }
}

export default Browse;
