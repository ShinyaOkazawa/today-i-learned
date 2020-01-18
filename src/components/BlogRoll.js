import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="blogroll">
        {posts &&
          posts.map(({ node: post }) => (
            <article
              className="blogroll__article"
              key={post.id}
            >
              <header className="blogroll__header">
                <div className="blogroll__meta">
                  <h1 className="blogroll__title">
                    <Link
                      className="blogroll__title-link"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h1>
                  <span className="blogroll__date">
                    {post.frontmatter.date}
                  </span>
                </div>
              </header>
            </article>
          )
        )}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
