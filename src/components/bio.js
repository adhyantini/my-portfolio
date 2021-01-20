/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="flex mb-20">
      <Image
        className="mr-4 mb-0 rounded-full"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          minWidth: 50,
        }}
      />
      <p>
        Hey I am <strong>{author}</strong>. I live in Pune,India and work here
        too!
        {` `}
        <br />
        Click here to follow me on
        <a
          className="text-blue-600"
          href={`https://www.linkedin.com/in/${social.twitter}`}
        >
          {" "}
          LinkedIn
        </a>
        ,
        <a className="text-blue-600" href={`https://github.com/adhyantini`}>
          {" "}
          GitHub
        </a>
        ,
        <a className="text-blue-600" href={`https://medium.com/@adhyantini`}>
          {" "}
          Medium
        </a>
        .
      </p>
    </div>
  )
}

export default Bio
