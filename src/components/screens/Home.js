import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <p>{this.props.auth.counter}</p>
        {console.log(this.props)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
