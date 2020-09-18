import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  Base,
  Heading,
  Button,
  Strong,
  Image,
} from "@brandwatch/axiom-components"
import Sidebar from "../components/Sidebar"

import "./index.css"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark, fileName } = data
  const componentNames = allMarkdownRemark.edges.map(edge => {
    return edge.node.frontmatter.component_name
  })

  return (
    <Base className="home-nav-container ax-theme--day">
      <Sidebar componentNames={componentNames} />
      <div className="page-container">
        <div className="page">
          <div className="home-title">
            <Heading textSize="display1">
              <Strong>axiom </Strong>Design System{" "}
            </Heading>
          </div>

          <Img fixed={fileName.childImageSharp.fixed} className="cover-image" />
        </div>
      </div>
    </Base>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomepageQuery {
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
    fileName: file(relativePath: { eq: "cover-image-990.png" }) {
      childImageSharp {
        fixed(width: 990) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
