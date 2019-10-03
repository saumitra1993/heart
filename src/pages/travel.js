import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Travel = () => (
  <Layout>
    <SEO title="Travel" />

    <br />
    <button className="button" onClick={reload}>
      Show Me Next Travel Photo!
    </button>
    <br />
    <br />
    <div style={{ width: "90%", margin: "auto", textAlign: "center" }}>
      <img
        alt="travel"
        src="http://source.unsplash.com/collection/1376658"
      ></img>
    </div>
  </Layout>
)

function reload() {
  window["location"]["reload"]()
}

export default Travel
