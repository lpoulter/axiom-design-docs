import React from "react"
import { Link } from "gatsby"
import { Base, TextInput, TextInputIcon } from "@brandwatch/axiom-components"

import "./sidenav.css"

const SideNav = ({ componentNames }) => {
  return (
    <div className="sideNav">
      <TextInput aria-label="Search components" placeholder="Search components">
        <TextInputIcon align="left" name="magnify-glass" iconColor="subtle" />
      </TextInput>
      <ul>
        {componentNames.map(componentName => {
          return (
            <li key={componentName}>
              <Base className="sidebar__link">
                <Link
                  activeClassName="sidebar__link active"
                  key={componentName}
                  className="sidebar__link"
                  to={`/${componentName.toLowerCase()}`}
                >
                  {componentName}
                </Link>
              </Base>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideNav
