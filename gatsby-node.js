/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type BlockList {
    title: String
    text: String
    image: String
    alt: String
    align: String
  }
  
  type Sections {
    type: String
    title: String
    blocks: [BlockList]
  }

  type MarkdownRemarkFrontmatter {    
    component_name: String
    title: String
    main_introduction: String
    sections: [Sections]
  }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const componentTemplate = require.resolve(
    `./src/templates/ComponentTemplateData.js`
  )

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___component_name] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              component_name
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(
      "Building page for: ",
      node.frontmatter["component_name"].trim().toLowerCase()
    )

    createPage({
      path: node.frontmatter["component_name"].trim().toLowerCase(),
      component: componentTemplate,
      context: {
        // additional data can be passed via context
        ["component_name"]: node.frontmatter["component_name"],
      },
    })
  })
}
