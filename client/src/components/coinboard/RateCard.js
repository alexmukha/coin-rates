import React, { Component } from "react";

class RateCard extends Component {
  state = {};
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.getDataFunc(res => {
        //        console.log("rateCard", res);
        this.setState({ ...res.data });
      });
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="RateCard col s6">
        <div className="bitcoin" title="Bitcoin">
          <img
            src="http://www.pngall.com/wp-content/uploads/1/Bitcoin-PNG-Pic.png"
            alt="Bitcoin"
          />
          <div>
          <span>&nbsp;&nbsp;&nbsp;$</span><span className="rate" id="price-btc-cob">{this.state.btc}</span>
          </div>
        </div>
        <div className="ethereum" title="Ethereum">
          <img
            src="https://silvertoken.com/images/eth-500x500.png"
            alt="ethereum"
          />
          <div>
          <span>&nbsp;&nbsp;&nbsp;$</span><span className="rate" id="price-eth-cob">{this.state.eth}</span>
          </div>
        </div>
        <div className="XRP" title="XRP">
          <img
            src="https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/ripple_xrp_coin-512.png"
            alt="XRP"
          />
          <div>
          <span>&nbsp;&nbsp;&nbsp;$</span><span className="rate" id="price-xrp-cob">{this.state.xrp}</span>
          </div>
        </div>
        <div className="EOS" title="EOS">
          <img
            src="http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/EOS-icon.png"
            alt="EOS"
          />
          <div>
          <span>&nbsp;&nbsp;&nbsp;$</span><span className="rate" id="price-eos-cob">{this.state.eos}</span>
          </div>
        </div>
        <div className="NEO" title="NEO">
          <img
            src="https://neo-cdn.azureedge.net/images/neo-logo/1024.png"
            alt="NEO"
          />
          <div>
          <span>&nbsp;&nbsp;&nbsp;$</span><span className="rate" id="price-neo-cob">{this.state.neo}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RateCard;
