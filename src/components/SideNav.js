import React from "react"
import { Link } from "gatsby"
import { Base, TextInput, TextInputIcon } from "@brandwatch/axiom-components"

import "./sidenav.css"

const SideNav = ({ documents }) => {
  return (
    <div className="sideNav">
      <TextInput aria-label="Search components" placeholder="Search components">
        <TextInputIcon align="left" name="magnify-glass" iconColor="subtle" />
      </TextInput>
      <ul>
        {documents.map(doc => {
          return (
            <li key={doc}>
              <Base className="sidebar__link">
                <Link
                  activeClassName="sidebar__link active"
                  key={doc}
                  className="sidebar__link"
                  to={`/${doc.toLowerCase()}`}
                >
                  {doc}
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
