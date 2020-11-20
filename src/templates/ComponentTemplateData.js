import React from "react"
import { graphql } from "gatsby"
import ComponentTemplate from "./componentTemplate"

export default function ComponentTemplateData({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  console.log('front', frontmatter.parent_component)

  return (
    <ComponentTemplate
      title={frontmatter.title}
      mainIntroduction={frontmatter.main_introduction}
      sections={frontmatter.sections}
    />
  )
}

export const pageQuery = graphql`
  fragment BlockList on Sections {
    type
    title
    blocks {
      title
      text
      image
      alt
      align
      imageWidth
    }
  }

  query($component_name: String!) {
    markdownRemark(frontmatter: { component_name: { eq: $component_name } }) {
      frontmatter {
        title
        component_name
        main_introduction
        sections {
          ...BlockList
        }
      }
    }
  }
`
