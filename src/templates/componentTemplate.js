import React from "react"
import { graphql } from "gatsby"
import PageHeading from "../axiom-docs/PageHeading"
import SectionTitle from "../axiom-docs/SectionTitle"
import ImageWithCopy from "../axiom-docs/ImageWithCopy"
import SideNav from "../components/SideNav"

import "./componenttemplate.css"

export default function ComponentTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  console.log("frontmatter", frontmatter)
  const documentNames = data.allMarkdownRemark.edges.map(edge => {
    return edge.node.frontmatter.component_name
  })
  console.log(documentNames)
  return (
    <div className="template-container ax-theme--day">
      <SideNav documents={documentNames} />
      <div className="blog-post-container">
        <div className="blog-post">
          <PageHeading
            title={frontmatter.component_name}
            content={frontmatter.introduction}
          />
          {Object.entries(frontmatter.section).map(([key, value]) => {
            if (!value) return null
            return (
              <div>
                <SectionTitle
                  title={value.title}
                  content={value.introduction}
                />
                <ImageWithCopy img={value.image} content={value.introduction} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($component_name: String!) {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            component_name
          }
        }
      }
    }
    markdownRemark(frontmatter: { component_name: { eq: $component_name } }) {
      frontmatter {
        title
        component_name
        introduction
        section {
          section_1 {
            title
            introduction
          }
          section_2 {
            title
            introduction
          }
          section_3 {
            title
            introduction
          }
          section_4 {
            title
            introduction
          }
        }
      }
    }
  }
`

// export const tomm = graphql`
//   query tomm {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             component_name
//           }
//         }
//       }
//     }
//   }
// `
