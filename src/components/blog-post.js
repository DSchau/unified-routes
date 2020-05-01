import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import Layout from './layout'

import heroStyles from './hero.module.css'

function BlogPost({ data, location }) {
const siteTitle = `Test`
    return (
      <Layout location={location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${data.title} | ${siteTitle}`} />
          {data.heroImage && (
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={data.title}
              fluid={data.heroImage.fluid}
            />
          </div>
          )}
          <div className="wrapper">
            <h1 className="section-headline">{data.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {data.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: data.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
}

export default BlogPost

export const pageQuery = graphql`
  fragment BlogPostDetails on ContentfulBlogPost {
    title
    publishDate(formatString: "MMMM Do, YYYY")
    heroImage {
      fluid(maxWidth: 1180, background: "rgb:000000") {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
    body {
      childMarkdownRemark {
        html
      }
    }
  }
`
