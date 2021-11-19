import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { slug } = data.butterPage
  const { title, meta_description } = data.butterPage.seo
 console.log('slug', slug);
  return (
    <div>
      <Layout>
        <h1>{title}</h1>
        <h2>{meta_description}</h2>
        <div dangerouslySetInnerHTML={{ __html: slug }} />
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    butterPage(slug: { eq: $slug }) {
      slug
      seo {
        title
        meta_description
      }
    }
  }
`
