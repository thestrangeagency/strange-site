/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import Link from 'gatsby-link'

const PostCard = ({posts}) => {
  return (
    <div className='container'>
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({node: post}) => (
          <div
            className='box'
            key={post.id}
          >
            <p>
              <Link className='has-text-primary blog-title' to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <span className='blog-date'>{post.frontmatter.date}</span>
            </p>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className='button is-link' to={post.fields.slug}>
                                Keep Reading →
              </Link>
            </p>
          </div>
        ))}
    </div>
  )
}

export default PostCard
