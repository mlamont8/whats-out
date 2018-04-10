import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchFrontData } from "../../actions";
import FrontHeader from "../../components/FrontHeader/FrontHeader";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";

class Home extends React.Component {
  componentDidMount() {
    this.props.data();
  }

  render() {
    const backgroundUrl = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w1280${
        this.props.path.url
      })`
    };
    return this.props.path.isLoading === true ? (
      <Loader />
    ) : (
      <div>
        <div className="frontBackground" style={backgroundUrl}>
          <FrontHeader />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  path: state.front
});

const mapDispatchToProps = dispatch => ({
  data: () => {
    dispatch(fetchFrontData());
  }
});

Home.propTypes = {
  path: PropTypes.shape({ isLoading: PropTypes.bool, url: PropTypes.string })
    .isRequired,
  data: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
