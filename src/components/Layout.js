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
              parent_component
            }
          }
        }
      }
    }
  `)
  const components = data.allMarkdownRemark.edges.map(edge => ({
    name: edge.node.frontmatter.component_name,
    parent: edge.node.frontmatter.parent_component,
  }))

  const componentsByParent = {}
  components.forEach(({ name, parent }) => {
    if (parent) {
      componentsByParent[parent]
        ? componentsByParent[parent].push(name)
        : (componentsByParent[parent] = [name])
    } else {
      componentsByParent["noParent"]
        ? componentsByParent["noParent"].push(name)
        : (componentsByParent["noParent"] = [name])
    }
  })

  console.log("componentsByParent", componentsByParent)

  return (
    <div className="ax-theme--day layout">
      <Topbar />
      <Sidebar components={componentsByParent} />
      <div className="layout__content">{children}</div>
    </div>
  )
}

export default Layout
