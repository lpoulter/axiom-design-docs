import React, { useState } from "react"
import { Link } from "gatsby"
import {
  TextInput,
  TextInputIcon,
  Paragraph,
} from "@brandwatch/axiom-components"

import "./Sidebar.css"

function ParentLink({ parent, children }) {
  const [isOpen, setIsOpen] = useState()
  return (
    <>
      <a
        className="sidebar__link parent__link"
        onClick={() => setIsOpen(lastValue => !lastValue)}
      >
        <Paragraph textColor="subtle">{parent}</Paragraph>
      </a>

      {isOpen &&
        children.map(name => {
          return (
            <li key={name}>
              <Link
                key={name}
                className="sidebar__link"
                activeClassName="sidebar__link--active"
                to={`/${name.toLowerCase()}`}
              >
                <Paragraph textColor="subtle">{name}</Paragraph>
              </Link>
            </li>
          )
        })}
    </>
  )
}

function Sidebar({ components }) {
  const [filterString, setFilterString] = useState("")
  // const filterComponents = components.filter(({ name }) =>
  //   name.toLowerCase().includes(filterString.toLowerCase())
  // )

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
        {Object.entries(components).map(([parent, children]) => {
          if (parent === "noParent") {
            return children.map(name => {
              return (
                <li key={name}>
                  <Link
                    key={name}
                    className="sidebar__link"
                    activeClassName="sidebar__link--active"
                    to={`/${name.toLowerCase()}`}
                  >
                    <Paragraph textColor="subtle">{name}</Paragraph>
                  </Link>
                </li>
              )
            })
          }

          return (
            <li key={parent}>
              <ParentLink parent={parent} children={children} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
