const Info = (props) => {

  return (
    <div className="info">
      <h1>Information Form</h1>
      <h4>Please enter your info below...</h4>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your
           Name"
          value={props.name}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={props.email}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="age"
          placeholder="Your Age"
          value={props.age}
          onChange={props.handleChange}
        />
      </form>
      <br></br>
      <div>
        <button onClick={props.setPageToHomepage}>Back</button>
        <button onClick={props.incrementPage} disabled={props.name && props.email && props.age ? false : true}>Next</button>
      </div>
    </div>
  )
}

export default Info
