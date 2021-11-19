const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const template = path.resolve(`src/templates/post.js`)

  return graphql(`
    {
      allButterPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allButterPost.edges.forEach(({ node }) => {
      console.log(node)
      createPage({
        path: `/blog/${node.slug}`,
        component: template,
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
