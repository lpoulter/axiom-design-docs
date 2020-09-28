import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Heading, Strong, Paragraph } from "@brandwatch/axiom-components"
import Layout from "../components/Layout"

import "./index.css"

const IndexPage = ({ data }) => {
  const { fileName } = data

  return (
    <Layout>
      <div className="page-container">
        <div className="page">
          <div className="home-title">
            <Heading textSize="display2">
              <Strong>Axiom</Strong>
            </Heading>
            <Heading textSize="headtitle" textColor="subtle">
              Our design system used to create best in class products
            </Heading>
          </div>
          <Img fluid={fileName.childImageSharp.fluid} className="cover-image" />
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
        fluid(maxWidth: 990) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
