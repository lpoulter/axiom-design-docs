import React from "react"
import { Link } from "gatsby"
import { Heading, Strong } from "@brandwatch/axiom-components"
import BrandwatchLogo from "./BrandwatchLogo"

import "./Topbar.css"

function Topbar() {
  return (
    <div className="topbar">
      <Link to='/' className="topbar__link">
        <BrandwatchLogo className="topbar__logo" size="28px" />
        <Heading
          className="topbar__heading"
          textSize="headline"
          textColor="subtle"
        >
          <Strong>Axiom - Design Docs</Strong>
        </Heading>
      </Link>

    </div>
  )
}

export default Topbar
