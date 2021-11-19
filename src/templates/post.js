import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { title, date, body } = data.butterPost
  return (
    <div>
      <Layout>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    butterPost(slug: { eq: $slug }) {
      title
      date
      body
    }
  }
`
