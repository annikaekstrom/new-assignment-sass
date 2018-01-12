import React from "react"
import "./style.css"
import bild from "./front-header.jpg"

export default class Haeder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      from: "",
      to: ""
    }
  }

handleFrom = event => {
  this.setState({
    from: event.target.value
  })
}
handleTo = event => {
  this.setState({
    to: event.target.value
  })
}

// componentDidMount() {
//   if (this.props.from !== "") {
//       return this.props.to
//     }
//   }

render() {
  return (
    <div>
      <h1>
        Norwegian
      </h1>
      <div className="header" style={{ backgroundImage: `url(${bild})` }} alt="">

        <section className="container">

          <form className="main">
            <div className="input-container">
              <label htmlFor="from" className="from">
                <h4>Flyg från</h4>
                <input type="text" id="from" placeholder="Var flyger du ifrån?" value={this.state.from} onChange={this.handleFrom} />
                <hr />
                <p><a href="">Stockholm</a>, <a href="">Göteborg</a> eller <a href="">Malmö</a></p>
              </label>

              <label htmlFor="to" className="to">
                <h4>Flyg till</h4>
                <input type="text" id="to" placeholder="Vart flyger du till?" value={this.state.to} onChange={this.handleTo} />
                <hr />
              </label>
            </div>
            <br />
            <button type="submit">
              Boka
            </button>
            <hr />
          </form>
        </section>
      </div>
    </div>
  )
}
}
