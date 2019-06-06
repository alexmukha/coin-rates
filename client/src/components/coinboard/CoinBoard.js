import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import RateCard from "./RateCard";
import { getBinPrices, getCobPrices } from "../../actions/getRates";

class CoinBoard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    // const { user } = this.props.auth;

    return (
      <div className="CodeBoard container">
        <div className="row">
          <div className="cobinhood col s6">
            {/* <img
              src="https://cdn-images-1.medium.com/max/1200/1*7Znh2Q0qlaJOtA2MUr0rPg.jpeg"
              alt="cobinhood"
              style={{ width: "100%", height: "400px" }}
            /> */}
            <RateCard getDataFunc={getCobPrices} />
          </div>
          <div className="binance col s6">
            {/* <img
              src="https://siliconangle.com/wp-content/blogs.dir/1/files/2018/03/binance.jpg"
              alt="binance"
              style={{ width: "100%", height: "400px" }}
            /> */}
            <RateCard getDataFunc={getBinPrices} />
          </div>
        </div>
{/*         
        <div className="row">
          <RateCard getDataFunc={getCobPrices} />
          <RateCard getDataFunc={getBinPrices} />
        </div> */}

      </div>
    );
  }
}

CoinBoard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(CoinBoard);
