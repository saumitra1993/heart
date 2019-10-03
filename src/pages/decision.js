import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Decision extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      optionsCount: 2,
      showDecision: false,
      decisionText: "",
    }
  }

  addNewOption = () => {
    this.setState({ optionsCount: this.state.optionsCount + 1 })
  }

  returnOptions(n) {
    let options = []
    for (let i = 0; i < n; ++i) {
      options.push(
        <div key={i}>
          <input id={i} type="text" placeholder="for eg. buy the grey watch" />
          {i < n - 1 ? <h4 style={{ margin: "10px" }}>OR</h4> : ""}
        </div>
      )
    }
    return <div className="options">{options}</div>
  }

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  decide = () => {
    let decisionIndex = this.getRandomInt(0, this.state.optionsCount - 1)
    let decisionText = document.getElementById(String(decisionIndex)).value

    this.setState({ decisionText: decisionText, showDecision: true })
  }

  render() {
    return (
      <Layout>
        <SEO title="Travel" />
        <h1>Okay, let's do this.</h1>
        <br /> <br />
        <h3>Tell me what are the possible options.</h3>
        <br /> <br />
        <br />
        <a
          style={{ margin: 0, textDecoration: "underline", display: "block" }}
          onClick={this.addNewOption}
        >
          Add new option
        </a>
        <br />
        <div className="optionsContainer">
          {this.returnOptions(this.state.optionsCount)}
        </div>
        <br /> <br />
        <br /> <br />
        <button
          className="button"
          onClick={this.decide}
          style={{ background: "#ed1556", margin: 0 }}
        >
          Tell me what to do!
        </button>
        <br /> <br />
        <br />
        {this.state.showDecision ? (
          <div>
            <h4 style={{ margin: 0 }}>
              I think you should - {this.state.decisionText}
            </h4>
            <br />
            <p>
              Just press the button again if you don't think I have made the
              right choice.
            </p>
          </div>
        ) : (
          ""
        )}
      </Layout>
    )
  }
}

export default Decision
