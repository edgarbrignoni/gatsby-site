import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const BlogPage = ({ data }) => {
  const posts = data.allButterPage.edges.map(({ node }) => {
    return (
      <div key={node.id}>
        <Link to={`/blog/${node.slug}`}>{node.seo.meta_description}</Link>
        <br />
      </div>
    )
  })

  return <Layout>{posts}</Layout>
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allButterPage {
      edges {
        node {
          id
          slug
          seo {
            title
            meta_description
          }
        }
      }
    }
  }
`
