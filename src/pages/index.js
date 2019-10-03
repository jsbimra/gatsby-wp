import React, { Component } from "react"
import { Link, graphql} from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    },
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`;



// const IndexPage = (props) => {

class IndexPage extends Component {

  render() {
    const data = this.props.data;
    console.log('data index', data);

    return (
      <Layout>
        <SEO title="Home" />

        <table>
          <thead>
          <tr>
            <th width="50%"><h1>Pages</h1></th>
            <th width="50%"><h1>Posts</h1></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td valign="top">

            {data.allWordpressPage.edges.sort((a, b) => a.node.date > b.node.date ?  1 : -1).map(({ node }) => (
              <div key={node.slug}>
                <Link to={node.slug} css={{ textDecoration: `none` }}>
                  <h3>{node.title}</h3>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                <span>
                  {/* <FaRegClock
                  size={14}
                  css={{ position: `relative`, bottom: 1 }}
                /> */}
                  {` `}
                  {node.date}
                </span>
              </div>
            ))}
            
            </td>
            <td valign="top">

            {data.allWordpressPost.edges.sort((a, b) => a.node.date > b.node.date ?  1 : -1).map(({ node }) => (
              <div key={node.slug}>
                <Link to={node.slug} css={{ textDecoration: `none` }}>
                  <h3>{node.title}</h3>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                <span>
                  {/* <FaRegClock
                  size={14}
                  css={{ position: `relative`, bottom: 1 }}
                /> */}
                  {` `}
                  {node.date}
                </span>
              </div>
            ))}
            
            </td>
          </tr>
          </tbody>
        </table>

        
        


        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
