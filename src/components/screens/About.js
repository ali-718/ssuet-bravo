import React, { Component } from "react";
import { connect } from "react-redux";
import { AddCounter } from "./../../actions/counter";
import { LoginUser } from "./../../actions/loginUser";

class About extends Component {
  state = {
    Email: "",
    Password: ""
  };

  componentWillReceiveProps(props) {
    console.log(props);
  }

  onChange = e => {
    e.preventDefault();

    const { Email, Password } = this.state;

    this.props.LoginUser(Email, Password, this.props.history);
  };

  render() {
    return (
      <div>
        <h1>About</h1>
        {console.log(this.props)}
        <p>{this.props.auth.counter}</p>
        <button onClick={() => this.props.AddCounter()}>Add 1</button>

        <form onSubmit={this.onChange}>
          <input
            type="text"
            onChange={val => this.setState({ Email: val.target.value })}
          />
          <input
            type="text"
            onChange={val => this.setState({ Password: val.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { AddCounter, LoginUser }
)(About);
