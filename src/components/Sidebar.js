import React, { useState } from "react"
import { Link } from "gatsby"
import {
  TextInput,
  TextInputIcon,
  Paragraph,
} from "@brandwatch/axiom-components"

import "./Sidebar.css"

function Sidebar({ componentNames }) {
  const [filterString, setFilterString] = useState("")
  const filterComponents = componentNames.filter(name =>
    name.toLowerCase().includes(filterString.toLowerCase())
  )

  return (
    <div className="sidebar">
      <div className="sidebar__search-container">
        <TextInput
          aria-label="Search components"
          placeholder="Search components"
          value={filterString}
          onChange={e => setFilterString(e.target.value)}
        >
          <TextInputIcon align="left" name="magnify-glass" iconColor="subtle" />
        </TextInput>
      </div>

      <ul className="sidebar__links">
        {filterComponents.map(componentName => {
          return (
            <li key={componentName}>
              <Link
                key={componentName}
                className="sidebar__link"
                activeClassName="sidebar__link--active"
                to={`/${componentName.toLowerCase()}`}
              >
                <Paragraph textColor="subtle">{componentName}</Paragraph>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
