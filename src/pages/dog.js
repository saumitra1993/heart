import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Dog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoUrl: "",
    }
  }

  componentDidMount() {
    this.fetchDogPhoto()
  }

  async fetchDogPhoto() {
    let response = await fetch(
      "https://dog.ceo/api/breed/labrador/images/random"
    )

    if (response.ok) {
      let json = await response.json()
      this.setState({ photoUrl: json.message })
    } else {
      alert("HTTP-Error: " + response.status)
    }
  }

  reload() {
    window["location"]["reload"]()
  }

  render() {
    return (
      <Layout>
        <SEO title="Travel" />
        <br />
        <button className="button" onClick={this.reload}>
          Show Me Next Dog Photo!
        </button>
        <br />
        <br />
        {this.state.photoUrl !== "" && (
          <div style={{ width: "90%", margin: "auto", textAlign: "center" }}>
            <img alt="dogs" src={this.state.photoUrl}></img>
          </div>
        )}
      </Layout>
    )
  }
}

export default Dog
