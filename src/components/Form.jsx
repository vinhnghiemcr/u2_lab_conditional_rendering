import Info from './Info'
import LandingPage from './LandingPage'
import Thanks from './Thanks'
import ErrorPage from './ErrorPage'

const Form = (props) => {

  
  
  const render = () => {
    switch (props.currentPage) {
      case 0: return <LandingPage incrementPage={props.incrementPage} />
      case 1: return <Info {...props}/>
      case 2: return props.age >= 18 ? 
      <Thanks setPageToHomepage={props.setPageToHomepage}/> 
      : 
      <ErrorPage setPageToHomepage={props.setPageToHomepage}/>
    }

  }

  return (
  <div>
    {render()}
  </div>)
}

export default Form
