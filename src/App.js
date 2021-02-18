import './styles/App.css'
import React, { Component } from 'react'
import Form from './components/Form'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 0,
      name: '',
      age: '',
      email: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  incrementPage = () => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }))
  }

  resetForm = () => {
    this.setState({ name: '', email: '', age: '' })
  }

  resetPage = () => {
    this.setState({ currentPage: 0 })
    this.resetForm()
  }

  render() {
    return (
      <div className="App">
        <Form
          {...this.state}
          incrementPage={this.incrementPage}
          handleChange={this.handleChange}
          resetPage={this.resetPage}
        />
      </div>
    )
  }
}