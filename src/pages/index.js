import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Heading, Strong } from "@brandwatch/axiom-components"
import Layout from "../components/Layout"

import "./index.css"

const IndexPage = ({ data }) => {
  const { fileName } = data

  return (
    <Layout>
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
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomepageQuery {
    fileName: file(relativePath: { eq: "cover-image-990.png" }) {
      childImageSharp {
        fixed(width: 990) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
