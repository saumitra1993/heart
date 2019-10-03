import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../images/heart.png"
import SEO from "../components/seo"
import Typography from "typography"
import funstonTheme from "typography-theme-funston"

const typography = new Typography(funstonTheme)
typography.injectStyles()

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ margin: "auto", textAlign: "center" }}>
      <img width="10%" src={Image} style={{ border: "none" }} />
    </div>
    <h1>Exactly four years ago today,</h1>
    <p>
      I asked you to give me a shot, by handing you a tiny heart-shaped biscuit.
      For the last four years, you have taken such amazing care of it (my actual
      heart that is, not the biscuit, we ate the biscuit).
    </p>
    <p>
      This anniversary, I thought my symbolic heart should <i>do</i> something,
      because I intend for my heart to be with you for a long long time. So this
      is it - an attempt at making my heart speak to you, entertain you and
      cheer you up on a sad day.
    </p>

    <h5>Here are some things my symbolic heart can do for you -</h5>
    <ul>
      <li className="things">
        <Link to="/travel/">Show me the places we will travel to.</Link>
      </li>
      <li className="things">
        <Link to="/joke/">I am upset! Do something!</Link>
      </li>
      <li className="things">
        <Link to="/decision/">Help me make a decision.</Link>
      </li>
      <li className="things">
        <Link to="/dog/">Show me a dog photo.</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
