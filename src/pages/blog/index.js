/**
 * Created by vaibhav on 31/3/18
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import PostCard from '../../components/PostCard'

export default class BlogPage extends Component {
  render () {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark

    return (
      <div>
        <Helmet>
          <title>Blog | Gatsby Starter Business</title>
        </Helmet>
        <section className='section'>
          <div className='container has-text-centered'>
            <h1 class='title is-size-1-desktop is-size-1-tablet is-size-2-mobile'>Blog</h1>
            <h2 class='subtitle'>What&apos;s Up</h2>
          </div>
        </section>
        <section className='section'>
          <PostCard posts={posts} />
        </section>
      </div>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const blogPageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            cover
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
