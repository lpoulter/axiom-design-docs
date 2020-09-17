import React from "react"
import { Link } from "gatsby"

import { Base, Heading, TextInput, Strong } from "@brandwatch/axiom-components"

import "./sidenav.css"

const SideNav = ({ documents }) => {
  return (
    <div className="sideNav">
      <TextInput placeholder="search components" />
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
