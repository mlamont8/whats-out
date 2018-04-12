import React from "react";
import { connect } from "react-redux";
import { browseType } from "../../actions";

class Browse extends React.Component {

  componentDidMount(){
    browseType(this.props.match.params.type);
  }
  render() {
    return (
      <div>
        <h1>Browse</h1>
        <h2>{this.props.match.params.type}</h2>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  browseType: (media) => {
    dispatch(browseType(media))
  }
})

export default connect(null, mapDispatchToProps)(Browse);
