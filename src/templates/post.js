import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
// import PostIcons from "../components/post-icons"
import Layout from "../components/layout"

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
        id
        title
        slug
        excerpt
        content
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    // console.log('post DATA ', post);

    return (
      <Layout>
          {/* Jatinder Posts YA! */}
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* {post.acf &&
          post.acf.page_builder_post &&
          post.acf.page_builder_post.map((layout, i) => {
            if (layout.__typename === `WordPressAcf_image_gallery`) {
              return (
                <div key={`${i} image-gallery`}>
                  <h2>ACF Image Gallery</h2>
                  {layout.pictures.map(({ picture }) => {
                    const img = picture.localFile.childImageSharp.fluid
                    return (
                      <img
                        src={img.src}
                        alt={img}
                      />
                    )
                  })}
                </div>
              )
            }
            if (layout.__typename === `WordPressAcf_post_photo`) {
              const img = layout.photo.localFile.childImageSharp.fluid
              return (
                <div key={`${i}-photo`}>
                  <h2>ACF Post Photo</h2>
                  <img
                    src={img.src}
                    alt={img}
                    />
                </div>
              )
            }
            return null
          })} */}
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate



// acf {
//     page_builder_post {
//       __typename
//       ... on WordPressAcf_post_photo {
//         photo {
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 680) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//       ... on WordPressAcf_image_gallery {
//         pictures {
//           picture {
//             localFile {
//               childImageSharp {
//                 fluid(maxWidth: 680) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }