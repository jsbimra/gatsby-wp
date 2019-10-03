import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const pageQuery = graphql`
   query($id: String!) {
        wordpressPage(id: {eq: $id}) {
            id
            title
            content
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title 
                subtitle
            }
        }
   }
`;

class Page extends Component {
    render() {
        console.log(this.props);
        const currentPage = this.props.data.wordpressPage;
        console.log(this.props.data);

        return (
            <Layout>
                <section>
                <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
                    <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
                </section>
            </Layout>
        )
    }
}

export default Page;