import React, { Component } from 'react'

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <h1>Welcome to Our Page!</h1>
        <h4>Please sign up below...</h4>
        <button onClick={this.props.incrementPage}>Sign Up</button>
      </div>
    )
  }
}