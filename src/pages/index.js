import React from "react"
import { graphql } from "gatsby"
import {
  Base,
  Heading,
  Button,
  Strong,
  Image,
} from "@brandwatch/axiom-components"
import SideNav from "../components/SideNav"
import CoverImage from "../../static/assets/homepage.png"

import "./index.css"

const IndexPage = ({ data }) => {
  const documentNames = data.allMarkdownRemark.edges.map(edge => {
    return edge.node.frontmatter.component_name
  })

  return (
    <Base className="home-nav-container ax-theme--day">
      <SideNav documents={documentNames} />
      <div className="page-container">
        <div className="page">
          <div className="home-title">
            <Heading textSize="display1">
              <Strong>axiom </Strong>Design System{" "}
            </Heading>
          </div>

          <img src={CoverImage} className="cover-image" />
        </div>
      </div>
    </Base>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
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
`
