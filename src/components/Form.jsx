import React, { Component } from 'react'
import ErrorPage from './ErrorPage'
import LandingPage from './LandingPage'
import Info from './Info'
import Thanks from './Thanks'

export default class Form extends Component {
  render() {
    console.log(this.props)
    const {
      currentPage,
      incrementPage,
      name,
      age,
      email,
      handleChange,
      resetPage
    } = this.props
    
    let formProps = {
      name,
      age,
      email
    }

    switch (this.props.currentPage) {
      case 0:
        return <LandingPage incrementPage={this.props.incrementPage} />
      case 1:
        return (
          <div>
            <Info
              {...formProps}
              handleChange={handleChange}
              incrementPage={incrementPage}
              resetPage={resetPage}
            />
          </div>
        )
      case 2:
        return age && name && email && age < 18 ? (
          <ErrorPage resetPage={resetPage} />
        ) : (
          <Thanks resetPage={resetPage} />
        )
      default:
        return <LandingPage />
    }
  }
}
