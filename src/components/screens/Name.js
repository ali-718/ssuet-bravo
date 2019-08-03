import React, { Component } from "react";
import { connect } from "react-redux";

class Name extends Component {
  componentDidMount(props) {
    console.log(props);
    console.log("done");
  }

  componentWillReceiveProps(props) {
    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>ALi haider</h1>
        {console.log(this.props)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Name);
