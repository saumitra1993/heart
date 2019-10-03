import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Joke extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      jokePrompt: "Loading..",
      jokeAnswer: "",
      showAnswer: false,
    }
  }

  componentDidMount() {
    this.fetchJoke()
  }

  async fetchJoke() {
    let response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    )

    if (response.ok) {
      let json = await response.json()
      this.setState({ jokePrompt: json.setup, jokeAnswer: json.punchline })
    } else {
      alert("HTTP-Error: " + response.status)
    }
  }

  showAnswer = () => {
    this.setState({ showAnswer: true })
  }

  render() {
    return (
      <Layout>
        <SEO title="Travel" />
        <div style={{ textAlign: "center" }}>
          <h1>Let's hear a joke!</h1>
          <br />
          <br />
          <br />
          <br />
          <h2>{this.state.jokePrompt}</h2>
          <br />
          <br />
          {this.state.jokePrompt !== "Loading.." && (
            <button className="button" onClick={this.showAnswer}>
              Show punchline!
            </button>
          )}
          <br />
          <br />
          {this.state.showAnswer ? <h3>{this.state.jokeAnswer}</h3> : ""}
        </div>

        <br />
        <br />

        <br />
        <br />
        <p>
          Please note, these jokes might make you more upset depending on which
          one you end up getting. Talking to me directly in such situations is
          highly recommended. :)
        </p>
      </Layout>
    )
  }
}

export default Joke
