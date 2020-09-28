import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icon.svg" }) {
        publicURL
      }
    }
  `)

  return <img src={data.placeholderImage.publicURL} alt="hacktoberfest2019" />
}

export default Image
