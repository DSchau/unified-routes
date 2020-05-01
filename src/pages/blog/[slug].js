import React from 'react'
import { createPagesFromData, graphql } from 'gatsby'

import BlogPost from '../../components/blog-post'

export default createPagesFromData(BlogPost, graphql`
  {
    allContentfulBlogPost(filter: { slug: { ne: null }}) {
      nodes {
        slug
        title
        publishDate(formatString: "MMMM Do, YYYY")
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`)
