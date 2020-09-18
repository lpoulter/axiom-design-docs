import React from "react"
import { Link } from "gatsby"
import { Base, TextInput, TextInputIcon } from "@brandwatch/axiom-components"

import "./Sidebar.css"

function Sidebar({ componentNames }) {
  return (
    <div className="sidebar">
      <TextInput aria-label="Search components" placeholder="Search components">
        <TextInputIcon align="left" name="magnify-glass" iconColor="subtle" />
      </TextInput>
      <ul className="sidebar__links">
        {componentNames.map(componentName => {
          return (
            <li key={componentName}>
              <Link
                key={componentName}
                className="sidebar__link"
                activeClassName="sidebar__link--active"
                to={`/${componentName.toLowerCase()}`}
              >
                {componentName}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
