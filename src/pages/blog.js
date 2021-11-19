import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const BlogPage = ({ data }) => {
  const posts = data.allButterPage.edges.map(({ node }) => {
    return (
      <div>
        <Link key={node.id} to={`/blog/${node.slug}`}>
          {node.seo.title}
        </Link>
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
          }
        }
      }
    }
  }
`
