import React from "react";
import { connect } from "react-redux";
import { browseFetch } from "../../actions";

class Browse extends React.Component {
  componentDidMount() {
    browseFetch(this.props.match.params.type);
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

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  browseFetch: media => {
    dispatch(browseFetch(media));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
