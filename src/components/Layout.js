import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import "./Layout.css"

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query ComponentNameQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              component_name
              main_introduction
            }
          }
        }
      }
    }
  `)
  const componentNames = data.allMarkdownRemark.edges.map(edge => {
    return edge.node.frontmatter.component_name
  })
  return (
    <div className="ax-theme--day layout">
      <Topbar />
      <Sidebar componentNames={componentNames} />
      <div className="layout__content">{children}</div>
    </div>
  )
}

export default Layout
